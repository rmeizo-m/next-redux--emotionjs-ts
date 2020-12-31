import styled from '@emotion/styled'
import React from 'react'
import { Svg } from '../../SVG/Svg'

export const GraphCard = () => {
  return (
    <Wrapper>
      <Flex>
        <div>
          <Span>Выручка:</Span>
          <Sum>19 000</Sum>
        </div>
        <Img src="/image/yandexCassa.png" alt="kassa" />
      </Flex>
      <Svg />
    </Wrapper>
  )
}

const Wrapper = styled("div")`
  background-color: #fff;
  width: 100%;
  padding: 20px;
  margin-top: 10px;
`
const Flex = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const Img = styled("img")`
  width: 120px;
  height: 32px;
`