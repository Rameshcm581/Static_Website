// src/Api/apicall/contactApi.js
import axiosInstance from './axiosInstance';

const USE_MOCK = import.meta.env.VITE_MOCK_API === 'true';

// Resolves locally so the site works before the backend endpoints exist.
const mockResponse = (data, delay = 700) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });

export const sendEnquiryApi = async (payload) => {
  if (USE_MOCK) {
    return mockResponse({ ok: true, payload });
  }
  const response = await axiosInstance.post('/contact/enquiry', payload);
  return response.data;
};

export const subscribeNewsletterApi = async (email) => {
  if (USE_MOCK) {
    return mockResponse({ ok: true, email });
  }
  const response = await axiosInstance.post('/newsletter/subscribe', { email });
  return response.data;
};
