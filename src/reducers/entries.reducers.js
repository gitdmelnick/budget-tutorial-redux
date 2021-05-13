import { v4 as uuidv4 } from "uuid";

const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    default:
      return state;
  }
};

export default reducer;

var initialEntries = [
  {
    id: uuidv4(),
    description: "Paycheck redux",
    value: 1000,
    isExpense: false,
  },
  {
    id: uuidv4(),
    description: "Electricity bill redux",
    value: 50,
    isExpense: true,
  },
  {
    id: uuidv4(),
    description: "Rent",
    value: 500,
    isExpense: true,
  },
];