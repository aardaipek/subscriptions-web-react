import styled from "styled-components";

const SubItem = ({text,clickEvent}) => {
  return <ListItem onClick={clickEvent}>{text}</ListItem>;
};

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid #000000;
  :first-of-type {
    border-top: none;
  }
  &:hover{
      cursor:pointer
  }
`;

export default SubItem;
