import styled from "styled-components";
import {ReactNode, useRef, useState} from "react";
import BoardService from "../services/BoardService";
import {DragDropContext, DropResult} from "react-beautiful-dnd";

const BoardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background: #282828;
`;

const Header = styled.h2`
  margin: 0;
  padding: 15px;
  color: white;
`;

const HeaderInput = styled.input`
  margin: 0;
  padding: 0;
  color: white;
  border: none;
  background: transparent;
  font-weight: bold;

  &:focus {
    outline: 0;
  }
`;

const ListsContainer = styled.div`
  flex: 1;
  display: inline-flex;
  padding: 0 15px 15px;
  overflow-x: auto;
`;

const Board = ({name, boardService, children}: { name: string, boardService: BoardService, children: ReactNode }) => {
    const [toggle, setToggle] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCompletion = () => {
        if (inputRef.current!.value.trim() === "") return;
        boardService.changeName(inputRef.current!.value);
        setToggle(false)
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
            handleCompletion();
        }
    }

    const onDragEnd = (result: DropResult) => {

    }


    return (
        <BoardWrapper>
            <Header onDoubleClick={() => setToggle(true)}>
                {(toggle) ? (<HeaderInput type="text" ref={inputRef} defaultValue={name}
                                          onBlur={handleCompletion}
                                          onKeyDown={handleKeyDown}/>) :
                    <>{name}</>
                }
            </Header>
            <ListsContainer>
                <DragDropContext onDragEnd={onDragEnd}>
                {children}
                </DragDropContext>
            </ListsContainer>
        </BoardWrapper>
    )
}

export default Board;