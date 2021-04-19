import styled from "styled-components";

const BoardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background: #DDAF6F;
`;

const Header = styled.h2`
  margin: 0;
  padding: 15px;
`;

const ListsContainer = styled.div`
  flex: 1;
  display: inline-flex;
  padding: 0 15px 15px;
`;

const Board = ({name, children}) => {
    return (
        <BoardWrapper>
            <Header>
                {name}
            </Header>
            <ListsContainer>
                {children}
            </ListsContainer>
        </BoardWrapper>
    )
}

export default Board;