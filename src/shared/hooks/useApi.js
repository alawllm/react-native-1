import { useEffect, useState } from "react";

export const fetcher = ({ url }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch(url);
        const json = await data.json();
        setData(json);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    isError,
    isLoading,
    data,
  };
};
