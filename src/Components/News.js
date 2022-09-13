const News = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "20rem", margin: "20px" }}>
        <img src={props.link==null?"https://media.istockphoto.com/photos/breaking-news-on-screen-picture-id1253038960?k=20&m=1253038960&s=612x612&w=0&h=_04oZHKrBVDp-1awbBDAbZCX9iQFuT_ONHWtfoUe47Y=":props.link} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title.slice(0,77)+"..."}</h5>
          <p className="card-text">{props.desc!=null?props.desc.slice(0,77)+"...":null}</p>
          <small className="text-muted">Last updated 3 mins ago</small>
          <br />
          <br />
          <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">
            Visit
          </a>
        </div>
        <div className="card-footer">
          <small className="text-muted">{"Time: "+props.date.slice(11,16)}<br/>{"Date: "+props.date.slice(0,10)}</small>
        </div>
      </div>
    </div>
  );
};

export default News;
