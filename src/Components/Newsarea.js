import News from "./News";
import React, { useState, useEffect } from "react";

const Newsarea = (props) => {
  const [art, setart] = useState([]);
  const fun = async () => {
    let link =
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0341993bb45d4520aea17b75505f757e`;
    let data = await fetch(link);
    let dat = await data.json();
    setart(dat.articles);
  };
  useEffect(() => {
    fun();
  });
  return (
    <>
      <h1 style={{ marginTop: "20px" }} className="text-center">
        Headlines
      </h1>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {art.map((ele) => {
            return (
              <News
                key={ele.url}
                link={ele.urlToImage}
                title={ele.title}
                desc={ele.description}
                url={ele.url}
                date={ele.publishedAt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Newsarea;
