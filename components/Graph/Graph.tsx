import styled from '@emotion/styled';
import React from 'react';
import { Button } from '../Button/Button';
import { GraphCard } from './components/GraphCard';

const Graph = () => (
  <Wrapper>
    <Flex>
      <Button text="День" /> 
      <Button text="Неделя" style={{marginLeft: "10px"}}/>
      <Button text="Месяц" style={{marginLeft: "10px"}} />
    </Flex>
    <GraphCard />
  </Wrapper>
)
const Wrapper = styled("div")`
  flex: 1;
  margin-right: 20px;
`

const Flex = styled("div")`
  display: flex;
`

export default Graph

