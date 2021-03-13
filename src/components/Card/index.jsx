import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../Context/StateProvider";
import CardStyled from "./styles";
import CardTitle from "../CardTitle";
import CardList from "../CardList";
import CardAdd from "../CardAdd";

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
  // If enter is pressed in the textarea area && card submit
  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      cardSubmit();
    }
  };
  // set card title
  const getCardTitle = (e) => {
    setCardTitle(e.target.value);
  };
  return (
    <CardStyled>
      <div className="trellocard">
        <CardList
          inputActive={inputActive}
          listId={listId}
          cardTitle={cardTitle}
          getCardTitle={getCardTitle}
          onEnterPress={onEnterPress}
          onSubmit={() => setInputActive(false)}
        />
        {!inputActive ? (
          <CardTitle listId={listId} onClick={() => setInputActive(true)} />
        ) : null}

        {inputActive && (
          <CardAdd
            cardSubmit={cardSubmit}
            onClick={() => setInputActive(false)}
          />
        )}
      </div>
    </CardStyled>
  );
}

export default Card;

Card.propTypes = {
  listId: PropTypes.string,
};
