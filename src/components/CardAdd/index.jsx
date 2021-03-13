import React from "react";
import PropTypes from "prop-types";

function CardAdd({ cardSubmit, onClick }) {
  return (
    <div className="w-100 d-flex align-items-center mt-2">
      <button
        onClick={cardSubmit}
        className="btn- btn-success rounded"
        type="submit"
      >
        Kart Ekle
      </button>
      <span onClick={onClick} className="text-danger ms-auto">
        <i className="far fa-times-circle text-danger cursor"></i>
      </span>
    </div>
  );
}

export default CardAdd;

CardAdd.propTypes = {
  cardSubmit: PropTypes.func,
  onClick: PropTypes.func,
};
