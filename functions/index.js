import { onRequest } from "firebase-functions/v2/https";

// ─────────────────────────────────────────────────
// CORS helper
// ─────────────────────────────────────────────────
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function corsPreflightResponse(res) {
  res.set(corsHeaders);
  return res.status(200).json({ message: "Successful preflight" });
}

// ─────────────────────────────────────────────────
// /api/chat — Gemini API proxy
// Keeps the API key server-side (never exposed to browser)
// ─────────────────────────────────────────────────
export const chat = onRequest({ region: "us-central1" }, async (req, res) => {
  res.set(corsHeaders);

  if (req.method === "OPTIONS") return corsPreflightResponse(res);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res
        .status(500)
        .json({ error: "GEMINI_API_KEY is not configured in Firebase environment." });
    }

    const systemPrompt = `You are SyncBot, the official AI representative of Sagar Sync.

Reference Information (Sagar Sync Business Overview & Services):
1. About Sagar Sync:
- Comprehensive, locally-rooted service platform based in Makroniya, Sagar, Madhya Pradesh (India).
- Serves as a single point of contact for individuals, coaching centres, shop owners, businesses, and builders for digital, creative, printing, media, legal, events, and construction services.
- Managed service model: We understand requirements first, coordinate execution via our expert squad or network, and manage full delivery.

2. Core Philosophy & Pricing Process:
- "Understand first, quote later." No rigid upfront price lists or templates. Every quote is custom.
- Standard steps:
  * Inquiry logged (via form, WhatsApp, direct outreach).
  * Discovery conversation to understand project scope.
  * We provide a rough layout, wireframe, or concept first at NO CHARGE.
  * Present concept and share detailed itemised quote.
  * Client approves and work begins with clear milestones.

3. Detailed Service Catalogue:
- Design & Branding: Logos, complete brand systems, flex/digital banners, standard/premium business cards, wedding & event invitations, booklets/handbooks/catalogues, custom handmade art & crafts.
- Websites & Digital Presence: Business websites, landing pages, e-commerce stores, online ordering systems, online setup (Google Business Profile, local SEO, social media), website maintenance.
- Software & App Development: Custom billing software, inventory/stock tracking, daily sales/profit tracker, returns system, UPI/QR cash payment checkout support, Flutter mobile apps (Android/iOS), custom payroll/attendance software.
- Coaching Institute Solutions: Portal/app for study materials, fee management software, auto-payment reminders via WhatsApp/SMS, result management dashboards, note/book cover designs.
- Shop & Retail Owner Solutions: POS billing, thermal printer integration, daily/monthly profit calculators, low-stock triggers, WhatsApp online ordering, return & exchange flow management.
- Printing Services: Card printing, large format flex/banners, brochures/flyers, letterheads/stamps, custom coaching notebooks.
- Photography & Videography: Cinematic wedding films, pre-wedding location shoots, product catalogues, corporate/event coverage, video editing, social media reels.
- Legal & Financial: Consultations with local lawyers, ITR filing, GST returns, CA audits/balance sheets, MSME/trade licence business registrations, contracts/agreements.
- Events & Function Management: Wedding planning, tent/shamiana canopy setup, catering coordination, stage/decor floral lighting, parties/birthdays, corporate launches.
- Construction & Trade: House mapping floor plans, Revit 3D/2D CAD drawings, carpentry, iron smithing/welding, renovations/flooring, interior layout consulting.

4. Target Client Segments:
- Shop/retail owners, coaching centres, schools, builders/contractors, newlyweds/families, professionals (CAs, lawyers, doctors), social/political campaigns.

5. Key Differentiators:
- Hyperlocal Expertise: Physically based in Sagar, allowing site visits and local shoots.
- No-Pressure Pricing: Custom tailored to scope.
- Wide Range: Covers everything under one roof.
- Free Concept Drafts: Before asking for payments.

6. Team Members & Roles:
- Prathvi Singh Thakur: Team Leader, Game Dev & AI/ML Enthusiast (Unreal Engine 5, Blender 3D animation, Python AI/ML, React, hackathon 1st place winner).
- Sampoorn Choubey: Digital Marketing & Social Media Specialist (Content strategy, SEO, Meta Ads, platform growth, 45,000+ combined following, cross-platform campaigns).
- Mrityunjay Shukla: Full-Stack Web Developer (MERN stack, REST APIs, JWT authentication, DSA, 80+ LeetCode problems).
- Prajawal Rathore: Video Editor, Social Media Manager & Content Creator (Premiere Pro, After Effects, CapCut, DaVinci Resolve, 150+ videos edited, 300K+ combined views).
- Direct Contact Partners: Prathvi, Krishna Pathak, Sampoorn, Mrityunjay, and Prajawal.

7. Roadmap:
- Phase 1 (Launch): Local base build & inbound/outbound setup.
- Phase 2 (Pricing & Portfolio): Add public portfolio & client tracking portal.
- Phase 3 (Expansion): Hire staff, launch mobile app, expand to Damoh, Chhatarpur, Tikamgarh.

Instructions for you (SyncBot):
- Answer all inquiries accurately using the details above.
- Be extremely friendly, clear, direct, and concise (especially for mobile viewports).
- Highlight the free layout/wireframe policy whenever custom services or pricing are mentioned.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const fetchRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
      }),
    });

    const result = await fetchRes.json();
    return res.status(fetchRes.status).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
});

// ─────────────────────────────────────────────────
// /api/submit — Forwards contact form to Google Apps Script
// ─────────────────────────────────────────────────
export const submit = onRequest({ region: "us-central1" }, async (req, res) => {
  res.set(corsHeaders);

  if (req.method === "OPTIONS") return corsPreflightResponse(res);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, phone, email, service, brief } = req.body;

    if (!name || !phone || !email || !service || !brief) {
      return res
        .status(400)
        .json({ error: "All form fields are required." });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return res
        .status(500)
        .json({ error: "GOOGLE_SCRIPT_URL is not configured in Firebase environment." });
    }

    // Forward form data to Google Apps Script Web App
    const fetchRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, service, brief }),
    });

    const resultText = await fetchRes.text();

    return res.status(fetchRes.status).json({
      message: "Lead submitted successfully",
      details: resultText,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Failed to process submission" });
  }
});
