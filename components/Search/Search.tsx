import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Button } from '../Button/Button'


export const Search = () => {
  const [search, setSearch] = useState()

  const searchHeandler = (e) => {
    e.preventDefault()
    console.log(search)
  } 

  return(
    <FormSearch>
      <Button name="SEARCH" type="submit" onClick={searchHeandler}/>
      <InputSearch type="text" placeholder="Поиск клиента"/>
  </FormSearch>
  )
}

const FormSearch = styled("form")`
  display: block;
  width: 500px;
  min-width: 230px;
  height: auto;
  position: relative;
  margin-right: 20px;
`

const InputSearch = styled("input")`
  width: 100%;
  height: 40px;
  padding: 0 40px;
  border-radius: 67px;
  border: none;
`


