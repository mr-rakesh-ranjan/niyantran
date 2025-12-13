/**
 * SAMPLE BACKEND API IMPLEMENTATION
 * This is a reference implementation for the backend developer
 * You can use Express.js, FastAPI, Django, or any framework
 */

// Example using Express.js + Node.js

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'niyantran_db'
};

// Twilio/WhatsApp configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);
const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER; // Format: whatsapp:+14155238886

/**
 * POST /api/leads
 * Save lead and trigger WhatsApp notification
 */
app.post('/api/leads', async (req, res) => {
  try {
    const { parentName, childClass, whatsappNumber, source, timestamp } = req.body;

    // Validate input
    if (!parentName || !childClass || !whatsappNumber) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Save to database
    const connection = await mysql.createConnection(dbConfig);
    
    const [result] = await connection.execute(
      'INSERT INTO leads (parent_name, child_class, whatsapp_number, source, status) VALUES (?, ?, ?, ?, ?)',
      [parentName, childClass, whatsappNumber, source || 'landing_page', 'new']
    );

    const leadId = `LEAD${result.insertId}`;

    // Send WhatsApp message to parent
    const whatsappMessage = `Hello ${parentName}! 👋

Welcome to Niyantran - The 4 AM Club! 🌅

Thank you for your interest in transforming your child's learning journey. We have received your inquiry for Class ${childClass}.

Our Head Mentor will call you within 24 hours to discuss:
✅ Free 7-day observation period
✅ Custom study plan
✅ How the 4 AM Club works

Limited slots available!

- Team Niyantran`;

    try {
      await twilioClient.messages.create({
        from: twilioWhatsAppNumber,
        to: `whatsapp:+91${whatsappNumber}`,
        body: whatsappMessage
      });
    } catch (whatsappError) {
      console.error('WhatsApp send error:', whatsappError);
      // Continue even if WhatsApp fails - lead is saved
    }

    // Send notification to admin/mentor (optional)
    await sendAdminNotification(parentName, childClass, whatsappNumber);

    await connection.end();

    res.json({
      success: true,
      leadId: leadId,
      message: 'Lead saved successfully'
    });

  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * POST /api/analytics/track
 * Track user analytics events
 */
app.post('/api/analytics/track', async (req, res) => {
  try {
    const { event, data, timestamp } = req.body;

    // Save to analytics table or send to analytics service
    const connection = await mysql.createConnection(dbConfig);
    
    await connection.execute(
      'INSERT INTO analytics_events (event_name, event_data, timestamp) VALUES (?, ?, ?)',
      [event, JSON.stringify(data), timestamp]
    );

    await connection.end();

    res.json({ success: true });
  } catch (error) {
    console.error('Error tracking event:', error);
    res.status(500).json({ success: false });
  }
});

/**
 * Helper function to send notification to admin
 */
async function sendAdminNotification(parentName, childClass, whatsappNumber) {
  const adminNumbers = ['+919876543210']; // Replace with actual admin numbers
  
  const adminMessage = `🔔 New Lead Alert!

Parent: ${parentName}
Class: ${childClass}
WhatsApp: ${whatsappNumber}

Action Required: Call within 24 hours
Lead Source: Landing Page

- Niyantran Admin System`;

  for (const adminNumber of adminNumbers) {
    try {
      await twilioClient.messages.create({
        from: twilioWhatsAppNumber,
        to: `whatsapp:${adminNumber}`,
        body: adminMessage
      });
    } catch (error) {
      console.error('Admin notification error:', error);
    }
  }
}

/**
 * GET /api/leads
 * Get all leads (for admin dashboard)
 */
app.get('/api/leads', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      'SELECT * FROM leads ORDER BY created_at DESC LIMIT 100'
    );
    await connection.end();

    res.json({
      success: true,
      leads: rows
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Niyantran API server running on port ${PORT}`);
});

/**
 * ALTERNATIVE: Using Meta WhatsApp Business API
 * Instead of Twilio, you can use Meta's WhatsApp Business API
 */

/*
const axios = require('axios');

async function sendWhatsAppViaMeta(phoneNumber, message) {
  const accessToken = process.env.META_ACCESS_TOKEN;
  const phoneNumberId = process.env.META_PHONE_NUMBER_ID;

  try {
    await axios.post(
      `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        to: `91${phoneNumber}`,
        type: 'text',
        text: { body: message }
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Meta WhatsApp error:', error);
  }
}
*/
