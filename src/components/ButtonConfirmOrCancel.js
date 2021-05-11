import {Button} from 'semantic-ui-react'

const ButtonConfirmOrCancel = ({addEntry, description, value, isExpense }) => {
    return ( 
        <Button.Group style={{marginTop: 20 }} >
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary onClick={() => addEntry(description, value, isExpense)}>Confirm</Button>
        </Button.Group>
     );
}
 
export default ButtonConfirmOrCancel;