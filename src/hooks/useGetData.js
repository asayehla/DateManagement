// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export function useGetData() {
  const [hasError, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/events")
      .then((results) => results.json())
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, []);

  if (hasError !== false) {
    console.log(hasError);
  }
  return data;
}
