import {Button} from 'semantic-ui-react'

const ButtonConfirmOrCancel = () => {
    return ( 
        <Button.Group style={{marginTop: 20 }} >
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Confirm</Button>
        </Button.Group>
     );
}
 
export default ButtonConfirmOrCancel;