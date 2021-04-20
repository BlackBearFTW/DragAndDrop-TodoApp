import styled from "styled-components";
import {ReactNode} from "react";

const BoardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background: #ddaf6f;
`;

const Header = styled.h2`  
  margin: 0;
  padding: 15px;
  color: white;
`;

const ListsContainer = styled.div`
  flex: 1;
  display: inline-flex;
  padding: 0 15px 15px;
`;

const Board = ({name, children}: {name: string, children: ReactNode}) => {
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