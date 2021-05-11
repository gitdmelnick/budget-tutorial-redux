import { Form } from "semantic-ui-react";
import ButtonConfirmOrCancel from "./ButtonConfirmOrCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({
  addEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) => {
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
