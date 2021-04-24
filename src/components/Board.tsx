import styled from "styled-components";
import {ReactNode, useRef, useState} from "react";

const BoardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background: #ddaf6f;
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

const Board = ({name, handle, children}: { name: string, handle: Function, children: ReactNode }) => {
    const [toggle, setToggle] = useState(true)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCompletion = () => {
        if (inputRef.current!.value.trim() === "") return;

        // calls handleBoard in App.tsx
        handle(inputRef.current!.value);
        setToggle(true)
    }

    return (
        <BoardWrapper>
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
            <ListsContainer>
                {children}
            </ListsContainer>
        </BoardWrapper>
    )
}

export default Board;