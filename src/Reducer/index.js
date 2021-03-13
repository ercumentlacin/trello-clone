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
  todos: [],
  todoCardItems: [],
  allCards: [],
  todoList: [],
};

function reducer(state = initialState, action) {
  let index; // ->> the index of the todo be deleted
  let listIndex; // ->> the index of the list be deleted
  let newTodos; // ->> new list created after the todo was deleted
  let newAllCards; // ->> new list created after the list was deleted
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
    case "ADD_CARD_ITEMS":
      return {
        ...state,
        allCards: [...state.allCards, action.cardItems],
      };
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.todos],
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        todos: [...state.todos, action.todos],
      };
    case "DELETE_TODO":
      index = state.todoList.findIndex(
        (todosItem) => todosItem.todoUniqId === action.id
      );
      newTodos = [...state.todoList];

      if (index >= 0) {
        newTodos.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        todoList: newTodos,
      };
    case "DELETE_LIST":
      listIndex = state.allCards.findIndex(
        (cardListItems) => cardListItems.id === action.id
      );
      newAllCards = [...state.allCards];

      if (listIndex >= 0) {
        newAllCards.splice(listIndex, 1);
      } else {
        console.warn(`Cant remove card (id: ${action.id}) as its not in list!`);
      }
      return {
        ...state,
        allCards: newAllCards,
      };
    default:
      return state;
  }
}

export default reducer;
