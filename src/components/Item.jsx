import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, title, price, image, description } = product;

  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <p className="fw-bold mb-3">$ {price}</p>

        <Link to={`/item/${id}`} className="btn btn-primary mt-auto">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
