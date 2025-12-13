// API Service for Niyantran Landing Page
// This file handles API calls to the backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Submit lead form data to backend
 * This will:
 * 1. Save lead to database
 * 2. Trigger WhatsApp notification to parent
 * 3. Send notification to admin/mentor
 */
export const submitLead = async (leadData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parentName: leadData.parentName,
        childClass: leadData.childClass,
        whatsappNumber: leadData.whatsappNumber,
        source: 'landing_page',
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit lead');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting lead:', error);
    throw error;
  }
};

/**
 * Track page analytics events
 * Useful for understanding user behavior
 */
export const trackEvent = async (eventName, eventData) => {
  try {
    await fetch(`${API_BASE_URL}/analytics/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: eventName,
        data: eventData,
        timestamp: new Date().toISOString()
      })
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};
