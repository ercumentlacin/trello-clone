import styled from "styled-components";

const CardStyled = styled.div`
  .trellocard {
    .card__title {
      padding: 0 1em;
      background-color: #7f8fa6;
      transition: all 250ms ease-in-out;

      &:hover {
        opacity: 0.7;

        input {
          background-color: transparent;
        }
      }
    }
  }
  i {
    color: #353b48;
  }
  textarea {
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    line-height: 20px;
    transition-duration: 85ms;
    transition-timing-function: ease;
    padding: 0.5em;
    box-shadow: 1px 1px 2px 0px black;
    background-color: #f5f6fa;
  }

  .card-list {
    &__detail {
      background-color: #7f8fa6;
      border-radius: 3px;
      box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
      cursor: pointer;
      display: block;
      margin-bottom: 8px;
      padding: 0.2em 1em;
      color: #2f3640;
      line-height: 20px;
      word-wrap: break-word;
    }
  }
`;

export default CardStyled;
