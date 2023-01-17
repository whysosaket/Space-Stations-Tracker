import React from "react";
import Leaflet from "../components/Leaflet";

const Home = () => {
  return (
    <div>
      <div className="body">
        <h1>Space Station Tracker</h1>
        <h2>Live Position</h2>
        <p>
          Toggle the switches to see the Satellites and their Paths. (Don't
          click both buttons immediately)
        </p>

        <div class="table">
        <article class="data">
          <h3 class="satellite">ISS</h3>
          <p class="backronym">(International Space Station)</p>
          <p id="ISS" class="cords">
            Longitude: 69&emsp;&emsp;&emsp;&emsp;Latitude: 69
          </p>
        </article>

        <article class="data">
          <h3 class="satellite">TSS</h3>
          <p class="backronym">(Tiangong Space Station)</p>
          <p id="TSS" class="cords">
            Longitude: 69&emsp;&emsp;&emsp;&emsp;Latitude: 69
          </p>
        </article>
      </div>



      </div>
      <Leaflet />
    </div>
  );
};

export default Home;
