// src/hooks/useContactForm.js — contact enquiry form state + submission
import { useCallback, useState } from 'react';
import { sendEnquiryApi } from '@api/apicall/contactApi';

export const CONTACT_FORM_INITIAL = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
};

export default function useContactForm() {
  const [values, setValues] = useState(CONTACT_FORM_INITIAL);
  const [status, setStatus] = useState('idle'); // idle | submitting | sent | error
  const [error, setError] = useState('');

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setStatus('submitting');
      setError('');
      try {
        await sendEnquiryApi(values);
        setStatus('sent');
      } catch (err) {
        setError(err.response?.data?.detail || 'Something went wrong. Please try again or email us directly.');
        setStatus('error');
      }
    },
    [values]
  );

  const reset = useCallback(() => {
    setValues(CONTACT_FORM_INITIAL);
    setStatus('idle');
    setError('');
  }, []);

  return {
    values,
    status,
    error,
    isSubmitting: status === 'submitting',
    isSent: status === 'sent',
    handleChange,
    handleSubmit,
    reset,
  };
}
