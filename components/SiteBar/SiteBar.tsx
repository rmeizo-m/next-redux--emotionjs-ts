import React from 'react';
import {useSelector} from 'react-redux';
import Link from 'next/link';
import styled from '@emotion/styled';

import { SiteBarRow } from './SiteBarRow';

const SiteBar = () => {
  const stores = useSelector(state => state)

  const link = stores.sitebar.map((store, index) => {
    return (
      <li key={index}>
        <Link href={store.url}>
          <a className="link">
            <Icon src={store.img} alt=""/>{store.name}
          </a>
        </Link>
      </li>
    )
  })

  return (
    <LeftBar>
      <SiteBarRow />
      <Menu>
        <ul>
         {link}
        </ul>
      </Menu>
   </LeftBar>
  )
}

const LeftBar = styled("aside")`
  position: fixed;
  bottom: 0;
  top: 0;
  width: 210px;
  background: #ffffff;
  z-index: 99;
`

const Menu = styled("div")``

const Icon = styled("img")`
  width: 16px;
  height: 16px;
  margin-right: 5px
`

export default SiteBar;