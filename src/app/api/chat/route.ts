// src/app/api/chat/route.ts
import { NextResponse } from "next/server";
import { aiKnowledge } from "@/data/aiKnowledge";

const FALLBACK_REPLY =
  "I don't have a canned answer for that one — email me at ykapil086@gmail.com or connect on LinkedIn (linkedin.com/in/yadav-kapil) and I'll get back to you directly.";

// Simple keyword router (fast + cheap)
function getLocalAnswer(message: string) {
  const q = message.toLowerCase();

  // High intent (most common)
  if (q.includes("skill") || q.includes("stack") || q.includes("tech"))
    return aiKnowledge.skills;

  if (q.includes("project") || q.includes("portfolio") || q.includes("case study"))
    return aiKnowledge.projects;

  if (q.includes("experience") || q.includes("intern") || q.includes("work"))
    return aiKnowledge.experience;

  if (q.includes("available") || q.includes("availability") || q.includes("full time") || q.includes("work rights"))
    return aiKnowledge.availability;

  if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("masters"))
    return aiKnowledge.education;

  if (q.includes("resume") || q.includes("cv"))
    return aiKnowledge.resume;

  if (q.includes("faq") || q.includes("questions"))
    return aiKnowledge.faqs;

  return null;
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Please type a question so I can help." },
        { status: 400 }
      );
    }

    // Local answer if the keyword router matches; otherwise a fixed reply
    // pointing to direct contact — no external AI call.
    const localAnswer = getLocalAnswer(message);
    return NextResponse.json({ reply: localAnswer || FALLBACK_REPLY });
  } catch {
    return NextResponse.json(
      { reply: "Sorry, I'm currently unavailable. Please try again later." },
      { status: 500 }
    );
  }
}
