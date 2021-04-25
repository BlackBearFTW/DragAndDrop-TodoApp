import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {BiTrash} from "react-icons/bi";
import CardService from "../services/CardService";

const CardWrapper = styled.div`
  background: white;
  margin: 0 5px 5px;
  padding: 10px;
  border-radius: 3px;
  overflow-wrap: break-word;

  & ~ & {
    margin-top: 5px;
  }

  &:hover > * div:last-of-type {
    color: darkgray;
    transition: all 500ms;

  }
`;

const TextArea = styled.textarea`
  border: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 15px;
  display: block;
  overflow: hidden;
  resize: none;

  &:focus {
    outline: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  & > *:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px 0 15px;
    color: white;
  }
  
`;


const Card = ({id, list_id, text, handle}: { id: string, list_id: string, text: string, handle: Function }) => {
    const [toggle, setToggle] = useState(true)
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const cardService = new CardService();

    cardService.addCard();

    useEffect(() => {
        if (!toggle) return;
        changeTextAreaHeight();
    }, [toggle]);

    const changeTextAreaHeight = () => {
        const target = textAreaRef.current!;

        target.style.height = 'auto';
        target.style.height = target?.scrollHeight + 'px';

    }

    const handleCompletion = () => {
        if (textAreaRef.current!.value.trim() === "") return handle("delete", list_id, id);

        setToggle(false);

        // calls handleCard in App.tsx
        handle("update", list_id, id, textAreaRef.current!.value);
    }

    const handleDragStart = (event: any) => {
        event.dataTransfer.setData("card_info", JSON.stringify({
            id,
            list_id,
            text
        }));


    }

    const handleDrop = () => {
        handle("delete", list_id, id);
    }

    return (
        <CardWrapper onDoubleClick={() => setToggle(true)} onDragOver={event => event.stopPropagation()} draggable={true} onDragStart={handleDragStart} onDrop={handleDrop}>
            {(toggle) ?
                (<TextArea autoFocus ref={textAreaRef} defaultValue={text}
                           onChange={() => {
                               changeTextAreaHeight();
                           }}

                           onKeyDown={(event) => {
                               if (event.key === 'Enter' || event.key === 'Escape') {
                                   handleCompletion();
                               }
                           }}

                           onBlur={() => {
                               handleCompletion();
                           }}
                    />
                ) : <ContentWrapper>
                    <div>{text}</div>
                    <div onClick={() => handle("delete", list_id, id)}><BiTrash/></div>
            </ContentWrapper>}
        </CardWrapper>
    )
}

export default Card;