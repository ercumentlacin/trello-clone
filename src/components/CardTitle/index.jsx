import React from "react";
import PropTypes from "prop-types";
import { useStateValue } from "../../Context/StateProvider";

function CardTitle({ onClick, listId }) {
  const [{ lists }] = useStateValue();

  return (
    <div className="d-flex align-items-center card__title rounded">
      <i className="fas fa-plus me-2"></i>
      <input
        onClick={onClick}
        className="w-100 list"
        type="text"
        placeholder={
          lists.filter((list) => list.id === listId)[0].cards.length
            ? "Başkabir kart ekle"
            : "Kart Ekle"
        }
      />
    </div>
  );
}

export default CardTitle;

CardTitle.propTypes = {
  onClick: PropTypes.func,
  listId: PropTypes.string,
};
