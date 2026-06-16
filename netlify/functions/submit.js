/* global process */

export default async function handler(request, context) {
  // CORS headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  // CORS preflight handling
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
    const data = await request.json();
    const { name, phone, email, service, brief } = data;

    if (!name || !phone || !email || !service || !brief) {
      return new Response(JSON.stringify({ error: "All form fields are required." }), {
        status: 400,
        headers: corsHeaders
      });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return new Response(
        JSON.stringify({ 
          error: "GOOGLE_SCRIPT_URL is not configured in Netlify environment variables." 
        }),
        {
          status: 500,
          headers: corsHeaders
        }
      );
    }

    // Forward form data to Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, phone, email, service, brief })
    });

    const result = await response.text();

    return new Response(
      JSON.stringify({ message: "Lead submitted successfully", details: result }),
      {
        status: response.status,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Failed to process submission" }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export const config = {
  path: "/api/submit"
};
