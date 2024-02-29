import React, { useRef, useContext } from "react";
import LoadingScreen from "../../Components/LoadingScreen";
import FrontPage from "../../Components/FrontPage";
import Navbar from "../../Components/Navbar";
import { PortfolioContext } from "../../Context";
import ActualContent from "../../Components/ActualContent";

const Home = () => {
  const {head} = useContext(PortfolioContext)

  const aboutMeRef = useRef(null);
  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const projectsRef = useRef(null);
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <>
          <LoadingScreen />
          <FrontPage />
          <div className={`${head ? "cont-appear" : "cont-disappear"}`}>
            <Navbar moveToAboutMe={scrollToAboutMe} moveToProjects={scrollToProjects} moveToContact={scrollToContact} />
            <ActualContent ref={{aboutMeRef, projectsRef, contactRef}}/>
          </div>
        </>
    )
}

export default Home;