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


const Card = ({text = ""}) => {
    const [toggle, setToggle] = useState(true)
    const [cardText, setCardText] = useState(text);
    const textAreaRef = useRef();

    useEffect(() => {
      if (toggle) return;
        changeTextAreaHeight(textAreaRef.current);
    }, [toggle]);

    const changeTextAreaHeight = () => {
        const target = textAreaRef.current;

        if (target?.value === "") return;

        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';

    }

    return (
        <CardWrapper onDoubleClick={() => setToggle(false)}>
            {(toggle) ?
                <>{cardText}</> :
                (<TextArea value={cardText} ref={textAreaRef}
                           onChange={() => {
                               setCardText(textAreaRef.current.value);
                               changeTextAreaHeight();
                           }}

                           onKeyDown={(event) => {
                               if ((event.key === 'Enter' && !event.shiftKey) || event.key === 'Escape') {
                                   setToggle(true);
                               }
                           }}

                           onBlur={() => {
                               setToggle(true);
                           }}
                    />
                )}
        </CardWrapper>
    )
}

export default Card;