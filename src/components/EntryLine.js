import { Fragment} from "react";
import { useDispatch } from "react-redux";
import { Segment, Grid, Icon } from "semantic-ui-react";
import { removeEntryRedux } from '../actions/entries.actions'

const EntryLine = ({id, description, value, isExpense = false, editEntry}) => {

  const dispatch = useDispatch();
  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={8} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={4} textAlign="right">
              {`$${value}`}
            </Grid.Column>
            <Grid.Column width={4}>
              <Icon name="edit" onClick={() => editEntry(id)}/>
              <Icon name="trash" onClick={() => dispatch(removeEntryRedux(id))} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default EntryLine;
