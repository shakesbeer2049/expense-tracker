import Input from "./components/Input";
import BarGraph from "./components/BarGraph";
import History from "./components/History";
import { Button } from "primereact/button";
import { useState } from "react";
import { MoneyProvider } from "./context/MoneyContext";

function App() {
  // input state
  const [balance, setBalance] = useState(5000);
  const [history, setHistory] = useState([]);
  return (
    <div className="App">
      <h1 className="">Expense Tracker</h1>
      <h1 className="text-green-500">{balance}</h1>
      <MoneyProvider>
        <Input
          balance={balance}
          setBalance={setBalance}
          history={history}
          setHistory={setHistory}
        />
        <BarGraph />
        
        <History history={history} setHistory={setHistory} />
        <Button label="Proceed" className="p-button-raised p-button-rounded" />
      </MoneyProvider>
    </div>
  );
}

export default App;
