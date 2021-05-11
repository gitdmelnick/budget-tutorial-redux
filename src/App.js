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
    const result = entries.filter((entry, index) => index !== id);
    console.log(`entries ${entries}`);
    console.log(`result ${result}`);
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
      <NewEntryForm/>
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    description: "Paycheck",
    value: "$1000.0",
    isExpense: false
  },
  {
    description: "Electricity bill",
    value: "$50.0",
    isExpense: true
  },
  {
    description: "Rent",
    value: "$500.0",
    isExpense: true
  },
]