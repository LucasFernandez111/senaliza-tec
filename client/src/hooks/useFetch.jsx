import { useEffect, useState } from "react";
import axios from "axios";

export const useGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url, { withCredentials: true });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, loading, error };
};

export const usePost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const postData = async (url, values) => {
    try {
      const { data, status } = await axios.post(url, values, {
        withCredentials: true,
      });
      return { data, status };
    } catch (err) {
      setError(err);
    }
  };

  return { postData, error };
};
