import { useEffect, useState } from "react";
import { getRssFeed } from "../Api/Api";

const Rss = () => {
  const [rss, setRss] = useState("");

  useEffect(() => {
    getRssFeed().then((res) => {
      setRss(res.data);
      console.log(res.data);
    });
  }, []);

  const parseXml = (xmlString) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, "application/xml");
    const items = xml.getElementsByTagName("item");
    const data = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const title = item.getElementsByTagName("title")[0].textContent;
      const link = item.getElementsByTagName("link")[0].textContent;
      const description =
        item.getElementsByTagName("description")[0].textContent;
      data.push({ title, link, description });
    }
    return data;
  };

  const renderData = (data) => {
    return data.map((item, index) => {
      return (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <a href={item.link}>Read more</a>
        </div>
      );
    });
  };

  return <div>{renderData(parseXml(rss))}</div>;
};

export default Rss;
