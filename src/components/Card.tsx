import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {BiTrash} from "react-icons/bi";
import CardService from "../services/CardService";
import ICard from "../interfaces/ICard";
import {Draggable} from "react-beautiful-dnd";

const CardWrapper = styled.div`
  background: white;
  margin: 0 5px 5px;
  padding: 10px;
  border-radius: 3px;
  overflow-wrap: break-word;
  color: black;

  & ~ & {
    margin-top: 5px;
  }

  &:hover > * div:last-of-type {
    color: black;
    transition: all 500ms;

  }
`;

const TextArea = styled.textarea`
  font-family: inherit;
  font-size: inherit;
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
    cursor: pointer;
  }

`;


const Card = ({data, cardService, index}: { data: ICard, cardService: CardService, index: number }) => {
    const [toggle, setToggle] = useState((data.value === ""))
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
        if (textAreaRef.current!.value.trim() === "") return cardService.deleteCard(data);

        setToggle(false);
        data.value = textAreaRef.current!.value;
        cardService.updateCard(data);
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            handleCompletion();
        }
    }

    return (
        <Draggable draggableId={data.id} index={index}>
            {provided => (
                <CardWrapper
                    onDoubleClick={() => setToggle(true)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {(toggle) ?
                        (<TextArea autoFocus={true} ref={textAreaRef} defaultValue={data.value}
                                   onChange={changeTextAreaHeight}
                                   onKeyDown={handleKeyDown}
                                   onBlur={handleCompletion}
                            />
                        ) : <ContentWrapper>
                            <div>{data.value}</div>
                            <div onClick={() => cardService.deleteCard(data)}><BiTrash/></div>
                        </ContentWrapper>}
                </CardWrapper>
            )}
        </Draggable>
    )
}

export default Card;