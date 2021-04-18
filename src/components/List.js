import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: lightgrey;
  height: 100%;
  overflow: auto;
  max-width: 250px;

  & ~ & {
    margin-left: 15px;
  }
`;

const List = ({name, children}) => {
    return (
        <ListWrapper>
            <h4>{name}</h4>
            {children}
            <button>Add Card +</button>
        </ListWrapper>
    )
}

export default List;