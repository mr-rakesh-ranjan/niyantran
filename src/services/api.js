// API Service for Niyantran Landing Page
// This file handles API calls to Firebase Firestore

import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Submit lead form data to Firebase Firestore
 * This will:
 * 1. Save lead to Firestore 'leads' collection
 * 2. Store all consultation booking details
 */
export const submitLead = async (leadData) => {
  try {
    // Add document to 'leads' collection in Firestore
    const docRef = await addDoc(collection(db, 'leads'), {
      parentName: leadData.parentName,
      childClass: leadData.childClass,
      whatsappNumber: leadData.whatsappNumber,
      source: 'landing_page',
      status: 'new', // Track lead status: new, contacted, converted, etc.
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    console.log('Lead submitted successfully with ID:', docRef.id);
    
    return { 
      success: true, 
      id: docRef.id,
      message: 'Consultation booked successfully!' 
    };
  } catch (error) {
    console.error('Error submitting lead to Firebase:', error);
    throw error;
  }
};

/**
 * Track page analytics events to Firebase
 * Useful for understanding user behavior
 */
export const trackEvent = async (eventName, eventData) => {
  try {
    await addDoc(collection(db, 'analytics'), {
      event: eventName,
      data: eventData,
      timestamp: serverTimestamp()
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};
