import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);

      const results = await res.json();
      setData(results);
    }

    getData();
  }, []);
  return [data];
};
