import styled from "styled-components";
import ListService from "../services/ListService";
import {useRef, useState} from "react";
import {BiX} from "react-icons/bi";

const Wrapper = styled.div`
  width: 280px;
  border: none;
  background: #ebecf0;
  color: black;
  border-radius: 3px;
  flex: none;
  align-self: flex-start;
  display: flex;
  
  & > * {
    padding: 15px;
  }

  & > span {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
  
  &:hover > span {
    opacity: 0.8;
  }
  
  * ~ & {
    margin-left: 15px;
  }

`;

const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;

  & > input {
    border: steelblue 2px solid;
    font-family: inherit;
    font-size: inherit;
    color: black;
    display: flex;
    flex: 1;
    background: white;
    padding: 10px;
    border-radius: 3px;
    overflow-wrap: break-word;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }

  & > div {
    margin-top: 10px;
    display: flex;
    align-items: center;

    & > * {
      cursor: pointer;
    }

    & > *:hover {
      opacity: 0.8;
    }

    & > *:first-child {
      border: none;
      background: lightgray;
      padding: 10px;
      border-radius: 0 0 3px 3px;
    }

    & > *:last-child {
      height: auto;
      width: 1.8em;
    }
  }
`;

function AddList({listService}: { listService: ListService }) {
    const [toggle, setToggle] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleCompletion();
        }
    }

    const handleCompletion = () => {
        if (inputRef.current!.value === "") return;
        listService.addList(inputRef.current!.value);
        setToggle(false);
    }

    return (
        <Wrapper onClick={() => {if (!toggle) setToggle(true)}}>
            {(toggle) ? (<MenuWrapper>
                    <input type="text" ref={inputRef} onKeyDown={handleKeyDown} />
                    <div>
                        <button onClick={handleCompletion}>Create List</button>
                        <BiX onClick={() => {setToggle(false)}}/>
                    </div>
                </MenuWrapper>) : <span>Add List +</span>}
        </Wrapper>
    )
}

export default AddList