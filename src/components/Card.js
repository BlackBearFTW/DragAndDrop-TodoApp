import styled from "styled-components";

const CardWrapper = styled.div`
  background: white;
  font-weight: bold;
  margin: 0 5px 5px;
  padding: 10px;
  border-radius: 3px;
  overflow-wrap: break-word;

  & ~ & {
    margin-top: 5px;
  }
`;


const Card = ({text}) => {
    return (
        <CardWrapper>
            {text}
        </CardWrapper>
    )
}

export default Card;