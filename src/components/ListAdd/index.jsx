import React from "react";
import PropTypes from "prop-types";

import { useStateValue } from "../../Context/StateProvider";

function ListAdd({ listId }) {
  const [{ anotherLists }] = useStateValue();

  return (
    <div className="d-flex align-items-center">
      <i className="fas fa-plus me-2"></i>
      <span>
        {anotherLists[0].id === listId ? "Başka bir liste ekle" : "Liste ekle"}
      </span>
    </div>
  );
}

export default ListAdd;

ListAdd.propTypes = {
  listId: PropTypes.string,
};
