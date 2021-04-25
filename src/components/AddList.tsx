import styled from "styled-components";
import ListService from "../services/ListService";

const Button = styled.button`
  width: 280px;
  border: none;
  background: #ebecf0;
  border-radius: 3px;
  padding: 15px;
  flex: none;
  
`;

const ButtonWrapper = styled.div`
  margin-left: 15px;
`


function AddList({listService}: {listService: ListService}) {
    return (
       <ButtonWrapper>
           <Button onClick={() => listService.addList()}>Add List +</Button>
       </ButtonWrapper>
    )
}

export default AddList