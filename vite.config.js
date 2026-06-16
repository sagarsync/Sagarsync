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
                    let reply = "Thanks for connecting with Sagar Sync! I am currently running on local backup mode. For immediate queries, feel free to submit a brief on our Contact Page or call Prathvi Singh Thakur directly at +91 8962685091.";
                    
                    const offlineChatBotResponses = [
                      { keywords: ["bundle", "price", "pack", "charge"], answer: "We offer 3 specialized bundles: Coaching Institute Pack (₹19,999), Builder Elevation Bundle (₹16,499), and Local Business Kickstart (₹11,999). Specific custom services are priced on request. Select your target on our Contact form!" },
                      { keywords: ["team", "prathvi", "rohan", "priya", "sameer", "member", "people"], answer: "Our 4-person elite squad includes Prathvi (Team Leader), Rohan (Developer), Priya (Civil CAD Engineer), and Sameer (Creative Video Editor). You can view their full project history directly in our Portfolio section!" },
                      { keywords: ["where", "location", "sagar", "makroniya", "address"], answer: "We are physically based in Makroniya, Sagar, Madhya Pradesh (470004). This enables us to visit sites for civil CAD mapping and shoot physical promotional footage." },
                      { keywords: ["web", "site", "app", "flutter", "react", "code"], answer: "Prathvi Singh Thakur and Rohan Mishra code custom, high-speed static websites, dynamic student portals, and fluid Flutter cross-platform mobile apps. Head to our Services page to book them!" },
                      { keywords: ["house", "map", "elevation", "civil", "cad"], answer: "Priya Sharma is our CAD expert. She drafts professional 2D blueprints, structural elevations, and modern 3D front elevations. View her works under our Portfolio tab." },
                      { keywords: ["video", "ad", "reel", "shoot", "edit"], answer: "Sameer Khan scripts and edits retention-driven short-form reels and commercial ads. We capture high-quality footage right here in Sagar to drive client growth." }
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
Reference information:
- Name: Sagar Sync (Lean, transparent digital & design agency in Sagar, MP).
- Team: 4 core members. Team Leader: Prathvi Singh Thakur. Mobile Developer: Rohan Mishra. CAD Civil Architect: Priya Sharma. Video Editor: Sameer Khan.
- Location: Makroniya, Sagar, Madhya Pradesh (India).
- Pricing policy: Custom services are priced dynamically on requirement. Package Bundles: 
  1. "Coaching Institute Scale-Up Bundle" (₹19,999)
  2. "Real Estate / Contractor Elevation Pack" (₹16,499)
  3. "Local Business Kickstart Pack" (₹11,999)
- Contacts: Prathvi Singh Thakur (+91 8962685091), Krishna Pathak (+91 8827050460).`;

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
