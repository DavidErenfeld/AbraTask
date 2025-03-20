import { useState } from "react";
import "./Form.css";
import { addPlaceToServer } from "../../services/api";
import { usePlaceStore } from "../../store/PlaseStor";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Restaurant");
  const [erorrMessage, setErorrMessage] = useState<string | null>(null);
  const { addPlace } = usePlaceStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !address.trim() || name.length > 25) {
      setErorrMessage(
        "Fill in all fields and make sure the place name is no longer than 25 characters."
      );
      return;
    }
    try {
      const res = await addPlaceToServer({
        name: name,
        address: address,
        type: type,
        id: address,
      });
      res && addPlace(res);
    } catch (err: any) {
      setErorrMessage("Server erorr");
    } finally {
      setName("");
      setAddress("");
      setType("Restaurant");
      setErorrMessage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Place Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Place Address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Restaurant">Restaurant</option>
        <option value="Hotel">Hotel</option>
        <option value="Park">Park</option>
      </select>

      <button type="submit">Add Place</button>
      {erorrMessage && <p className="error-message ">{erorrMessage}</p>}
    </form>
  );
};
export default Form;
