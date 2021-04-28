import styled from "styled-components";
import {ReactNode, useRef, useState} from "react";
import ListService from "../services/ListService";
import CardService from "../services/CardService";
import IList from "../interfaces/IList";
import {BiTrash} from "react-icons/bi";

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

  &:hover > * div:last-of-type {
    color: black;
    transition: all 500ms;
    opacity: 1;
  }
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

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  & > *:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px 0 15px;
    color: #ebecf0;
    opacity: 0;
  }
  
`;

const List = ({
                  data,
                  children,
                  cardService,
                  listService
              }: { data: IList, children: ReactNode, cardService: CardService, listService: ListService }) => {
    const [toggle, setToggle] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCompletion = () => {
        if (inputRef.current!.value.trim() === "") return;

        data.name = inputRef.current!.value;
        listService.updateList(data);

        setToggle(false);
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            handleCompletion();
        }
    }

    const handleDeleteClick = () => {
        listService.deleteList(data);
        cardService.deleteCardByList(data.id);
    }

    return (
        <ListStyle>
            <Header onDoubleClick={() => setToggle(true)}>
                {(toggle) ? (<HeaderInput type="text" ref={inputRef} defaultValue={data.name}
                                          onBlur={handleCompletion}
                                          onKeyDown={handleKeyDown}/>) :
                    <ContentWrapper>
                        <div>{data.name}</div>
                        <div onClick={handleDeleteClick}><BiTrash/></div>
                    </ContentWrapper>}
            </Header>
            <CardWrapper>
                {children}
            </CardWrapper>
            <Button onClick={() => cardService.addCard(data.id)}>Add Card +</Button>
        </ListStyle>
    )
}

export default List;