import logo from './logo.svg';
import WeaponCard from "./components/weaponCard/weaponCard";
import './App.scss';

function App() {
  return (
    <div className="App">
       <div style={{height: "30px"}}></div>
       <div style={{display: "flex"}}><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard></div>

      <div style={{height: "30px"}}></div>
      <div style={{display: "flex"}}><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard><WeaponCard weaponImage="4_lions_roar.png"></WeaponCard></div>
    </div>
  );
}

export default App;
