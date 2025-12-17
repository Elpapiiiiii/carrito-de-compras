import Item from "./Item.jsx";

const ItemList = ({ items }) => {
  return (
    <div className="row g-3">
      {items.map((prod) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={prod.id}>
          <Item item={prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
