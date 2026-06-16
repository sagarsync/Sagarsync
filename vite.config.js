import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables from system and .env files
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-mock-plugin',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            // Log incoming API calls in local dev
            if (req.url.startsWith('/api/')) {
              console.log('[Vite Dev Server] Request:', req.method, req.url);
            }
            
            // 1. Local mock/proxy handler for /api/chat
            if (req.url === '/api/chat' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  const parsedBody = JSON.parse(body);
                  const userMessage = parsedBody.message;
                  
                  // Get GEMINI_API_KEY from environment variables (local or loaded)
                  const apiKey = env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
                  
                  // Fallback to mock responses if no API key is configured locally
                  if (!apiKey) {
                    const queryText = userMessage.toLowerCase();
                    let reply = "Thanks for connecting with Sagar Sync! I am currently running on local backup mode. For immediate queries, feel free to submit a brief on our Contact Page or reach out to us directly.";
                    
                    const offlineChatBotResponses = [
                      { keywords: ["bundle", "price", "pack", "charge"], answer: "We offer 3 specialized bundles: Coaching Institute Pack (₹19,999), Builder Elevation Bundle (₹16,499), and Local Business Kickstart (₹11,999). Specific custom services are priced on request. Select your target on our Contact form!" },
                      { keywords: ["team", "prathvi", "sampoorn", "mrityunjay", "prajawal", "member", "people"], answer: "Our elite squad includes Prathvi (Team Leader, Game Dev & AI/ML Enthusiast — Unreal Engine, Blender 3D, Python AI/ML), Sampoorn (Digital Marketing & Social Media Specialist), Mrityunjay (Full-Stack Web Developer), and Prajawal (Video Editor, Social Media Manager & Content Creator). You can view their full project history directly in our Portfolio section!" },
                      { keywords: ["where", "location", "sagar", "makroniya", "address"], answer: "We are physically based in Makroniya, Sagar, Madhya Pradesh (470004). This enables us to visit sites for civil CAD mapping and shoot physical promotional footage." },
                      { keywords: ["web", "site", "app", "react", "code", "backend", "node", "game", "3d", "blender", "unreal", "ai", "ml", "python", "prathvi"], answer: "Prathvi Singh Thakur is our Team Leader, Game Dev & AI/ML Enthusiast. He specializes in Unreal Engine 5, Blender 3D animation, Python AI/ML (Scikit-learn, Pandas), and React web development. Won 1st place at a hackathon with a Smart City Traffic AI prototype. Mrityunjay Shukla is our Full-Stack Web Developer building MERN stack applications and REST APIs." },
                      { keywords: ["video", "ad", "reel", "shoot", "edit"], answer: "Prajawal Rathore is our lead Video Editor & Content Creator with 2+ years of freelance experience. He has edited 150+ videos for Instagram Reels, YouTube Shorts, and TikTok — consistently hitting 300K+ combined views across client accounts. Proficient in Premiere Pro, After Effects, CapCut, and DaVinci Resolve." },
                      { keywords: ["social", "media", "marketing", "content", "instagram", "youtube", "post", "reel", "canva", "creator", "sampoorn", "prajawal"], answer: "Sampoorn Choubey is our Digital Marketing & Social Media Specialist with 2+ years of experience managing YouTube & Instagram channels (45,000+ combined following, 3x engagement growth). Prajawal Rathore is our Video Editor, Social Media Manager & Content Creator — edited 150+ videos with 300K+ combined views for clients in India and the U.S. Together they handle content strategy, video production, SEO optimization, Meta Ads, and cross-platform campaign execution." },
                      { keywords: ["dsa", "javascript", "script", "backend", "express", "game", "tictactoe", "database", "mysql", "mongodb", "mrityunjay", "code", "dev"], answer: "Mrityunjay Shukla is our Full-Stack Web Developer specializing in the MERN stack. He builds production-style RESTful APIs with JWT authentication, interactive browser games with AI opponents, and has solved 80+ DSA problems on LeetCode and GeeksforGeeks." },
                      { keywords: ["prajawal", "editor", "capcut", "after effects", "effects", "storytelling", "video editing", "photography", "premiere", "davinci"], answer: "Prajawal Rathore is our Video Editor, Social Media Manager & Content Creator. He has 2+ years of freelance experience, edited 150+ videos with 300K+ combined views, and specializes in Adobe Premiere Pro, After Effects, CapCut, DaVinci Resolve, motion graphics, DSLR photography, and cinematic color grading. His top reel reached 420,000 organic views." }
                    ];

                    for (const item of offlineChatBotResponses) {
                      if (item.keywords.some(keyword => queryText.includes(keyword))) {
                        reply = item.answer;
                        break;
                      }
                    }

                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                      candidates: [{
                        content: {
                          parts: [{
                            text: reply
                          }]
                        }
                      }]
                    }));
                    return;
                  }

                  // If API key is available, call the actual Gemini API
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
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      contents: [{ parts: [{ text: userMessage }] }],
                      systemInstruction: { parts: [{ text: systemPrompt }] }
                    })
                  });

                  if (fetchRes.ok) {
                    const result = await fetchRes.json();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(result));
                  } else {
                    const text = await fetchRes.text();
                    res.writeHead(fetchRes.status, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: `Gemini API error: ${text}` }));
                  }
                } catch (err) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: err.message }));
                }
              });
            }
            // 2. Local mock/proxy handler for /api/submit
            else if (req.url === '/api/submit' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body);
                  const scriptUrl = env.GOOGLE_SCRIPT_URL || process.env.GOOGLE_SCRIPT_URL;

                  // Log locally to a JSON file in the project scratch space for record/debugging
                  const leadsDir = path.resolve(process.cwd(), 'scratch');
                  if (!fs.existsSync(leadsDir)) {
                    fs.mkdirSync(leadsDir, { recursive: true });
                  }
                  const leadsFile = path.resolve(leadsDir, 'leads.json');
                  let leads = [];
                  if (fs.existsSync(leadsFile)) {
                    try {
                      leads = JSON.parse(fs.readFileSync(leadsFile, 'utf-8'));
                    } catch (e) {
                      leads = [];
                    }
                  }
                  leads.push({ ...data, submittedAt: new Date().toISOString() });
                  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), 'utf-8');

                  if (scriptUrl) {
                    const fetchRes = await fetch(scriptUrl, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data)
                    });
                    const resultText = await fetchRes.text();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: "Submitted locally and forwarded to Apps Script", details: resultText }));
                  } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: "Submitted locally (development mock)", details: data }));
                  }
                } catch (err) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: err.message }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ]
  }
})
