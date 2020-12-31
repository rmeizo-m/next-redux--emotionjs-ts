import styled from '@emotion/styled';
import React from 'react';

export const InformCard = ({title, sum, img, active, subSum}) => {;


  switch(active){
    case "ACTIVE": {
      return(
        <Wrapper>
        <Img src={img}/>
        <div>
          <Span>{title}:</Span>
          <Sum>{sum}</Sum>
        </div>
      </Wrapper>
      )
    }
    default: {
      return (
        <WrapperDefault>
          <Img src={img} />
          <P>{title}</P>
        </WrapperDefault>
      )
    }
  }
}

const Img = styled("img")`
  margin-right: 20px;
`

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 270px;
  max-width: 277px;
  height: 105px;
  padding: 24px 27px;
  margin-right: 20px;
  background-color: #fff;
  margin-right: 10px;
`

const Span = styled("span")`
  font-size: 13px;
  line-height: 19px;
  color: #000000;
  opacity: 0.5;
`

const Sum = styled("div")`
  font-size: 26px;
  line-height: 38px;
  color: #000000;
`
const WrapperDefault = styled("div")`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 270px;
  max-width: 277px;
  height: 105px;
  padding: 24px 27px;
  margin-right: 20px;
  background-color: #2E71F3;
`
const SubSumm = styled("span")`
  font-size: 18px;
  line-height: 38px;
  color: #000000;
`

const P = styled("p")`
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;

  color: #FFFFFF;
`
