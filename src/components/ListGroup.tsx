import { MouseEvent } from "react";
function ListGroup() {
  const items = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad"];
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List of cities</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
