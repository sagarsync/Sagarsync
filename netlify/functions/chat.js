/* global process */

export default async function handler(request, context) {
  // CORS headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // Handle preflight OPTIONS request for CORS
  if (request.method === "OPTIONS") {
    return new Response(JSON.stringify({ message: "Successful preflight" }), {
      status: 200,
      headers: corsHeaders
    });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: corsHeaders
    });
  }

  try {
    const { message } = await request.json();
    if (!message) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: corsHeaders
      });
    }

    // Retrieve the API Key from Netlify environment variables
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "GEMINI_API_KEY is not configured on Netlify environment variables." }),
        {
          status: 500,
          headers: corsHeaders
        }
      );
    }

    const systemPrompt = `You are SyncBot, the official AI representative of Sagar Sync.
Reference information:
- Name: Sagar Sync (Lean, transparent digital & design agency in Sagar, MP).
- Team: 4 core members. Team Leader: Prathvi Singh Thakur. Mobile Developer: Rohan Mishra. CAD Civil Architect: Priya Sharma. Video Editor: Sameer Khan.
- Location: Makroniya, Sagar, Madhya Pradesh (India).
- Pricing policy: Custom services are priced dynamically on requirement. Package Bundles: 
  1. "Coaching Institute Scale-Up Bundle" (₹19,999) - static portals, GMB setup, social ads, server configuration.
  2. "Real Estate / Contractor Elevation Pack" (₹16,499) - 3D front elevations, walkthrough, landing capture.
  3. "Local Business Kickstart Pack" (₹11,999) - static lander, showroom reels, map optimized keywords.
- Contacts: Prathvi Singh Thakur (+91 8962685091), Krishna Pathak (+91 8827050460).
Be concise, extremely friendly on mobile viewports, clear, and direct.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      })
    });

    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export const config = {
  path: "/api/chat"
};
