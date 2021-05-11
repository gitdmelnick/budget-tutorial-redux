import { useState } from 'react';
import {
  Container,
} from 'semantic-ui-react';
import './App.css';
import './components/MainHeader'
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';

function App() {
  const [entries, setEntries] = useState(initialEntries)

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
  }

  return (
    <Container>
      
      <MainHeader title='Budget'/>
      <DisplayBalance title='Your balance:' value='2,550.53' size='small'/>

      <DisplayBalances/>

      <MainHeader type='h3' title='History'/>
      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader type='h3' title='Add new transaction'/>
      <NewEntryForm addEntry={addEntry}/>
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Paycheck",
    value: "$1000.0",
    isExpense: false
  },
  {
    id: 2,
    description: "Electricity bill",
    value: "$50.0",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "$500.0",
    isExpense: true
  },
]