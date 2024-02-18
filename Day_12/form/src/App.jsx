import React from "react";

import { useState } from "react";

const App = () => {
  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: "true",
    mode: "",
    favCar: "",
  });
  console.log(FormData);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    //send
    console.log("Final printting....");
    console.log(FormData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br />
        <input
          type="text"
          placeholder="First Name:"
          onChange={changeHandler}
          name="firstName"
          value={FormData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name:"
          onChange={changeHandler}
          name="lastName"
          value={FormData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email:"
          onChange={changeHandler}
          name="email"
          value={FormData.email}
        />
        <br />
        <br />
        <textarea
          placeholder="Enter Text"
          onChange={changeHandler}
          name="comments"
          value={FormData.comments}
        />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id={FormData.isVisible}
          checked={FormData.isVisible}
        />
        <label htmlFor="isVisible">Am I Visible ?</label>
        <br /> <br />
        <fieldset>
          <legend>Mode: </legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-mode"
            id="Online-mode"
            checked={FormData.mode === "Online-mode"}
          />
          <label htmlFor="Online-mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Ofline-mode"
            id="Ofline-mode"
            checked={FormData.mode === "Ofline-mode"}
          />

          <label htmlFor="Ofline-mode">Ofline Mode</label>
        </fieldset>
        <label htmlFor="">Tell me your favCar: </label>
        <select
          name="favCar"
          id="favCar"
          value={FormData.favCar}
          onChange={changeHandler}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Fartuner">Fartuner</option>
          <option value="Jeep">Jeep</option>
          <option value="Hector">Hector</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
