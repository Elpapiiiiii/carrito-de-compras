import Item from "./Item.jsx";

const ItemList = ({ items }) => {
  return (
    <div className="row g-4">
      {items.map((product) => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
