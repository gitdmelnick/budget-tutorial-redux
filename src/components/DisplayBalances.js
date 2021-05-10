import {Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
    return ( 
      <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value="1256.54" color="green"/>
          </Grid.Column>
          <Grid.Column>
          <DisplayBalance title="Expenses" value="625.50" color="red"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
     );
}
 
export default DisplayBalances;