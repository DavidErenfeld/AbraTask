import "./Card.css";

interface CardProps {
  name: string;
  address: string;
  type: string;
}

const Card = ({ name, address, type }: CardProps) => {
  const handleDelete = () => {};

  return (
    <div className="card">
      <div className="info">
        <h3>{name} </h3>
        <div className="meta">
          <span>name: {name}</span>
          <span>address: {address}</span>
          <span>Type: {type}</span>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Card;
