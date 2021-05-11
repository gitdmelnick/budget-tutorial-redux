import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import "./components/MainHeader";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      resetEntry();

    }
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.map(entry => {
      if(entry.isExpense) {
        return totalExpenses += Number(entry.value)
      } 
      else {
        return totalIncome += Number(entry.value)
      }
    })
    setTotal(totalIncome - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncome);
  }, [entries])

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  };

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your balance:" value={`$${total}`} size="small" />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal}/>

      <MainHeader type="h3" title="History" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Paycheck",
    value: 1000,
    isExpense: false,
  },
  {
    id: 2,
    description: "Electricity bill",
    value: 50,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 500,
    isExpense: true,
  },
];
