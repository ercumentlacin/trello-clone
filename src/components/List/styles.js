import styled from "styled-components";

const ListStyled = styled.div`
  background: rgb(255 255 255 / 8%);
  transition: all 250ms ease-in-out;
  cursor: ${(props) => (props.listClicked === false ? "pointer" : "auto")};

  &:hover {
    background: rgb(255 255 255 / 16%);
  }

  input.list {
    background-color: #fff;
    box-shadow: inset 0 0 0 2px #0079bf;
    display: block;
    margin: 0;
    transition: margin 85ms ease-in, background 85ms ease-in;
    border-radius: 3px;
    line-height: 20px;
    padding: 8px 12px;
    color: #172b4d;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
      Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
`;

export default ListStyled;
