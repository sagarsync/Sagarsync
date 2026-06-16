/**
 * Google Apps Script for Sagar Sync CRM (Google Sheets Integration)
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Click Extensions -> Apps Script.
 * 3. Replace all default code with the contents of this file.
 * 4. Save (Ctrl+S) and click "Deploy" -> "New deployment".
 * 5. Under "Select type", choose "Web app".
 * 6. Set "Execute as" to "Me" and "Who has access" to "Anyone".
 * 7. Copy the generated Web App URL and set it as `GOOGLE_SCRIPT_URL` on Netlify.
 */

function doPost(e) {
  try {
    // Parse incoming request data
    var data = JSON.parse(e.postData.contents);
    var name = data.name;
    var phone = data.phone;
    var email = data.email;
    var service = data.service;
    var brief = data.brief;
    
    // 1. Log to Active Google Spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(), // Timestamp
      name,
      "'" + phone, // Prefix with a single quote to force text formatting and prevent #ERROR! formulas
      email,
      service,
      brief
    ]);
    
    // 2. Generate Beautiful HTML Email
    var emailHtml = getHtmlEmailTemplate(name, phone, email, service, brief);
    
    // 3. Send Email to client
    MailApp.sendEmail({
      to: email,
      subject: "We've received your request! - Sagar Sync",
      htmlBody: emailHtml
    });
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Custom HTML Template conforming to Sagar Sync styling guidelines
function getHtmlEmailTemplate(name, phone, email, service, brief) {
  return '<!DOCTYPE html>' +
  '<html>' +
  '<head>' +
  '  <style>' +
  '    body { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; background-color: #F4F6F3; margin: 0; padding: 0; }' +
  '    .wrapper { width: 100%; background-color: #F4F6F3; padding: 40px 0; }' +
  '    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(30, 61, 48, 0.05); border: 1px solid #e2e8e0; }' +
  '    .header { background-color: #1e3d30; padding: 30px; text-align: left; }' +
  '    .content { padding: 40px 30px; color: #2D3A34; }' +
  '    .content h2 { font-size: 18px; font-weight: 700; color: #1e3d30; margin-top: 0; margin-bottom: 15px; }' +
  '    .content p { font-size: 14px; line-height: 1.6; color: #4A5D53; margin-bottom: 25px; }' +
  '    .details-box { background-color: #F8FAF7; border: 1px solid #e9eee7; border-radius: 12px; padding: 20px; margin-bottom: 25px; }' +
  '    .detail-row { margin-bottom: 12px; font-size: 13px; }' +
  '    .detail-row:last-child { margin-bottom: 0; }' +
  '    .detail-label { font-weight: 700; color: #1e3d30; text-transform: uppercase; font-size: 10px; letter-spacing: 0.8px; display: block; margin-bottom: 2px; }' +
  '    .detail-value { color: #2D3A34; }' +
  '    .footer { background-color: #1a2f26; padding: 20px 30px; text-align: center; font-size: 11px; color: #A3B899; border-top: 1px solid #13241d; }' +
  '    .footer a { color: #ffffff; text-decoration: none; font-weight: 600; }' +
  '  </style>' +
  '</head>' +
  '<body>' +
  '  <div class="wrapper">' +
  '    <div class="container">' +
  '      <div class="header">' +
  '        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; line-height: 1.2;">SAGAR SYNC</h1>' +
  '        <p style="color: #A3B899; margin: 3px 0 0 0; font-size: 10px; text-transform: uppercase; font-weight: 600; letter-spacing: 1.5px; line-height: 1.2;">Local Digital & CAD Force</p>' +
  '      </div>' +
  '      <div class="content">' +
  '        <h2>Consultation Request Logged</h2>' +
  '        <p>Namaste, thank you for reaching out to Sagar Sync. We have securely logged your project request. Here are the details you provided:</p>' +
  '        <div class="details-box">' +
  '          <div class="detail-row">' +
  '            <span class="detail-label">Client Name</span>' +
  '            <span class="detail-value">' + sanitizeHtml(name) + '</span>' +
  '          </div>' +
  '          <div class="detail-row">' +
  '            <span class="detail-label">Contact Number</span>' +
  '            <span class="detail-value">' + sanitizeHtml(phone) + '</span>' +
  '          </div>' +
  '          <div class="detail-row">' +
  '            <span class="detail-label">Email Address</span>' +
  '            <span class="detail-value">' + sanitizeHtml(email) + '</span>' +
  '          </div>' +
  '          <div class="detail-row">' +
  '            <span class="detail-label">Target Service / Bundle</span>' +
  '            <span class="detail-value">' + sanitizeHtml(service) + '</span>' +
  '          </div>' +
  '          <div class="detail-row">' +
  '            <span class="detail-label">Project Specifications</span>' +
  '            <span class="detail-value">' + sanitizeHtml(brief).replace(/\n/g, "<br/>") + '</span>' +
  '          </div>' +
  '        </div>' +
  '        <p>Our team will review your specifications, blueprints, or media assets, and contact you at <strong>' + sanitizeHtml(phone) + '</strong> within 4 hours to coordinate.</p>' +
  '      </div>' +
  '      <div class="footer">' +
  '        &copy; 2026 Sagar Sync. Makroniya, Sagar, MP (470004)<br/>' +
  '        Direct Support: <a href="tel:+918962685091">+91 8962685091</a> (Prathvi) | <a href="tel:+918827050460">+91 8827050460</a> (Krishna)' +
  '      </div>' +
  '    </div>' +
  '  </div>' +
  '</body>' +
  '</html>';
}

function sanitizeHtml(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
