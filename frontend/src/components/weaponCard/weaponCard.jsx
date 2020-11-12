import React from "react";
import "./weaponCard.scss"
import exampleImage from "../../assets/weapons/sword/4Star/4_lions_roar.png"

export const WeaponCard = (props) => {
  var imagePath = "../../assets/weapons/sword/4Star/" + `${props.weaponImage}`;
  // require(`${imagePath}`)
  return (
    <div>
      <div className={"cardContainer"}>
        <h1 className={"titleText"}>4 Star Weapon</h1>
        <img className={"weaponImage"} src={exampleImage} alt="weaponImage"></img>
        <p className={"weaponStats"}>
          Bane of Fire and Thunder: - Increases DMG against enemies affected by Pyro or Electro by 20/25/30/35/40%.
          {/* {props.weaponStats} */}
        </p>








         <p className={"weaponDesc"}>
           {/* {props.weaponDesc} */}
          A sharp blade with extravagant carvings that somehow does not compromise on durability and shapness. It roars like a lion as it cuts through the air.
        </p>
      </div>
    </div>
  )
}

export default WeaponCard