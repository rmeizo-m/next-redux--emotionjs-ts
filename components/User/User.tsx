import React from 'react';
import styled from "@emotion/styled";

export const User = () => {
  return (
  <>
    <SpanName >Alexander Gerasimuk</SpanName>
    <ImgUser src='/image/user.png' alt="alt"/>
  </>
  )
}

const SpanName = styled("span")`
  margin: 0 10px;
`
const ImgUser = styled("img")`
  width:43px;
  height: 43px;
  border-radius: 67px;
`