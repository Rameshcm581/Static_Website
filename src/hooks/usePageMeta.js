// src/hooks/usePageMeta.js — per-route <title> and description/OG meta
import { useEffect } from 'react';

const setMeta = (selector, attr, content) => {
  const el = document.head.querySelector(selector);
  if (el) {
    el.setAttribute(attr, content);
  }
};

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMeta('meta[property="og:title"]', 'content', title);
    }
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
  }, [title, description]);
}
