export async function handler(event, context) {
  // Handle preflight OPTIONS request for CORS
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: JSON.stringify({ message: "Successful preflight" })
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  try {
    const { message } = JSON.parse(event.body);
    if (!message) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ error: "Message is required" })
      };
    }

    // Retrieve the API Key from Netlify environment variables
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ error: "GEMINI_API_KEY is not configured on Netlify environment variables." })
      };
    }

    const systemPrompt = `You are SyncBot, the official AI representative of Sagar Sync.
Reference information:
- Name: Sagar Sync (Lean, transparent digital & design agency in Sagar, MP).
- Team: 4 core members. Developers: Aman Patel & Rohan Mishra. CAD Civil Architect: Priya Sharma. Video Editor: Sameer Khan.
- Location: Makroniya, Sagar, Madhya Pradesh (India).
- Pricing policy: Custom services are priced dynamically on requirement. Package Bundles: 
  1. "Coaching Institute Scale-Up Bundle" (₹19,999) - static portals, GMB setup, social ads, server configuration.
  2. "Real Estate / Contractor Elevation Pack" (₹16,499) - 3D front elevations, walkthrough, landing capture.
  3. "Local Business Kickstart Pack" (₹11,999) - static lander, showroom reels, map optimized keywords.
- Contacts: Prathvi Singh Thakur (+19 8962685091), Krishna Pathak (+91 8827050460).
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
    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ error: error.message || "Internal Server Error" })
    };
  }
}
