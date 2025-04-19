import React, { useEffect } from "react";
const Api = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return <div>Hello from api</div>;
};
export default Api;
