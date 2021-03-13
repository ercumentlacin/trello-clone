import React from "react";
import PropTypes from "prop-types";

function CardTitle({ onClick }) {
  return (
    <div className="d-flex align-items-center card__title rounded">
      <i className="fas fa-plus me-2"></i>
      <input
        onClick={onClick}
        className="w-100 list"
        type="text"
        placeholder="Kart ekle"
      />
    </div>
  );
}

export default CardTitle;

CardTitle.propTypes = {
  onClick: PropTypes.func,
};
