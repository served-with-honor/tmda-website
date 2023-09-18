import { useState } from 'react'

export default function useFormSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmited, setHasSubmited] = useState(false);
  const [error, setError] = useState();

  const submit = async (url, data) => {
    try {
      setIsLoading(true);

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const body = await response.json();
      
      if (!response.ok) {
        if (body.error) throw Error(body.error);
        throw Error(`${response.status}: ${response.statusText}`);
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