import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({isOpen, setIsOpen}) => {
    return (
        <Modal open={isOpen}>
          <Modal.Header>Edit entry</Modal.Header>
          <Modal.Content>
            <EntryForm></EntryForm>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={()=>setIsOpen(false)}>Close</Button>
          </Modal.Actions>
        </Modal>
      );
}
 
export default ModalEdit;