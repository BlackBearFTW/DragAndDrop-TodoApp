import styled from "styled-components";
import ListService from "../services/ListService";

const Button = styled.button`
  width: 280px;
  border: none;
  background: #ebecf0;
  border-radius: 3px;
  flex: none;
  align-self: flex-start;
  padding: 15px;
  
  * ~ & {
    margin-left: 15px;
  }
`;



function AddList({listService}: {listService: ListService}) {
    return (
           <Button onClick={() => listService.addList()}>Add List +</Button>
    )
}

export default AddList