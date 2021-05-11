import { Fragment, useState } from "react";
import { Segment, Grid, Icon, Container } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

const EntryLine = ({id, description, value, isExpense = false, deleteEntry}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={8} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={4} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={4}>
              <Icon name="edit" onClick={() => setIsOpen(true)}/>
              <Icon name="trash" onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Fragment>
  );
};

export default EntryLine;
