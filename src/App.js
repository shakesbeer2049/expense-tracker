import Input from "./components/Input";
import BarGraph from "./components/BarGraph";
import History from "./components/History";
import { useState } from "react";
import { MoneyProvider } from "./context/MoneyContext";
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
import { ChakraProvider } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
function App() {
  // input state
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([]);
  const [income, setIncome] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [saving, setSaving] = useState(0);
  const [expense, setExpense] = useState(0);
  const [showIB, setShowIB] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <div className="App">
        <h1 className="heading-main text-3xl md:text-3xl">Expense Tracker</h1>
        <h1 className="text-green-500 text-6xl  md:text-6xl">{balance}</h1>

        <AddIcon
          onClick={onOpen}
          className="add-icon"
          color="white"
          w={16}
          h={16}
        />

        <MoneyProvider>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Expense Tracker</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  balance={balance}
                  setBalance={setBalance}
                  history={history}
                  setHistory={setHistory}
                  income={income}
                  setIncome={setIncome}
                  expense={expense}
                  setExpense={setExpense}
                  investment={investment}
                  setInvestment={setInvestment}
                  saving={saving}
                  setSaving={setSaving}
                  setShowIB={setShowIB}
                  onClose={onClose}
                />
              </ModalBody>

              <ModalFooter>
                {/* <Button colorScheme='red' mr={3} onClick={onClose}>
        Close
      </Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>

          <BarGraph
            income={income}
            expense={expense}
            investment={investment}
            saving={saving}
          />

          <History
            history={history}
            setHistory={setHistory}
            balance={balance}
            setBalance={setBalance}
            income={income}
            expense={expense}
            investment={investment}
            saving={saving}
            setIncome = {setIncome}
            setExpense={setExpense}
            setInvestment={setInvestment}
            setSaving={setSaving}

          />
        </MoneyProvider>
        {/* <button onClick={()=> {setShowIB(true)}} className="add px-5 py-3">+</button> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
