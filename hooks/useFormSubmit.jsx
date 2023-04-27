import { useState } from 'react'

export default function useFormSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmited, setHasSubmited] = useState(false);
  const [error, setError] = useState();

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const submit = async (url, data) => {
    try {
      setIsLoading(true);
      const { ok, status, statusText } = await fetch(url, {
        method: 'POST',
        body: new URLSearchParams(data).toString(),
      });
      await delay(2000);
      if (!ok) throw `${status}: ${statusText}`;
      setHasSubmited(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, hasSubmited, error };
}