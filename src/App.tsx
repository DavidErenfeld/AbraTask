import Form from "./components/Form/Form";
import List from "./components/List/List";
import Map from "./components/MapComponent/Map";
import { usePlaceStore } from "./store/PlaseStor";

function App() {
  const { places } = usePlaceStore();
  return (
    <>
      <div className="section">
        <Form />
        <List places={places} />
      </div>
      <Map />
    </>
  );
}

export default App;
