import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStateValue } from "../../Context/StateProvider";

function ListTitle({
  title,
  handleTitleChnageOff,
  setTitle,
  listTitle,
  listCreated,
  listId,
}) {
  const [{ lists }] = useStateValue();
  console.log(title);
  useEffect(() => {
    lists.map((val) => (val.id === listId ? (val.title = listTitle) : "ne"));
  }, [title]);
  console.log(lists);
  return (
    <div>
      <input
        className="w-100 list"
        type="text"
        value={title || listTitle}
        placeholder={title || "Liste başlığını girin..."}
        onChange={(e) => setTitle(e.target.value)}
      />

      {!listCreated && (
        <div className="w-100 d-flex align-items-center mt-2">
          <button className="btn- btn-success rounded" type="submit">
            Listeye ekle
          </button>
          <span className="text-danger ms-auto" onClick={handleTitleChnageOff}>
            <i className="far fa-times-circle"></i>
          </span>
        </div>
      )}
    </div>
  );
}

export default ListTitle;

ListTitle.propTypes = {
  handleTitleChnage: PropTypes.func,
  handleTitleChnageOff: PropTypes.func,
  setTitle: PropTypes.func,
  title: PropTypes.string,
  listTitle: PropTypes.string,
  listId: PropTypes.string,
  listCreated: PropTypes.bool,
};
