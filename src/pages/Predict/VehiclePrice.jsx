import styles from "./styles.module.css";
import React from "react";

function VehiclePrice() {
  return (
    <div className={styles.container_predict}>
      <div className={styles.header_predict}>
        <button>Logout</button>
      </div>
      <form className={styles.form_predict}>
        <div className={styles.input_container}>
          <label htmlFor="Symboling">Symboling</label>
          <input
            className={styles.input}
            type="number"
            id="Symboling"
            placeholder="symboling"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="CarName">Car Name</label>
          <input
            className={styles.input}
            type="text"
            id="CarName"
            placeholder="Car Name"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="fueltype">Fuel Type</label>
          <input
            className={styles.input}
            type="text"
            id="fueltype"
            placeholder="fueltype"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="aspiration">Aspiration</label>
          <input
            className={styles.input}
            type="text"
            id="aspiration"
            placeholder="aspiration"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="doornumber">Door Number</label>
          <input
            className={styles.input}
            type="number"
            id="doornumber"
            placeholder="doornumber"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="carbody">Car Body</label>
          <input
            className={styles.input}
            type="text"
            id="carbody"
            placeholder="carbody"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="drivewheel">Drive Wheel</label>
          <input
            className={styles.input}
            type="text"
            id="drivewheel"
            placeholder="drivewheel"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="enginelocation">Engine Location</label>
          <input
            className={styles.input}
            type="text"
            id="enginelocation"
            placeholder="enginelocation"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="wheelbase">Wheelbase</label>
          <input
            className={styles.input}
            type="number"
            id="wheelbase"
            placeholder="wheelbase"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="carlength">Car Length</label>
          <input
            className={styles.input}
            type="number"
            id="carlength"
            placeholder="carlength"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="carwidth">Car Width</label>
          <input
            className={styles.input}
            type="number"
            id="carwidth"
            placeholder="carwidth"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="carheight">Car Height</label>
          <input
            className={styles.input}
            type="number"
            id="carheight"
            placeholder="carheight"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="curbweight">Curb Weight</label>
          <input
            className={styles.input}
            type="number"
            id="curbweight"
            placeholder="curbweight"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="enginetype">Engine Type</label>
          <input
            className={styles.input}
            type="text"
            id="enginetype"
            placeholder="enginetype"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="cylindernumber">Cylinder Number</label>
          <input
            className={styles.input}
            type="number"
            id="cylindernumber"
            placeholder="cylindernumber"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="enginesize">Engine Size</label>
          <input
            className={styles.input}
            type="number"
            id="enginesize"
            placeholder="enginesize"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="fuelsystem">Fuel System</label>
          <input
            className={styles.input}
            type="text"
            id="fuelsystem"
            placeholder="fuelsystem"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="boreratio">Bore Ratio</label>
          <input
            className={styles.input}
            type="number"
            id="boreratio"
            placeholder="boreratio"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="stroke">Stroke</label>
          <input
            className={styles.input}
            type="number"
            id="stroke"
            placeholder="stroke"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="compressionratio">Compression Ratio</label>
          <input
            className={styles.input}
            type="number"
            id="compressionratio"
            placeholder="compressionratio"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="horsepower">Horsepower</label>
          <input
            className={styles.input}
            type="number"
            id="horsepower"
            placeholder="horsepower"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="peakrpm">Peak RPM</label>
          <input
            className={styles.input}
            type="number"
            id="peakrpm"
            placeholder="peakrpm"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="citympg">City MPG</label>
          <input
            className={styles.input}
            type="number"
            id="citympg"
            placeholder="citympg"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="highwaympg">Highway MPG</label>
          <input
            className={styles.input}
            type="number"
            id="highwaympg"
            placeholder="highwaympg"
          />
        </div>
        <div className={styles.predict_button}>
          <button>Predict</button>
        </div>
      </form>
    </div>
  );
}

export default VehiclePrice;
