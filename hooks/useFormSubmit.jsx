import { useState } from 'react'

export default function useFormSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmited, setHasSubmited] = useState(false);
  const [error, setError] = useState();

  const submit = async (url, data) => {
    try {
      setIsLoading(true);
      const { ok, status, statusText } = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      });
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