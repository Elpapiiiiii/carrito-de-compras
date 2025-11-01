import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a el Papi shop!" />
    </>
  );
}

export default App;