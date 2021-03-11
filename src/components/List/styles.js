import styled from "styled-components";

const ListStyled = styled.div`
  background: rgb(255 255 255 / 8%);
  transition: all 250ms ease-in-out;
  cursor: ${(props) => (props.listClicked === false ? "pointer" : "auto")};

  &:hover {
    background: rgb(255 255 255 / 16%);
  }

  input.list {
    background: #7f8fa6;
    color: #2f3640;
    display: block;
    margin: 0;
    transition: margin 85ms ease-in, background 85ms ease-in;
    border-radius: 3px;
    line-height: 20px;
    padding: 8px 12px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
      Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    &::placeholder {
      color: #2f3640;
      font-weight: 600;
    }
    &:focus {
      font-weight: 400;
      color: #172b4d;
      background-color: #fff;
      box-shadow: inset 0 0 0 2px #0079bf;
    }
  }
`;

export default ListStyled;
