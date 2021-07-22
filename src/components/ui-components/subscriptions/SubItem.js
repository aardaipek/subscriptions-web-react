import styled from "styled-components";

const SubItem = ({ text, clickEvent, color }) => {
  return (
    <ListItem onClick={clickEvent}>
      <ColorDot color={color}>
      
      </ColorDot>
      {text}
    </ListItem>
  );
};

const ListItem = styled.li`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items:center;
  padding: 10px 0px;
  border-top: 1px solid #000000;
  :first-of-type {
    border-top: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ColorDot = styled.div`
  background: ${(p) => p.color};
  margin-right:10px;
  width:15px;
  height:15px;
  border-radius: 50%;
`;

export default SubItem;
