import styled from "styled-components";

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


function AddList({handle}: {handle: Function}) {
    return (
       <ButtonWrapper>
           <Button onClick={() => handle()}>Add List +</Button>
       </ButtonWrapper>
    )
}

export default AddList