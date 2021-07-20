import styled from "styled-components";
import SubItem from "./SubItem";

const SubList = ({ text,clickEvent }) => {
  return (
    <UList>
      <SubItem clickEvent={clickEvent} text={text}></SubItem>
    </UList>
  );
};

const UList = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export default SubList;
