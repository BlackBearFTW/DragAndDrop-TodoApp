import styled from "styled-components";

const ListStyle = styled.div`
  width: 280px;
  background: #ebecf0;
  border-radius: 3px;
  display: flex;
  flex-flow: column;

  & ~ & {
    margin-left: 15px;
  }
`;

const CardWrapper = styled.div`
  flex: 1;
  border: red 3px solid;
`;

const Header = styled.h4`
  padding: 10px;
  margin: 0;
`;

const Button = styled.button`
  border: none;
  background: transparent;
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