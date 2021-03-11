import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import ListStyled from "./styles";
import { useStateValue } from "../../Context/StateProvider";
// components
import ListAdd from "../ListAdd";
import ListTitle from "../ListTitle";

function List({ listId, listCreated, listTitle }) {
  const [{ lists }, dispatch] = useStateValue();
  const [listClicked, setListClicked] = useState(listCreated);
  const [title, setTitle] = useState("");
  console.log(lists);
  const addListTitle = (e) => {
    e.preventDefault();
    // add list in lists
    dispatch({
      type: "ADD_LIST",
      payload: {
        title,
        id: uuidv4(),
        cards: [],
        created: true,
        placeholder: "Başka liste ekleyin",
      },
    });
    setTitle("");
  };

  // title change area on
  const handleTitleChnageOn = () => {
    !listClicked && setListClicked(true);
  };
  // title change area off
  const handleTitleChnageOff = () => {
    listClicked ? setListClicked(false) : null;
  };

  return (
    <ListStyled
      listClicked={listClicked}
      className="p-2 rounded"
      onClick={handleTitleChnageOn}
    >
      <form onSubmit={addListTitle}>
        {!listClicked ? (
          // if the list adding field is active
          <ListAdd listId={listId} handleTitleChnageOn={handleTitleChnageOn} />
        ) : (
          // if the list adding field is deactive
          <ListTitle
            listTitle={listTitle}
            listId={listId}
            title={title}
            setTitle={setTitle}
            handleTitleChnageOff={handleTitleChnageOff}
            listCreated={listCreated}
          />
        )}
      </form>
    </ListStyled>
  );
}

export default List;

List.propTypes = {
  listId: PropTypes.string,
  listTitle: PropTypes.string,
  listCreated: PropTypes.bool,
};
