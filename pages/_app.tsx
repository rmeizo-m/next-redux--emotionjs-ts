import React from 'react'
import '../styles/globals.css'
import {Provider} from 'react-redux'
import SiteBar from '../components/SiteBar/SiteBar'
import Header from '../components/Header/Header'
import {store} from '../redux/store'

const MyApp = ({ Component, pageProps }) => {
  return (
  <Provider store={store}>
    <>
      <SiteBar />
       <main className="main">
        <Header />
        <Component {...pageProps} />
      </main>  
    </>
  </Provider>
)
}

  export default MyApp