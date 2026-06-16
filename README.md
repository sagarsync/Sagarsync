# 🌿 Sagar Sync - Local Digital & CAD Agency

A high-performance, premium, and aesthetically stunning landing page for **Sagar Sync**, a lean and transparent digital design and construction agency located in Makroniya, Sagar, Madhya Pradesh (India).

Built using **Vite + React + Tailwind CSS v4**, this application integrates a Google Sheets-powered CRM, dynamic AI Chatbot using the Gemini API, and immersive animations with Anime.js.

---

## ✨ Features

- **🎯 Service Catalog Tabs**: A clean, sidebar-tab dashboard layout presenting 10 service categories (ranging from CAD drawings and video editing to custom app development).
- **🤖 SyncBot (AI Assistant)**: A fully responsive chatbot powered by Gemini API, trained to assist visitors with information about Sagar Sync's services, team, and pricing. Works directly on the client-side or falls back securely to a Netlify serverless function.
- **📋 Google Sheets CRM Integration**: A secure project inquiry form that logs leads straight into a Google Sheet database in real time and triggers automated email notifications to both the agency and the prospect.
- **🎨 Premium Visual Experience**: Configured around the **Jade Pebble Morning** aesthetic system (featuring HSL-curated greens, sage tones, and soft pebbles) with fluid hover interactions and responsive layout adjustments.
- **📐 Interactive 3D Orbiting Hero**: Shows the core technologies revolving around the Sagar Sync logo in an interactive orbit animation.

---

## 🚀 Deployment Guide

Follow these steps to push the project to GitHub, host it on Netlify, and configure all the required APIs and integrations.

### Step 1: Push Project to GitHub

1. Create a new, blank repository on your GitHub account.
2. Open your terminal in the project's root directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sagar Sync digital agency platform"
   ```
3. Link the repository and push:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 2: Host on Netlify

1. Log in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** > **Import an existing project**.
3. Choose **GitHub** as the provider and authorize Netlify.
4. Select your newly created repository (`your-repo-name`).
5. Netlify will automatically detect the settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy [site-name]**. Netlify will build and host your site.

---

### Step 3: Set up Google Sheets & Apps Script CRM

To securely save user submissions and send notification emails, configure a Google Apps Script Web App.

1. Create a new **Google Sheet** on Google Drive.
2. Name the columns in the first row (e.g., `A1: Timestamp`, `B1: Name`, `C1: Phone`, `D1: Email`, `E1: Service`, `F1: Brief`).
3. Click on **Extensions** in the top menu and select **Apps Script**.
4. Paste the following Google Apps Script code inside the script editor (replace the default code):

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var name = data.name;
    var phone = data.phone;
    var email = data.email;
    var service = data.service;
    var brief = data.brief;
    
    // Get the active sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the lead to the spreadsheet
    sheet.appendRow([new Date(), name, phone, email, service, brief]);
    
    // 1. Send Email Notification to Sagar Sync Agency
    var businessEmail = "sagarsync.query@gmail.com";
    var subject = "New Sagar Sync Lead: " + name + " (" + service + ")";
    var body = "Namaste Sagar Sync Team,\n\n" +
               "A new inquiry has been logged:\n\n" +
               "👤 Name: " + name + "\n" +
               "📞 Phone: " + phone + "\n" +
               "✉️ Email: " + email + "\n" +
               "💼 Selected Pack: " + service + "\n" +
               "📝 Brief Specifications:\n" + brief + "\n\n" +
               "Manage your responses promptly. Sagar Sync Integration.";
               
    MailApp.sendEmail(businessEmail, subject, body);
    
    // 2. Send automated acknowledgment email to the Client
    var clientSubject = "We have received your project details - Sagar Sync";
    var clientBody = "Dear " + name + ",\n\n" +
                      "Thank you for contacting Sagar Sync! We have successfully logged your project interest for '" + service + "'.\n\n" +
                      "Our full-stack partner or mobile design coordinator will review your requirements and call you at " + phone + " within 4 hours.\n\n" +
                      "Best regards,\n" +
                      "Sagar Sync Team\n" +
                      "📍 Makroniya, Sagar, MP\n" +
                      "📞 +91 8962685091 / +91 8827050460";
                      
    MailApp.sendEmail(email, clientSubject, clientBody);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Click **Save** (disk icon).
6. Click **Deploy** > **New deployment**.
7. Configure the deployment details:
   - **Select type**: Web app
   - **Description**: Sagar Sync CRM Web App
   - **Execute as**: Me (your Google account)
   - **Who has access**: Anyone
8. Click **Deploy**.
9. Google will request you to **Authorize Access**. Complete the authentication prompt (click *Advanced* > *Go to Sagar Sync CRM (unsafe)* to authorize).
10. Copy the generated **Web App URL** (ends with `/exec`). This is your `GOOGLE_SCRIPT_URL`.

---

### Step 4: Configure Netlify Environment Variables

To allow the serverless Netlify functions to route requests to the Google Sheet and Gemini AI safely without exposing keys in client code:

1. In the Netlify dashboard, go to your site settings: **Site Configuration** > **Environment variables**.
2. Click **Add a variable** and add the following keys:
   - **`GEMINI_API_KEY`**: Your Gemini API key from Google AI Studio. (Used by the chatbot function)
   - **`GOOGLE_SCRIPT_URL`**: The Apps Script Web App URL you copied in Step 3. (Used to submit the contact form)
3. Netlify will automatically restart the build or start routing requests through these environment variables.

---

## 🛠️ Local Development

If you want to run the project locally on your machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate into the folder:
   ```bash
   cd "Sagar Sync"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file in the root folder to test the chatbot on client-side directly:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
5. Run the dev server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:5173/`.

---

## 🎨 Tech Stack & Styling Tokens

- **Framework**: Vite + React
- **Styling**: Tailwind CSS v4 (configured inside `src/index.css`)
  - **Forest Green** (`#404E3B`) - Primary Brand Tone
  - **Sage Green** (`#7B9669`) - Secondary Accent Tone
  - **Slate Teal** (`#6C8480`) - Muted Texts
  - **Mint Grey** (`#BAC8B1`) - Border and Subtext details
  - **Pebble / PebbleLight** (`#E6E6E6` / `#F3F3F3`) - Clean backgrounds
- **Animations**: Anime.js + CSS Keyframes
- **Icons**: Font Awesome (CDN integrated in `index.html`)
