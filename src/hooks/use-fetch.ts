import { useState } from 'react';

import { UseFetchOptions, UseFetchReturn } from './types';

export const useFetch = <Data, Response>({
  method,
  onError,
  onSuccess,
  url,
}: UseFetchOptions<Response>): UseFetchReturn<Data, Response> => {
  const [error, setError] = useState('');
  const [response, setResponse] = useState<Response | undefined>();
  const [loading, setLoading] = useState(false);
  const handle = async (data: Data) => {
    setLoading(true);
    const response = await fetch(`${window.location.origin}${url}`, {
      body: JSON.stringify(data),
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    setLoading(false);
    if (response.ok) {
      const data = await response.json();
      if (onSuccess) onSuccess(data);
      return setResponse(data);
    }
    if (onError) onError(response.statusText);
    return setError(response.statusText);
  };
  return [{ error, loading, response }, handle];
};
