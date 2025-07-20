import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [option, setOption] = useState(null);

  const postData = (data) => {
    setOption({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    const fetchData = async (option) => {
      setIsLoading(true);

      try {
        const res = await fetch(url, { ...option });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setIsLoading(false);
        setData(data);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
        console.log(err.message);
      }
    };

    if (method === "GET") {
      fetchData(url);
    }
    if (method === "POST" && option) {
      fetchData(option);
    }
  }, [url, option, method]);

  return {
    data,
    isLoading,
    error,
    postData,
  };
};

export default useFetch;
