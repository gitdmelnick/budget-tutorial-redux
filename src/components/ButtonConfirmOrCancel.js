import {Button} from 'semantic-ui-react'

const ButtonConfirmOrCancel = ({addEntry}) => {
    return ( 
        <Button.Group style={{marginTop: 20 }} >
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary onClick={() => addEntry()}>Confirm</Button>
        </Button.Group>
     );
}
 
export default ButtonConfirmOrCancel;