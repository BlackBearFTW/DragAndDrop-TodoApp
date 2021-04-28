import styled from "styled-components";
import {ReactNode, useRef, useState} from "react";
import BoardService from "../services/BoardService";
import IBoard from "../interfaces/IBoard";

const BoardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const Header = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  
  & > * {
    margin: 0;
    padding: 15px;
    cursor: pointer;
  }
  
  & > input[type="color"] {
    border-radius: 100%;
    height: 30px;
    width: 30px;
    border: none;
    padding: 2px;
    margin: 15px;
  
    &::-webkit-color-swatch-wrapper {
      padding: 0px;
      border-radius: 100%;
    }

    &::-webkit-color-swatch {
      padding: 0px;
      border-radius: 100%;
    }
  }
  
`;



const HeaderInput = styled.input`
  margin: 0;
  padding: 15px;
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

const Board = ({data, boardService, children}: { data: IBoard, boardService: BoardService, children: ReactNode }) => {
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

    return (
        <BoardWrapper style={{background: data.bg_color, color: "#ffffff"}} >
            <Header>
                {(toggle) ? (<HeaderInput type="text" ref={inputRef} defaultValue={data.name}
                                          onBlur={handleCompletion}
                                          onKeyDown={handleKeyDown}/>) :
                    <h2 onDoubleClick={() => setToggle(true)}>{data.name}</h2>
                }
                <input type="color" value={data.bg_color} onChange={(event) => boardService.changeColor(event.target.value)}/>
            </Header>
            <ListsContainer>
                {children}
            </ListsContainer>
        </BoardWrapper>
    )
}

export default Board;