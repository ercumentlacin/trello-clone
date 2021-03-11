import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import ListStyled from "./styles";
import { useStateValue } from "../../Context/StateProvider";
// components
import ListAdd from "../ListAdd";

function List({ listId, listCreated, listTitle }) {
  const [listClicked, setListClicked] = useState(listCreated);
  const [title, setTitle] = useState("");
  const inputRef = useRef(title);
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
  console.log("listTitle ->>", listTitle);
  console.log("title ->>", title);
  console.log("inputRef ->>", inputRef);
  return (
    <ListStyled
      listClicked={listClicked}
      className="p-2 rounded"
      onClick={!listClicked ? () => setListClicked(true) : null}
    >
      <form onSubmit={addListTitle}>
        {!listClicked ? (
          // if the list adding field is active
          <ListAdd listId={listId} />
        ) : (
          // if the list adding field is deactive
          <>
            <div className="w-100">
              <input
                className="w-100 list"
                type="text"
                value={title}
                placeholder={title || "Liste başlığını girin..."}
                onChange={(e) =>
                  setTitle(
                    lists.map(
                      (value) => value.id === listId && e.target.value
                    )[0]
                  )
                }
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
  listTitle: PropTypes.string,
  listCreated: PropTypes.bool,
};
