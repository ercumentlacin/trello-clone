import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useStateValue } from "../../Context/StateProvider";
import ListStyled from "./styles";

function List({ listId, listCreated }) {
  const [listClicked, setListClicked] = useState(listCreated);
  const [title, setTitle] = useState("");

  const [{ lists }, dispatch] = useStateValue();

  const addListTitle = (e) => {
    e.preventDefault();

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
  console.log({ lists });

  return (
    <ListStyled
      listClicked={listClicked}
      className="p-2 rounded"
      onClick={!listClicked ? () => setListClicked(true) : null}
    >
      <form onSubmit={addListTitle}>
        {!listClicked ? (
          // if the list adding field is active
          <div className="d-flex align-items-center">
            <i className="fas fa-plus me-2"></i>
            <span>
              {lists.map((value) => value.id === listId && value.placeholder)}
            </span>
          </div>
        ) : (
          // if the list adding field is deactive
          <>
            <div className="w-100">
              <input
                className="w-100 list"
                type="text"
                value={title}
                placeholder="Liste başlığını girin..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-100 d-flex align-items-center mt-2">
              <button className="btn- btn-success rounded" type="submit">
                Listeye ekle
              </button>
              <span
                className="text-danger ms-auto"
                onClick={() => setListClicked(false)}
              >
                <i className="far fa-times-circle"></i>
              </span>
            </div>
          </>
        )}
      </form>
    </ListStyled>
  );
}

export default List;

List.propTypes = {
  listId: PropTypes.string,
  listCreated: PropTypes.bool,
};
