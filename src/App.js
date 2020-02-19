import React, { useEffect } from "react";
import "./App.css";
import apod from './nasa_data/apod';

function App() {
  useEffect(() => {
    apod.getData()
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
    </div>
  );
}

export default App;
