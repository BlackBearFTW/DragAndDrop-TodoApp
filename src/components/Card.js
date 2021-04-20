import styled from "styled-components";
import {useState} from "react";

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
  resize: none;
  border: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 15px;
  
  &:focus {
    outline: 0;
  }
`;


const Card = () => {
    const [toggle, setToggle] = useState(true)
    const [cardText, setCardText] = useState('test')

    const stopEdit = () => {
        setToggle(true)
    }

    const changeTextAreaHeight = (target) => {
        if (target.value === "") return;
        console.log(target.value.split("\n").length);
        console.log(target.value.split(/\r?\n|\r/).length);
    }

    return (
        <CardWrapper onDoubleClick={() => setToggle(false)}>
            {(toggle) ?
                <>{cardText}</> :
                (<TextArea value={cardText} rows="5"
                           onChange={(event) => {
                               setCardText(event.target.value);
                               changeTextAreaHeight(event.target);
                           }}
                           onKeyDown={(event) => {
                               if ((event.key === 'Enter' && !event.shiftKey) || event.key === 'Escape') {
                                   stopEdit();
                               }
                           }}

                           onBlur={(event) => {
                            stopEdit();
                           }}
                    />
                )}
        </CardWrapper>
    )
}

export default Card;