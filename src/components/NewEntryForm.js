import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "semantic-ui-react";
import ButtonConfirmOrCancel from "./ButtonConfirmOrCancel";
import EntryForm from "./EntryForm";
import { addEntryRedux } from '../actions/entries.actions'
import { v4 as uuidv4 } from "uuid";

const NewEntryForm = () => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch()

  function addEntry() {
    dispatch(addEntryRedux({
      id: uuidv4(),
      description,
      value,
      isExpense
    }));
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />
      <ButtonConfirmOrCancel
        addEntry={addEntry}
      />
    </Form>
  );
};

export default NewEntryForm;
