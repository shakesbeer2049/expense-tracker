import {useContext } from "react";
import MoneyContext from "../context/MoneyContext";
import nextId from "react-id-generator";
import DatePicker from "react-datepicker";

const Input = ({
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
}) => {
  // STATE
  const { input, setInput, type, setType, note, setNote, date, setDate } =
    useContext(MoneyContext);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onNoteChange = (e) => {
    setNote(e.target.value);
  };

  const onSave = () => {
    if (input && note) {
      switch (type) {
        case "inc":
          setBalance(Number(  ) + Number(input));
          setIncome(income + Number(input));
          break;
        case "sav":
          balance > 0
            ? setBalance(Number(balance) - Number(input))
            : setBalance(Number(input) - Number(balance));
          setSaving(saving + Number(input));
          break;

        case "inv":
          balance > 0
            ? setBalance(Number(balance) - Number(input))
            : setBalance(Number(input) - Number(balance));
          setInvestment(investment + Number(input));
          break;

        case "exp":
          balance > 0
            ? setBalance(Number(balance) - Number(input))
            : setBalance(Number(input) - Number(balance));
          setExpense(expense + Number(input));
          break;

        default:
          break;
      }
      // if (type === "inc") setBalance(Number(balance) + Number(input));
      // else setBalance(Number(balance) - Number(input));
      let data = {
        id: nextId(),
        type,
        input,
        note,
        date: date.toString(),
      };
      setHistory(history.concat(data));
      console.log(history);

      setInput("");
      setNote("");
    } else window.alert("empty fields");
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
      <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
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
          value={note || ""}
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
        <button className="save-btn px-3 py-2 " onClick={onSave} type="submit">
          Save
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
export default Input;
