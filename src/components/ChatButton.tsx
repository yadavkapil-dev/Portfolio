"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define message type for full TS safety
type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "What skills do you have?",
  "Tell me about your projects",
  "What did you build at Softlabs?",
  "What is XFlyve?",
  "What experience do you have?",
  "Are you available full-time?",
  "Where can I see your resume?",
];

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const chatRef = useRef<HTMLDivElement>(null);
  const bodyOverflowRef = useRef<string>("");

  // 🔒 Lock/unlock body scroll when chat opens/closes
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (open) {
      bodyOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = bodyOverflowRef.current || "";
    }

    return () => {
      document.body.style.overflow = bodyOverflowRef.current || "";
    };
  }, [open]);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 100);
  };

  // Load saved chat (client only)
  useEffect(() => {
    const saved = localStorage.getItem("kapil-ai-chat");
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  // Save chat + scroll
  useEffect(() => {
    localStorage.setItem("kapil-ai-chat", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  // Send message
  const sendMessage = async (text: string = "") => {
    const msgToSend = (text || input).trim();
    if (!msgToSend) return;

    const userMsg: ChatMessage = { role: "user", content: msgToSend };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msgToSend }),
      });

      const data = await res.json();

      const botMsg: ChatMessage = {
        role: "assistant",
        content: data.reply || "Sorry — I couldn't process that. Please try again.",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Error: Unable to connect right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        animate={{ y: open ? 10 : 0 }}
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        className="fixed bottom-20 right-5 md:right-6 w-12 h-12 md:w-14 md:h-14
                   rounded-full bg-accent hover:bg-accent-hover text-fg
                   flex items-center justify-center shadow-lg shadow-black/30
                   text-xl md:text-2xl cursor-pointer transition z-[999]"
      >
        💬
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 130, damping: 14 }}
            className="fixed inset-0 z-[9999] flex items-end justify-end pointer-events-none"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 pointer-events-auto"
              onClick={() => setOpen(false)}
            />

            {/* Chat window */}
            <div className="relative bottom-6 right-4 md:right-6 pointer-events-auto">
              <div
                className="w-72 md:w-80 h-[420px] md:h-[500px]
                           bg-elevated backdrop-blur-xl border border-border rounded-xl
                           shadow-xl shadow-black/30 p-4 flex flex-col text-fg"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="font-semibold text-sm md:text-base text-fg">
                      Kapil’s Portfolio Assistant
                    </p>
                    <p className="text-[11px] md:text-xs text-fg-muted">
                      Ask about projects, experience, skills, or availability.
                    </p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => {
                        localStorage.removeItem("kapil-ai-chat");
                        setMessages([]);
                      }}
                      className="text-fg-secondary hover:text-fg text-xs cursor-pointer"
                    >
                      Clear
                    </button>

                    <button
                      className="text-fg-muted hover:text-fg text-lg cursor-pointer"
                      onClick={() => setOpen(false)}
                      aria-label="Close chat"
                    >
                      ✖
                    </button>
                  </div>
                </div>

                {/* Scroll area */}
                <div
                  ref={chatRef}
                  className="flex-1 overflow-y-auto overscroll-contain space-y-3 text-xs md:text-sm
                             p-2 rounded-lg border border-border"
                >
                  {/* Suggestions (only when chat is empty) */}
                  {messages.length === 0 && (
                    <div className="text-fg-secondary">
                      <p className="font-semibold mb-2 text-fg">Try asking:</p>

                      <div className="flex flex-wrap gap-2">
                        {SUGGESTED_QUESTIONS.map((q) => (
                          <button
                            key={q}
                            onClick={() => sendMessage(q)}
                            className="px-2 py-1 bg-surface border border-border
                                       rounded-md hover:bg-accent-soft hover:border-accent/40
                                       transition text-fg-secondary"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Messages */}
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18 }}
                      className={`p-2 rounded-lg max-w-[88%] leading-relaxed whitespace-pre-line ${
                        msg.role === "user"
                          ? "ml-auto bg-accent text-fg"
                          : "bg-surface text-fg-secondary"
                      }`}
                    >
                      {msg.content}
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {loading && (
                    <div className="bg-surface text-fg-secondary p-2 rounded-lg inline-block">
                      ✨ Thinking…
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="mt-3 flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    placeholder="Ask me something..."
                    className="flex-1 px-3 py-2 rounded-md bg-surface
                               border border-border text-fg outline-none"
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={loading}
                    className="px-3 py-2 bg-accent hover:bg-accent-hover text-fg
                               rounded-md text-xs md:text-sm disabled:opacity-60"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
