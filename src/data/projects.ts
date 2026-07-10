export const projects = [
  {
  id: "xflyve",
  title: "XFlyve Logistics Platform",
  image: "/projects/xflyve.png",
  description:
    "A full-stack logistics platform built after identifying manual operational workflows in a transport company. It digitises job management, Proof of Delivery, work diaries, invoicing workflows, and driver operations using a role-based system.",

  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Cloudinary",
    "Docker",
    "GitHub Actions",
    "Vercel",
    "Render",
  ],

  live: "https://xflyve.vercel.app/",
  github: "https://github.com/yadavkapil-dev/XFlyve",

  details: `
XFlyve is a full-stack logistics workflow platform that I independently designed and built after identifying repetitive manual processes while working in fleet operations.

✦ Problem:
Daily logistics operations relied heavily on spreadsheets, WhatsApp messages, phone calls, paperwork, and manual follow-ups for job tracking, Proof of Delivery (POD), and compliance records.

✦ Solution:
Built a role-based logistics platform that centralises operational workflows for both administrators and drivers.

✦ Key Features:
- Admin dashboard for creating, assigning, tracking, and managing jobs
- Driver dashboard for viewing assigned jobs and updating job progress
- Proof of Delivery uploads and approval workflows
- Work diary and daily work record management
- Invoice-readiness rules for local and interstate jobs
- JWT authentication and role-based access control
- Cloudinary image uploads
- Excel and ZIP export tools for reporting
- Docker containerisation and GitHub Actions CI/CD

✦ Technical Highlights:
- React frontend with Material UI
- Express REST API
- MongoDB with Mongoose
- JWT authentication
- Role-based authorization
- Helmet, rate limiting, structured logging
- Artillery load testing
- Deployment using Vercel and Render

✦ Outcome:
The platform replaced fragmented manual workflows with a structured web application that improved day-to-day logistics operations and centralised business processes.
`,
 },

  {
    id: "wordpress",
    title: "Community Voice | WordPress Plugin",
    image: "/projects/Wordpress.png",
    description:
      "A custom WordPress plugin built during my internship to replace manual email-based submissions with a structured request tracking workflow.",
    tech: ["PHP", "WordPress APIs", "MySQL", "File Uploads", "Email Notifications"],
    live: "https://sreenipillamarri.com.au/",
    details: `
Community Voice is a custom WordPress plugin built during my internship at Softlabs to replace email-only submissions with a structured workflow inside WordPress.

✦ Key Features:
- Frontend request form with optional anonymous submission
- File upload support and structured request storage
- Admin dashboard for request tracking and status management
- Email notifications for admins and users
- Reference ID generation for submitted requests

✦ Purpose:
Built to improve request visibility, reduce manual email handling, and create a more reliable tracking process for community submissions.
    `,
  },

  {
    id: "wanderlust",
    title: "Wanderlust | Accommodation Booking Platform",
    image: "/projects/Wanderlust.png",
    description:
      "A full-stack accommodation booking platform with authentication, listing management, image uploads, reviews, and booking workflows.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Cloudinary"],
    live: "https://wanderlust-zba2.onrender.com/listings",
    github: "https://github.com/yadavkapil-dev/Wanderlust",
    details: `
Wanderlust is a full-stack accommodation booking platform inspired by modern travel marketplace applications.

✦ Key Features:
- User authentication and session-based access
- Listing creation, editing, and deletion
- Booking and review workflows
- Cloudinary image upload and storage
- MVC backend architecture using Express and MongoDB
- Server-rendered pages using EJS

✦ Purpose:
Built to implement a complete accommodation booking workflow using backend routing, authentication, database modelling, image uploads, and server-rendered UI.
    `,
  },

  {
    id: "tradetrack",
    title: "TradeTrack | Trading Dashboard",
    image: "/projects/TradeTrack.png",
    description:
      "A full-stack trading dashboard for managing holdings, positions, simulated orders, and portfolio analytics.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "Material UI",
    ],
    live: "https://trade-track-front.vercel.app",
    github: "https://github.com/yadavkapil-dev/TradeTrack",
    details: `
TradeTrack is a full-stack trading dashboard that simulates portfolio management, holdings, positions, orders, and market analytics using a modern React interface.

✦ Key Features:
- Authentication with simulated user accounts
- Dashboard views for holdings, positions, and orders
- Interactive financial charts using Chart.js
- Simulated order placement and portfolio workflows
- Responsive UI for desktop and mobile devices

✦ Architecture:
- React frontend with reusable dashboard components
- Express backend with REST API routes
- MongoDB data models for portfolio and trading workflows

✦ Purpose:
Built to explore dashboard architecture, authentication, REST APIs, and data visualisation in a modern full-stack application.
    `,
  },

  {
    id: "meetify",
    title: "Meetify | Real-Time Video Meeting Platform",
    image: "/projects/Meetify.png",
    description:
      "A real-time video meeting platform built using WebRTC, Socket.IO, React, Node.js, Express, and MongoDB.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
    ],
    live: "https://meetify-frontend.onrender.com",
    github: "https://github.com/yadavkapil-dev/Meetify",
    details: `
Meetify is a full-stack real-time video meeting application built to support browser-based audio and video communication.

✦ Key Features:
- User authentication with register and login flows
- Meeting creation and join functionality
- Real-time audio and video streaming using WebRTC
- Socket.IO-based signalling for peer connection setup
- Responsive meeting interface across devices
- Meeting history stored in MongoDB

✦ Architecture:
- React frontend built with Vite
- Express backend with MongoDB for persistence
- WebRTC for peer-to-peer media streaming
- Socket.IO for signalling and room coordination

✦ Purpose:
Built to implement real-time communication using WebRTC, Socket.IO, authentication, and backend services.
    `,
  },
];