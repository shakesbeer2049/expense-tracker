import { InputNumber } from "primereact/inputnumber";
import { Dropdown, Button } from "primereact/dropdown";
import { useState, useContext } from "react";
import MoneyContext from "../context/MoneyContext";

const Input = ({ balance, setBalance }) => {
  // STATE
  const {input, setInput, type, setType} = useContext(MoneyContext);


  const onInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onSelect = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  const onSave = () => {
    if (type === "inc") setBalance(Number(balance) + Number(input));
    else setBalance(Number(balance) - Number(input));
    setInput("");
  };

  return (
    <div className="input-data">
      <input
        type="number"
        onChange={onInputChange}
        value={input || ""}
        placeholder="enter value"
        className="border-2 border-black mr-1"
      />
      <select name="type" id="type" onChange={onSelect}>
        <option value="inc" selected>
          Income
        </option>
        <option value="exp">Expenses</option>
        <option value="sav">Savings</option>
        <option value="inv">Investments</option>
      </select>{" "}
      <br />
      <input
        type="text"
        onChange={onInputChange}
        value={input || ""}
        placeholder="add a note..."
        className="border-2 border-black flex mt-1 m-auto "
      />
      <br />
      <div className="buttons">
      <button className="save-btn px-3 py-2 " onClick={onSave} type="submit">
        Save
      </button>
      <button className="cancel-btn px-3 py-2 " onClick={onSave} type="submit">
        Cancel
      </button>
      </div>
    </div>
  );
};
export default Input;
