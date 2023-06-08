import React, { useEffect, useState } from "react";
import Paginate from "./paginate";

function Fetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(url);
    const people = await response.json();
    setData(Paginate(people));
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data };
}

export default Fetch;
