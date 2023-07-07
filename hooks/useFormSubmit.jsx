import { useState } from 'react'

export default function useFormSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmited, setHasSubmited] = useState(false);
  const [error, setError] = useState();

  const submit = async (url, data) => {
    try {
      setIsLoading(true);
      const { ok, status, statusText, body } = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const responseError = await body.json();
      // #TODO - PICKUPHERE

      if (!ok) {
        if (responseError) throw new Error(responseError);
        throw new Error(`${status}: ${statusText}`);
      }
        
      setHasSubmited(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, hasSubmited, error };
}