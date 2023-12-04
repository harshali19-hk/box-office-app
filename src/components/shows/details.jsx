import styled from "styled-components";

const Details = ({status,premiered,network})=>{
    return <>
    <DetailsWrapper>
        <p>status : {status}</p>
        <p>premiered : {premiered} {!!network && `On ${network.name}`}</p>
    </DetailsWrapper>
 </>
}

export default Details

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;