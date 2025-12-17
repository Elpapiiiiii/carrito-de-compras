import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { id, title, price, image, stock, category } = item;

  const safePrice =
    typeof price === "number" ? price : Number(price) || 0;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>

        <p className="text-muted mb-1">Categoría: {category}</p>

        <p className="fw-bold mb-2">
          ${safePrice.toLocaleString("es-AR")}
        </p>

        <p className={stock > 0 ? "text-success" : "text-danger"}>
          {stock > 0 ? `Stock: ${stock}` : "Sin stock"}
        </p>

        <Link to={`/item/${id}`} className="btn btn-primary mt-auto">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
