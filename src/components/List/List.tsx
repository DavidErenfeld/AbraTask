import { Place } from "../../types";
import Card from "../Card/Card";
import "./List.css";

interface PetListProps {
  places: Place[];
}

const List = ({ places }: PetListProps) => {
  return (
    <div className="list">
      {places.map((place) => (
        <Card
          key={place.id}
          name={place.name}
          address={place.address}
          type={place.type}
        />
      ))}
    </div>
  );
};

export default List;
