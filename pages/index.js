import React, { useState } from 'react'
import Head from 'next/head'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useRouteMatch,
//   useParams,
// } from 'react-router-dom'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import ReactFullpage from "@fullpage/react-fullpage";
import Firstpage from './home.js'
import About from './about.js'
import Service from './service.js'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'



function Home() {

  const pluginWrapper = () => {
    // require('../static/fullpage.scrollHorizontally.min.js')
    /*
    * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
    */
  };

  const fullpages = [
    
      { 
        page: <Firstpage /> 
      },
    
    {
      page: <About />
    },
    {
      page: <Service />,
    }
  ]

  function onLeave ( origin, destination, direction ) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };
  
  // // const { fullpages } = pages;

  if (!fullpages.length) {
    return null;
  }

  return (


    <div className="">
        <Head>
            <title>Rada</title>
            <meta name="description" content="Rada" />
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Navbar />     

      <main className={styles.main}>

      <ReactFullpage
          navigation
          pluginWrapper={pluginWrapper}
          onLeave = {onLeave}
          // onLeave={this.onLeave.bind(this)}
          scrollHorizontally = {true}
          // sectionsColor={this.state.sectionsColor}
          render={comp =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                {fullpages.map(({ page }) => (
                  <div key={page} className="section">
                    {page}
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )
          }


        />

          <Firstpage />

          <About />

          <Service />
        
      </main>

      {/* <footer className={styles.footer}>
       
      </footer> */}
    </div>

  )
}

export default Home