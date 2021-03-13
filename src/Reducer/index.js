import { v4 as uuidv4 } from "uuid";

export const initialState = {
  lists: [
    {
      title: "",
      id: uuidv4(),
      created: false,
      placeholder: "Liste ekle",
      cards: [],
    },
  ],
  anotherLists: [
    {
      title: "",
      id: uuidv4(),
      created: false,
      placeholder: "Başka bir liste ekle",
      cards: [],
    },
  ],
};

function reducer(state = initialState, action) {
  let listIndex; // ->> the index of the list be deleted
  let newLists; // ->> new list created after the list was deleted
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case "ADD_CARD":
      return {
        ...state,
        lists: [
          ...state.lists,
          state.lists.filter(
            (list) =>
              list.id === action.payload.listId &&
              list.cards.push(action.payload)
          ),
        ],
      };
    case "DELETE_LIST":
      listIndex = state.lists.findIndex(
        (list) => list.id === action.payload.id
      );
      newLists = [...state.lists];

      if (listIndex >= 0) {
        newLists.splice(listIndex, 1);
      } else {
        console.warn(
          `Cant remove list (id: ${action.payload.id}) as its not in list!`
        );
      }
      return {
        ...state,
        lists: newLists,
      };
    default:
      return state;
  }
}

export default reducer;
