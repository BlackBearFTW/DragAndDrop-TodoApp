import styled from "styled-components";

const CardWrapper = styled.div`
  background: white;
  font-weight: bold;
  margin: 15px;
  border-radius: 15px;
`;


const Card = ({text}) => {
    return (
        <CardWrapper>
            {text}
        </CardWrapper>
    )
}

export default Card;