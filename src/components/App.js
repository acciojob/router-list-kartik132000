import { useParams } from "react-router-dom";

const items = [
  { id: 1, name: "Item One", description: "This is item one." },
  { id: 2, name: "Item Two", description: "This is item two." },
];

function ItemDetail() {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) return <h2>Item not found</h2>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
