import "../../css/Movies.css";

export const Movies = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Image" className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.year}</p>
      </div>
    </div>
  );
};
