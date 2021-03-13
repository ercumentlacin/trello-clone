import React from "react";
import PropTypes from "prop-types";
import { useStateValue } from "../../Context/StateProvider";

function CardList({
  listId,
  cardTitle,
  getCardTitle,
  onEnterPress,
  onSubmit,
  inputActive,
}) {
  const [{ lists }, dispatch] = useStateValue(); // eslint-disable-line

  return (
    <>
      <div className="card-list">
        {lists
          .filter((list) => list.id === listId)
          .map(({ cards }) =>
            cards.length
              ? cards.map((card) => (
                  <div className="card-list__detail" key={card.id}>
                    {card.title}
                  </div>
                ))
              : null
          )}
      </div>
      {inputActive && (
        <textarea
          placeholder="Bu kart için başlık girin..."
          className="w-100 rounded"
          onSubmit={onSubmit}
          value={cardTitle}
          onChange={getCardTitle}
          onKeyDown={onEnterPress}
        ></textarea>
      )}
    </>
  );
}

export default CardList;

CardList.propTypes = {
  listId: PropTypes.string,
  cardTitle: PropTypes.string,
  getCardTitle: PropTypes.func,
  onEnterPress: PropTypes.func,
  onSubmit: PropTypes.func,
  inputActive: PropTypes.bool,
};
