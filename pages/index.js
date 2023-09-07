import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { useRef } from "react";
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import React, { useState, useEffect } from "react";
import { greetings } from "../portfolio";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function Home({ githubProfileData }) {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");

  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  });
  const home = useRef(null);
  const skills = useRef(null);
  const education = useRef(null);
  const experience = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const homeScroll = () => {
    scrollToRef(home);
  };

  const skillScroll = () => {
    scrollToRef(skills);
  };

  const educationScroll = () => {
    scrollToRef(education);
  };

  const experienceScroll = () => {
    scrollToRef(experience);
  };

  const projectScroll = () => {
    scrollToRef(project);
  };

  const contactScroll = () => {
    scrollToRef(contact);
  };

  return (
    <div>
      <SEO
        data={{
          title: "Thakoor Chandan",
          description:
            "A passionate Full Stack Web Developer and Mobile App Developer.",
          image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
          url: "https://developer-portfolio-1hanzla100.vercel.app",
          keywords: [
            "Thakoor",
            "Thakoor Chandan",
            "@thakoorchandan",
            "thakoorchandan",
            "Portfolio",
            "Thakoor Chandan Portfolio ",
            "Thakoor Chandan Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "mobile app developer",
            "android developer",
            "django",
            "flask",
            "django rest framework",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "contextapi",
            "redux",
            "flutter",
          ],
        }}
      />

      <header className="header-global">
        <div ref={home}>
          <Navbar
            ref={home}
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand href="/" className="mr-lg-5">
                <h2 className="text-white" id="nav-title">
                  {greetings.name}
                </h2>
              </NavbarBrand>
              <button
                className="navbar-toggler"
                aria-label="navbar_toggle"
                id="navbar_global"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <h3 className="text-black" id="nav-title">
                        {greetings.name}
                      </h3>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <Button onClick={homeScroll}>Home</Button>
                  </NavItem>
                  <NavItem>
                    <Button onClick={skillScroll}>Skills</Button>
                  </NavItem>
                  <NavItem>
                    <Button onClick={educationScroll}>Education</Button>
                  </NavItem>
                  <NavItem>
                    <Button onClick={experienceScroll}>Experience</Button>
                  </NavItem>
                  <NavItem>
                    <Button onClick={projectScroll}>Projects</Button>
                  </NavItem>
                  <NavItem>
                    <Button onClick={contactScroll}>Contact</Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </div>
      </header>
      <div>
        <Greetings prof={githubProfileData} />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <div ref={education}>
        <Proficiency />
      </div>
      <div ref={education}>
        <Education />
      </div>
      <div ref={experience}>
        <Experience />
      </div>
      <div ref={project}>
        <Projects />
      </div>
      <div ref={contact}>
        <GithubProfileCard prof={githubProfileData} />
      </div>
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
