// src/hooks/useNewsletterForm.js — footer newsletter subscribe state
import { useCallback, useState } from 'react';
import { subscribeNewsletterApi } from '@api/apicall/contactApi';

export default function useNewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | sent | error

  const handleChange = useCallback((event) => setEmail(event.target.value), []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (!email) {
        return;
      }
      setStatus('submitting');
      try {
        await subscribeNewsletterApi(email);
        setStatus('sent');
        setEmail('');
      } catch {
        setStatus('error');
      }
    },
    [email]
  );

  return {
    email,
    status,
    isSubmitting: status === 'submitting',
    isSent: status === 'sent',
    isError: status === 'error',
    handleChange,
    handleSubmit,
  };
}
