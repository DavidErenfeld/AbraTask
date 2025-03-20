import Form from "./components/Form/Form";
import List from "./components/List/List";
import Map from "./components/MapComponent/Map";
import { usePlaceStore } from "./store/PlaseStor";
import "./App.css";

function App() {
  const { places } = usePlaceStore();
  return (
    <>
      <Form />
      <List places={places} />

      <Map />
    </>
  );
}

export default App;
