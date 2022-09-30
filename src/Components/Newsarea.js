import News from "./News";
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const Newsarea = (props) => {
  const [page, setpage] = useState(1);
  const [art, setart] = useState([]);
  const [load, setload] = useState("loading");
  const fun = async () => {
    let link = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&apiKey=0341993bb45d4520aea17b75505f757e`;
    let data = await fetch(link);
    let dat = await data.json();
    setart(dat.articles);
    setload("done");
    if(page>3) document.getElementById('inc').classList.add('disabled')
    else document.getElementById('inc').classList.remove('disabled')
    if(page<=1) document.getElementById('dec').classList.add('disabled')
    else document.getElementById('dec').classList.remove('disabled')
  };
  const increase = () => {
    fun();
    setpage(page + 1);
  };
  const decrease = () => {
    if (page > 1) setpage(page - 1);
    fun();
  };
  useEffect(() => {
    fun();
    console.log("runn");
  }, []);
  return (
    <>
      <Spinner load={load} />
      <h1 style={{ marginTop: "20px" }} className="text-center">
        {props.category.toUpperCase()==""?"GENERAL HEADLINES":props.category.toUpperCase()+" HEADLINES"}
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "40px 0",
          }}
        >
          <button type="button" id="dec" className="btn btn-primary" onClick={decrease}>
            Previous
          </button>
          <button type="button" id="inc" className="btn btn-primary" onClick={increase}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Newsarea;
