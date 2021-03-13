import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../Context/StateProvider";
import CardStyled from "./styles";

function Card({ listId }) {
  const [{ lists }, dispatch] = useStateValue(); // eslint-disable-line
  const [inputActive, setInputActive] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  console.log({ lists });
  // card submit
  const cardSubmit = () => {
    setInputActive(true);
    dispatch({
      type: "ADD_CARD",
      payload: {
        listId,
        title: cardTitle,
        id: uuidv4(),
      },
    });
    setCardTitle("");
  };
  const getCardTitle = (e) => {
    setCardTitle(e.target.value);
  };
  return (
    <CardStyled>
      <div className="trellocard">
        {!inputActive ? (
          <div className="d-flex align-items-center card__title rounded">
            <i className="fas fa-plus me-2"></i>
            <input
              onClick={() => setInputActive(true)}
              className="w-100 list"
              type="text"
              placeholder="Kart ekle"
            />
          </div>
        ) : (
          <>
            {lists
              .filter((list) => list.id === listId)
              .map(({ cards }) =>
                cards.length
                  ? cards.map((card) => <div key={card.id}> {card.title}</div>)
                  : null
              )}
            <textarea
              placeholder="Bu kart için başlık girin..."
              className="w-100 rounded"
              onSubmit={() => setInputActive(false)}
              value={cardTitle}
              onChange={getCardTitle}
            ></textarea>
          </>
        )}

        <div className="w-100 d-flex align-items-center mt-2">
          <button
            onClick={cardSubmit}
            className="btn- btn-success rounded"
            type="submit"
          >
            Kart Ekle
          </button>
          <span className="text-danger ms-auto">
            <i className="far fa-times-circle"></i>
          </span>
        </div>
      </div>
    </CardStyled>
  );
}

export default Card;

Card.propTypes = {
  listId: PropTypes.string,
};
