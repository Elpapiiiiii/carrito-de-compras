import ItemCount from "./ItemCount.jsx";

const ItemDetail = ({ product }) => {
  const { title, description, price, image, stock, category } = product;

  return (
    <div className="card shadow-sm p-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            alt={title}
            className="img-fluid rounded-start h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-md-7 d-flex flex-column justify-content-center">
          <div className="card-body">
            <h2 className="card-title mb-3">{title}</h2>
            <p className="text-muted mb-1">Categoría: {category}</p>
            <p className="card-text">{description}</p>

            <p className="fs-3 fw-bold mt-3 mb-1">$ {price}</p>
            <p className="text-success mb-3">Stock disponible: {stock}</p>

            {/* Contador */}
            <ItemCount stock={stock} initial={1} />

            {/* Botón para agregar */}
            <button className="btn btn-primary mt-3 w-100">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
