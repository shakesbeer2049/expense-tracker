import { useContext } from "react";
import MoneyContext from "../context/MoneyContext";
import nextId from "react-id-generator";
import DatePicker from "react-datepicker";
import { useState } from "react";

const Edit = ({
  balance,
  setBalance,
  history,
  setHistory,
  income,
  setIncome,
  investment,
  setInvestment,
  expense,
  setExpense,
  saving,
  setSaving,
  setShowIB,
  onClose,
  setEditInput,
  editInput,
  editNote,
  setEditNote,
}) => {
  // STATE
  const { input, setInput, type, setType, note, setNote, date, setDate } =
    useContext(MoneyContext);

  const onInputChange = (e) => {
    setEditInput(e.target.value);
  };

  const onNoteChange = (e) => {
    setEditNote(e.target.value);
  };

  const onUpdate = () => {
    if (editInput && editNote) {
      switch (type) {
        case "inc":
          setBalance(Number() + Number(editInput));
          setIncome(income + Number(editInput));
          break;
        case "sav":
          balance > 0
            ? setBalance(Number(balance) - Number(editInput))
            : setBalance(Number(editInput) - Number(balance));
          setSaving(saving + Number(editInput));
          break;

        case "inv":
          balance > 0
            ? setBalance(Number(balance) - Number(editInput))
            : setBalance(Number(editInput) - Number(balance));
          setInvestment(investment + Number(editInput));
          break;

        case "exp":
          balance > 0
            ? setBalance(Number(balance) - Number(editInput))
            : setBalance(Number(editInput) - Number(balance));
          setExpense(expense + Number(editInput));
          break;

        default:
          break;
      }
      // if (type === "inc") setBalance(Number(balance) + Number(input));
      // else setBalance(Number(balance) - Number(input));
      let data = {
        id: nextId(),
        type,
        editInput,
        editNote,
        date: date.toString(),
      };
      setHistory(history.concat(data));
      console.log(history);

      setEditInput("");
      setEditNote("");
    } else window.alert("empty fields");
  };

  return (
    <div className="input-data">
      <input
        type="number"
        onChange={onInputChange}
        value={editInput || ""}
        placeholder="enter value"
        className="border-2 border-black mr-1"
      />
      <select
        name="type"
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="inc">Income</option>
        <option value="exp">Expenses</option>
        <option value="sav">Savings</option>
        <option value="inv">Investments</option>
      </select>{" "}
      <br />
      <div className="note-and-date flex mt-2">
        <input
          type="text"
          onChange={onNoteChange}
          value={editNote || ""}
          placeholder="add a note..."
          className="border-2 border-black flex mt-1 mr-2 m-auto "
        />
        <DatePicker
          className="mt-1"
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </div>
      <br />
      <div className="buttons">
        <button className="save-btn px-3 py-2 " onClick={onUpdate} type="submit">
          Update
        </button>
        <button
          className="cancel-btn px-3 py-2 "
          onClick={onClose}
          type="submit"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default Edit;
