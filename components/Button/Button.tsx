import styled from '@emotion/styled';
import React from 'react';

export const Button = ({name, text, onClick, type, style}) => {
  switch(name){
    case "SEARCH":
      return <SearchBtn type={type} onClick={onClick}></SearchBtn>
    case "CLOSED":
      return <ClosedBtn type={type} onClick={onClick}></ClosedBtn>
    default:
      return (
      <OtherBtn
          type={type}
          onClick={onClick}
          style={style}
          >
          {text}
        </OtherBtn>  
      )
    }
  }

const SearchBtn = styled("button")`
  position: absolute;
  cursor: pointer;
  left: 18px;
  top: 10px;
  height: 20px;
  width: 20px;
  border: none;
  background: #fff;
  outline: none;
  background-image: url('/image/icon/search.svg');
  background-repeat: no-repeat;
`

const ClosedBtn = styled("button")`
  border: none;
  outline: none;
  background-color: none;
  position:absolute;
  width: 16px;
  height: 16px;
  background-color: #fff;
  cursor: pointer;  
  background-image: url('/image/icon/Icon.svg');
  background-repeat: no-repeat;
`
const OtherBtn = styled("button")`
  display: block;
  padding: 14px 15px;
`