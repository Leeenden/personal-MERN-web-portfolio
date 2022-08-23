import React from 'react';
import Main from '../components/Main';
import background from "../images/background.png";

const Home = () => {
  return (
    <>
      <img className="hidden sm:block absolute w-full h-full object-cover" src={background} alt={"night sky background"}/>
      <Main rowID="1" />
      {/* <Row rowID="2" method="Tutorials" />
      <Row rowID="3" method="Course" /> */}

    </>
  )
}

export default Home;