function ListGroup() {
  const items = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad"];

  return (
    <>
      <h1>List of cities</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
