import styled from "styled-components";

const ListStyle = styled.div`
  width: 280px;
  background: #ebecf0;
  border-radius: 3px;

  /* Enables Scroll on CardWrapper */
  position: relative;
  height: 100%;
  
  & ~ & {
    margin-left: 15px;
  }
`;

const CardWrapper = styled.div`
  position: absolute;
  width: 100%;
  /*   Top: 40 for header */
  top: 40px;
  /*   Bottom: 45 for button */
  bottom: 45px;
  overflow-y: auto;


  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #c4c4c4;
  }
`;

const Header = styled.h4`
  padding: 10px;
  margin: 0;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  border: none;
  background: lightgray;
  padding: 15px;
`;

const List = ({name, children}) => {
    return (
        <ListStyle>
            <Header>{name}</Header>
            <CardWrapper>
                {children}
            </CardWrapper>
            <Button>Add Card +</Button>
        </ListStyle>
    )
}

export default List;