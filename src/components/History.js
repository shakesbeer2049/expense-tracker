import { DeleteIcon } from "@chakra-ui/icons";
import Input from "./Input";
import { useState } from "react";
import { MoneyProvider } from "../context/MoneyContext";
import MoneyContext from "../context/MoneyContext";
import { useContext } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Edit from "./Edit";
const History = ({
  history,
  setHistory,
  balance,
  setBalance,
  income,
  setIncome,
  saving,
  setSaving,
  investment,
  setInvestment,
  expense,
  setExpense,
}) => {
  // console.log(history, "history");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { input, setInput, type, setType, note, setNote, date, setDate } =
    useContext(MoneyContext);
  // STATE
  const [editInput, setEditInput] = useState("");
  const [editNote, setEditNote] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [searchActive, setsearchActive] = useState(false);
  const onSearch = (e) => {
    if (e.target.value) setsearchActive(true);
    else setsearchActive(false);
    setSearchTerm(e.target.value);
    setFiltered(
      history.filter((data) =>
        data.note.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  // !DELETE
  const onDataDelete = (id) => {
    let ans = window.confirm("Delete Data?");
    function addConvert(a, b) {
      return Number(a) + Number(b);
    }
    function subConvert(a, b) {
      return Number(a) - Number(b);
    }
    if (ans) {
      // find data to delete
      let deleteData = history.find((data) => data.id === id);
      // if income
      if (deleteData.type === "inc") {
        setIncome(subConvert(income, deleteData.input));
        setBalance(subConvert(balance, deleteData.input));
      }
      // if savings
      else if (deleteData.type === "sav") {
        setSaving(subConvert(saving, deleteData.input));
        setBalance(addConvert(balance, deleteData.input));
      }
      // if investments
      else if (deleteData.type === "inv") {
        setInvestment(subConvert(investment, deleteData.input));
        setBalance(addConvert(balance, deleteData.input));
      }
      // if expenses
      else if (deleteData.type === "exp") {
        setExpense(subConvert(expense, deleteData.input));
        setBalance(addConvert(balance, deleteData.input));
      }
      // else setBalance(addConvert(balance, deleteData.input))

      setHistory(history.filter((data) => data.id !== id));
    }
    console.log(id);
  };

  //? EDIT
  const onDataEdit = (id) => {
    let dataToUpdate = history.find((data) => data.id === id);
    setEditInput(dataToUpdate.input);
    setEditNote(dataToUpdate.note);
    onOpen();

    console.log(dataToUpdate);
  };
  return (
    <>
      <div className="header-history flex items-center justify-between pt-2">
        <h1 className="text-4xl my-2 font-bold mr-16">History</h1>
        <input placeholder="Search" onChange={onSearch} value={searchTerm} />
      </div>
      <div className="history">
        <ul>
          {!searchActive
            ? history.map((data) => (
                <li
                  key={data.id}
                  className="flex justify-between bg-slate-200 mb-2 "
                >
                  <div className="amont-data">
                    <span className="text-2xl">{data.note.toUpperCase()}</span>
                    <br />
                    <p>{data.type}</p>
                    <span className="text-md">{data.date.substr(4, 11)}</span>
                  </div>
                  {/* <span>{data.type}</span> */}
                  <div className="amount-delete flex flex-col justify-between">
                    <span className="text-2xl">
                      {data.type === "inc" ? `+${data.input}` : -data.input}
                    </span>
                    <div className="edit-delete flex justify-between">
                      <button
                        className=""
                        onClick={() => onDataDelete(data.id)}
                      >
                        <DeleteIcon w={6} h={6} color="red.400" />
                      </button>
                      {/* <button
                        className="bg-blue-500 rounded-lg p-1 px-2"
                        onClick={() => onDataEdit(data.id)}
                      >
                        edit
                      </button> */}
                    </div>
                  </div>
                </li>
              ))
            : filtered.map((data) => (
                <li
                  key={data.id}
                  className="flex justify-between bg-slate-200 mb-2 "
                >
                  <div className="amont-data">
                    <span className="text-2xl">{data.note.toUpperCase()}</span>
                    <br />
                    <p>{data.type}</p>
                    <span className="text-md">{data.date.substr(4, 11)}</span>
                  </div>
                  {/* <span>{data.type}</span> */}
                  <div className="amount-delete flex flex-col justify-between">
                    <span className="text-2xl">
                      {data.type === "inc" ? `+${data.input}` : -data.input}
                    </span>
                    <div className="edit-delete flex justify-between">
                      <button
                        className=""
                        onClick={() => onDataDelete(data.id)}
                      >
                        <DeleteIcon w={6} h={6} />
                      </button>
                      {/* <button
                        className="bg-blue-500 rounded-lg p-1 px-2"
                        onClick={() => onDataEdit(data.id)}
                      >
                        edit
                      </button> */}
                    </div>
                  </div>
                </li>
              ))}
        </ul>
        <MoneyProvider>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Expense Tracker</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Edit
                  onClose={onClose}
                  setEditInput={setEditInput}
                  editInput={editInput}
                  editNote={editNote}
                  setEditNote={setEditNote}
                />
              </ModalBody>

              <ModalFooter>
                {/* <Button colorScheme='red' mr={3} onClick={onClose}>
        Close
      </Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </MoneyProvider>
      </div>
    </>
  );
};
export default History;
