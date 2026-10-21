import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, deps = []) => {
  const [data, setData] = useState(null);       
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios.get(url, { signal: controller.signal })
      .then(res => setData(res.data))
      .catch(err => { if (!axios.isCancel(err)) setError(err.message); })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, deps);

  return { data, loading, error };
};

export default useAxios;