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
`;

export default CardStyled;
