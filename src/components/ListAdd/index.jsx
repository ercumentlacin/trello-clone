import React from "react";
import PropTypes from "prop-types";

import { useStateValue } from "../../Context/StateProvider";

function ListAdd({ listId }) {
  const [{ lists }] = useStateValue();

  return (
    <div className="d-flex align-items-center">
      <i className="fas fa-plus me-2"></i>
      <span>
        {lists.map((value) => value.id === listId && value.placeholder)}
      </span>
    </div>
  );
}

export default ListAdd;

ListAdd.propTypes = {
  listId: PropTypes.string,
};
