import {
  Container,
  Grid,
  Icon,
  Segment,
} from "semantic-ui-react";
import "./App.css";
import './components/MainHeader'
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from './components/DisplayBalances';
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      
      <MainHeader title="Budget"/>
      <DisplayBalance title="Your balance:" value="2,550.53" size="small"/>

      <DisplayBalances/>

      <MainHeader type="h3" title="History"/>
      
      <EntryLine description="income" value="$10.00"/>
      <EntryLine description="expense" value="$10.00" isExpense/>


      <MainHeader type="h3" title="Add new transaction"/>
      <NewEntryForm/>
    </Container>
  );
}

export default App;
