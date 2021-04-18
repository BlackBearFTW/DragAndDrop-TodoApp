import styled from "styled-components";

/*const BoardWrapper = styled.div`
  background: tan;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.h2`
  color: white;
  padding: 15px 80px;
`;*/

const ListsContainer = styled.div`
  flex-direction: row;
  padding: 0 15px 15px;
  height: 100%;
`;


/*  <BoardWrapper>
            {/!* Header *!/}
            <Header>
                {name}
            </Header>


        </BoardWrapper>*/
/* {/* Lists */

const Board = ({name, children}) => {
    return (
    <ListsContainer>
        {children}
    </ListsContainer>
)
}

export default Board;