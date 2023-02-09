import SatelliteState from "./context/satellite/SatelliteState";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <SatelliteState>
    <div className="App">
      <Home />
    </div>
    </SatelliteState>
    </>
  );
}

export default App;
