const NewsItem = ({
  title,
  description,
  image,
  url
}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block p-2 my-3 mx-3" style={{maxWidth: "345px"}}>
      <img src={image} className="card-img-top" alt="..." style={{height: "200px"}} />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}...</h5>
        <p className="card-text">
          {description.slice(0, 100)}...
        </p>
        <a href={url} target="_blank" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
