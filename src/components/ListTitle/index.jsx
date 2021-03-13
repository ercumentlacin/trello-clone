import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStateValue } from "../../Context/StateProvider";
// components
import Card from "../Card";

function ListTitle({
  title,
  handleTitleChnageOff,
  setTitle,
  listTitle,
  listCreated,
  listId,
  refListTitle,
  addListTitle,
}) {
  const [{ lists, anotherLists }, dispatch] = useStateValue(); //eslint-disable-line

  useEffect(() => {
    lists.filter((list) =>
      list.id === listId
        ? !list.created
          ? refListTitle.current.focus()
          : null
        : null
    );
    anotherLists.filter(
      (list) => list.id === listId && refListTitle.current.focus()
    );
  }, [listCreated]);

  useEffect(() => {
    lists.map((val) => (val.id === listId ? (val.title = listTitle) : "ne"));
  }, [title]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addListTitle(e);
    }
  };

  const listDelete = () => {
    dispatch({
      type: "DELETE_LIST",
      payload: {
        id: listId,
      },
    });
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <input
          onKeyDown={handleKeyDown}
          className={listTitle.length ? "w-100 list passive" : "w-100 list"}
          type="text"
          value={title || listTitle}
          placeholder={title || "Liste başlığını girin..."}
          onChange={(e) => setTitle(e.target.value)}
          ref={refListTitle}
        />
        <span
          onClick={listDelete}
          className="ms-auto cursor ps-2"
          title="Listeyi sil"
        >
          <i className="fas fa-trash-alt text-warning"></i>
        </span>
      </div>
      {!listCreated ? (
        <div className="w-100 d-flex align-items-center mt-2">
          <button
            onClick={addListTitle}
            className="btn- btn-success rounded"
            type="submit"
          >
            Listeye ekle
          </button>
          <span className="text-danger ms-auto" onClick={handleTitleChnageOff}>
            <i className="far fa-times-circle"></i>
          </span>
        </div>
      ) : (
        <div className="mt-2 mb-1">
          <Card listId={listId} />
        </div>
      )}
    </div>
  );
}

export default ListTitle;

ListTitle.propTypes = {
  handleTitleChnage: PropTypes.func,
  handleTitleChnageOff: PropTypes.func,
  addListTitle: PropTypes.func,
  setTitle: PropTypes.func,
  title: PropTypes.string,
  refListTitle: PropTypes.object,
  listTitle: PropTypes.string,
  listId: PropTypes.string,
  listCreated: PropTypes.bool,
};
