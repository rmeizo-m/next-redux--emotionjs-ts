import styled from '@emotion/styled';
import React from 'react';

export const LeftCard = () => {
  return(
    <Wrapper>
      <Flex>
        <Img src="/image/iconCard/ic24-users.png" alt=""/>
        <div>
          <Span>Количество учеников:</Span>
          <DivSum>250</DivSum>
        </div>
      </Flex>
        
        <InfoGroup>
          <DivBotton>
            <SpanTitle>Без абонемента ........................</SpanTitle>
            <SpanSumSub>150</SpanSumSub>
          </DivBotton>
          <DivBotton>
            <SpanTitle>Неактивные ...............................</SpanTitle>
            <SpanSumSub>25</SpanSumSub>
          </DivBotton>
          <DivBotton>
            <SpanTitle>Добавлено за неделю ...............</SpanTitle>
            <SpanSumSub>50</SpanSumSub>
          </DivBotton>
          <DivBotton>
            <SpanTitle>За последнюю неделю .............</SpanTitle>
            <SpanSumSub>25</SpanSumSub>
          </DivBotton>
      </InfoGroup>
    </Wrapper>
  )
}

const Wrapper = styled("div")`
  display: block;
  flex: 1;
  padding: 20px;
  height: 230px;
  background-color: #fff; 
  margin-right: 20px;
  min-width: 277px;
  width: 273px; 
`
const Flex = styled("div")`
  display: flex;
  align-items: center;
`
const Img = styled("img")`
  width:34px;
  height: 34px;
  margin-right: 10px;
`
const Span = styled("span")`
  font-size: 13px;
  line-height: 19px;
  color: #000000;
  opacity: 0.5;
`
const DivSum = styled("div")`
  font-size: 26px;
  line-height: 38px;

  color: #000000;
`

const InfoGroup = styled("div")`
 margin-top: 10px;
`

const SpanTitle = styled("span")`
  font-size: 13px;
  line-height: 19px;
  color: #000000;
  opacity: 0.5;
`

const DivBotton = styled('div')`
margin-bottom: 10px;
`
const SpanSumSub = styled("span")`
  font-size: 13px;
  line-height: 100%;
  color: #000000;
`