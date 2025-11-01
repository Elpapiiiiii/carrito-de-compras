function ItemListContainer({ greeting }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "3rem",
        color: "#0d47a1",
        fontSize: "1.8rem",
        fontWeight: "600",
      }}
    >
      <h2>{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;