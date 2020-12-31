import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import { Button } from '../Button/Button';

export const SiteBarRow = () => (
  <Wrapper>
    <CenterDiv>
      <Link  href="/">
        <a><img src='/image/logo.png' /></a>
      </Link>
      <Button type="button" name="CLOSED" />
    </CenterDiv>
  </Wrapper>
)

const Wrapper = styled("div")`
  padding: 28px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
const CenterDiv = styled("div")`
  text-align: center;
  justifyContent: center;
`