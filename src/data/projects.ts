export const projects = [
  {
  id: "xflyve",
  title: "XFlyve Logistics Platform",
  image: "/projects/xflyve.png",
  description:
    "Role-based fleet management platform with JWT authentication and server-enforced ownership checks across admin and driver portals. MongoDB schemas with a job lifecycle state machine and automatic truck-status synchronisation. 514 backend, 176 frontend, and 5 end-to-end tests (Jest, Playwright), GitHub Actions CI/CD gating Docker builds, containerised deployment, and a role-gated AI assistant.",

  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Cloudinary",
    "Docker",
    "GitHub Actions",
    "Jest",
    "Playwright",
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
      "A custom WordPress plugin built during my internship to replace manual email-based submissions with a structured request tracking workflow. Also built and tested an AI chatbot integration on a staging environment to assist visitors and handle pre-qualifying questions.",
    tech: ["PHP", "WordPress Plugin APIs", "MySQL"],
    live: "https://sreenipillamarri.com.au/",
    details: `
Community Voice is a custom WordPress plugin built during my internship at Softlabs to replace email-only submissions with a structured workflow inside WordPress.

✦ Key Features:
- Frontend request form with optional anonymous submission
- File upload support and structured request storage
- Admin dashboard for request tracking and status management
- Email notifications for admins and users
- Reference ID generation for submitted requests
- Also built and tested an AI chatbot integration on a staging environment to assist visitors and handle pre-qualifying questions

✦ Security:
- WordPress nonces on form submission
- Server-side input sanitisation
- Prevention of direct file access

✦ Technical Constraints:
The site had no Elementor Pro licence, so custom page templates and a header.php approach weren't available. I implemented the functionality through functions.php and WordPress hooks instead, loading scripts conditionally rather than depending on paid features.

✦ Purpose:
Built to improve request visibility, reduce manual email handling, and create a more reliable tracking process for community submissions.
    `,
  },

  {
    id: "meetify",
    title: "Meetify | Real-Time Video Meeting Platform",
    image: "/projects/Meetify.png",
    description:
      "Real-time video meeting application using WebRTC for peer-to-peer audio/video and Socket.IO for signalling. Session-based authentication, meeting history, and REST APIs built with Node.js, Express, and MongoDB.",
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

  {
    id: "wanderlust",
    title: "Wanderlust | Accommodation Listings \& Reviews Platform",
    image: "/projects/Wanderlust.png",
    description:
      "Server-rendered accommodation listings and reviews platform built with Node.js, Express, EJS, and MongoDB, with session-based authentication and server-side ownership checks. Cloudinary for image uploads, Mapbox for geocoding, and Joi for request validation.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Passport.js", "Joi", "Mapbox", "Cloudinary"],
    live: "https://wanderlust-zba2.onrender.com/listings",
    github: "https://github.com/yadavkapil-dev/Wanderlust",
    details: `
Wanderlust is a full-stack accommodation listings and reviews platform inspired by modern travel marketplace applications.

✦ Key Features:
- User authentication and authorization with Passport.js
- Listing creation, editing, and deletion
- Review creation and management
- Interactive maps for listings using Mapbox
- Cloudinary image upload and storage
- Server-side validation using Joi
- MVC backend architecture using Express and MongoDB
- Server-rendered pages using EJS

✦ Purpose:
Built to implement a complete accommodation listings and reviews platform using backend routing, authentication, authorization, database modelling, image uploads, interactive maps, and server-rendered UI.
    `,
  },
];
