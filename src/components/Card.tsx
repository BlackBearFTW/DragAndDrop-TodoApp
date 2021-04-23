import styled from "styled-components";
import {useState, useEffect, useRef} from "react";

const CardWrapper = styled.div`
  background: white;
  margin: 0 5px 5px;
  padding: 10px;
  border-radius: 3px;
  overflow-wrap: break-word;

  & ~ & {
    margin-top: 5px;
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


const Card = ({id, list, text, handle}: {id: string, list: string, text: string, handle: Function}) => {
    const [toggle, setToggle] = useState(true)
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      if (!toggle) return;
        changeTextAreaHeight();
    }, [toggle]);

    const changeTextAreaHeight = () => {
        const target = textAreaRef.current!;

        if (target?.value === "") return;

        target.style.height = 'auto';
        target.style.height = target?.scrollHeight + 'px';

    }

    const handleCompletion = () => {
        if (textAreaRef.current!.value.trim() === "") return handle("delete", list, id);

        setToggle(false);

        // calls handleCard in App.tsx
        handle("update", list, id, textAreaRef.current!.value);
    }

    return (
        <CardWrapper onDoubleClick={() => setToggle(true)}>
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
                ):  <>{text}</> }
        </CardWrapper>
    )
}

export default Card;