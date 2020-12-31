import React from 'react';
import { User } from '../User/User';
import { Search } from '../Search/Search';
import styled from '@emotion/styled';


const Header = () => (
  <header>
    <Wrapper>
      <Search />
      <InnerUser>
        <IconDiv>
          <StatusCircl></StatusCircl>
          <img src="/image/icon/notification_icon.svg" alt=""/>
        </IconDiv>
      <User />
      </InnerUser>
    </Wrapper>
  </header>
)

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const InnerUser = styled("div")`
  display:flex;
  align-items: center
`

const IconDiv = styled("div")`
  position: relative;
  height: 43px;
  width: 43px;
  align-items: center;
  display: flex;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`

const StatusCircl = styled("span")`
  position: absolute;
  top: 13px;
  right: 27px;
  display: block;
  width: 5px;
  height: 5px;
  background-color: #2E71F3;
  -moz-border-radius: 57px;
  border-radius: 57px;
`
export default Header