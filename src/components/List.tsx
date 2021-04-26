import styled from "styled-components";
import {ReactNode, useRef, useState} from "react";
import ListService from "../services/ListService";
import CardService from "../services/CardService";

const ListStyle = styled.div`
  min-width: 280px;
  max-width: 280px;
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

const HeaderInput = styled.input`
  margin: 0;
  padding: 0;
  font-weight: bold;
  border: none;
  background: transparent;

  &:focus {
    outline: 0;
  }
`

const Button = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  border: none;
  background: lightgray;
  padding: 15px;
`;

const List = ({id, name, children, cardService, listService}: {id: string, name: string, children: ReactNode, cardService: CardService, listService: ListService}) => {
    const [toggle, setToggle] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCompletion = () => {
        if (inputRef.current!.value.trim() === "") return;

        // calls updateList in ListService.tsx
       listService.updateList({
           id,
           name: inputRef.current!.value,
       });

        setToggle(true);
    }

    const cardDropHandler = (event: any) => {
       event.preventDefault();
      // const card_info = JSON.parse(event.dataTransfer.getData("card_info"));

        throw new Error("Function not implemented.");

       //handleCard("drag", id, card_info.id, card_info.text, card_info.list_id);
    }

    return (
        <ListStyle onDragOver={event => event.preventDefault()} onDrop={cardDropHandler}>
            <Header onDoubleClick={() => setToggle(false)}>
                {(toggle) ? <>{name}</> :
                (<HeaderInput type="text" ref={inputRef} defaultValue={name}
                              onBlur={() => {
                                  handleCompletion()
                              }}

                              onKeyDown={(event) => {
                                  if (event.key === 'Enter' || event.key === 'Escape') {
                                      handleCompletion();
                                  }
                              }}
                />)}
            </Header>
            <CardWrapper>
                {children}
            </CardWrapper>
            <Button onClick={()=> cardService.addCard(id)}>Add Card +</Button>
        </ListStyle>
    )
}

export default List;