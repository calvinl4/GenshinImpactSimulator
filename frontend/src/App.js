import WeaponCard from "./components/weaponCard/weaponCard";
import './App.scss';
import backGroundImage from './assets/background.png'
import intertwinedFateIcon from './assets/icons/intertwined_fate.png'
import React, { useState } from 'react';



function App() {

  const [moneySpent, setmoneySpent] = useState(0);
  const [averageCost5Star, setaverageCost5Star] = useState(0);
  const [longest5StarDrought, setlongest5StarDrought] = useState(0);
  const [longest4StarDrought, setlongest4StarDrought] = useState(0);


  let on1WishButtonClick = () => {
    setmoneySpent(moneySpent+1);
  }

  return (
    <div className="App" id="background">

      <img className="backgroundImage" src={backGroundImage}></img>

      <div>
        <div style={{ height: "30px" }}></div>
        <div style={{ display: "flex", position: "relative" }}><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard></div>

        <div style={{ height: "30px" }}></div>
        <div style={{ display: "flex", position: "relative" }}><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard></div>
      </div>

      <div className="resultsRectangle" >
        <h1>Results</h1>
        <div className="statisticsRectangle">
          <h3>Money Spent: ${moneySpent}</h3>
          <h3>Average Cost per 5 star: ${averageCost5Star}</h3>
          <h3>Longest 5 star drought: {longest5StarDrought}</h3>
          <h3>Longest 4 star drought: {longest4StarDrought}</h3>
        </div>
        <h2>Last ten 5 Stars Pulled:</h2>
      </div>

      <button className="wishButton1" onClick = {on1WishButtonClick}>
        <h2>Wish x1</h2>
        <img src={intertwinedFateIcon}></img>
        <h3>x1</h3>
      </button>

      <button className="wishButton10">
        <h2>Wish x10</h2>
        <img src={intertwinedFateIcon}></img>
        <h3>x10</h3>
      </button>
    </div>
  );
}

export default App;
