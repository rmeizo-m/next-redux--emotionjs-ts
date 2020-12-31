import React from 'react';
import {useSelector} from 'react-redux';
import styled from '@emotion/styled';
import Head from 'next/head';
import Graph from '../components/Graph/Graph';
import { InformCard } from '../components/InformCard/InformCard';
import {LeftCard} from '../components/LeftCard/LeaftCard'



export default function Home() {
  const store = useSelector((state) => state);

  const inform = store.inform.map((data, index) => {
    return (
      <InformCard 
        key={index} 
        title={data.name} 
        sum={data.sum}
        img={data.url}
        active={data.active}
        subSum= {data.subSum}
        />
    )
  })

  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GeraphGroup>
        <Graph/>
        <Graph/>
      </GeraphGroup>
      <div style={{display:'flex', marginTop: "20px"}}>
       <LeftCard />
        <div style={{display:"flex", flex:"4", flexWrap:"wrap" ,justifyContent:"flex-start"}}>
          {inform}
        </div>
      </div>
      
     
    </>
  )
}

const GeraphGroup = styled("div")`
  display: flex;
  margin-top: 20px;

  :last-child {
    margin-right: 0;
  }
`