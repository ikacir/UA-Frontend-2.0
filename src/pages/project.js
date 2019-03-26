import React, { Component } from "react";

import styled from "styled-components";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import Button from "react-bootstrap/Button";

import ProgressBar from "../components/ProjectStyles/ProgressBar";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
const Sidebar = styled.div`
  background: #ddd;
  text-align: left;

  ul {
    list-style: none;
  }
`;
const PageContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: minmax(100px, auto);
  justify-items: stretch;
  align-items: stretch;

  background: #eee;
  padding: 1em;
`;
const Title = styled.div`
  border: solid 1px #ccc;
  grid-column: 0/3;
  grid-row: 0/3;
`;
const Image = styled.div`
  // width: 100px;
  // height: 100px;
  border: 1px solid #000;
  // float: left;
  // align-self: start;
  grid-column: 0/3;
  grid-row: 2/3;
`;
const About = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;

  border: 1px solid #ddd;
  background: white;
  padding: 2%;

  text-align: left;

  h3 {
    text-decoration: underline;
  }
`;
const ProjectProgress = styled.div`
  border: 1px solid #ddd;
  background: white;
  padding: 2%;

  grid-column: 1/3;

  h3 {
    text-decoration: underline;
  }
`;

class Project extends Component {
  state = {
    progress: 24
  };

  render() {
    return (
      <div>
        <div>
          <h1> </h1>
          <Wrapper>
            <Sidebar>
              <h4>UA Projects</h4>
              <ul>
                <li>63rd Street Project</li>
                <li>Project Name</li>
                <li>Project Name</li>
              </ul>

              <h4>My Projects</h4>
              <ul>
                <li>63rd Street Project</li>
                <li>Project Name</li>
                <li>Project Name</li>
              </ul>
            </Sidebar>
            <PageContent>
              <Title>
                <h2>63rd Street Project</h2>
              </Title>

              <About>
                <h3>About</h3>
                <p>Project Start Date: {}</p>
                <p>Project Type: {}</p>
                <p>Skills used: {}</p>
                <p>Resources Needed: {}</p>
              </About>
              <Image>
                <img src="" alt="" />
              </Image>
              <ProjectProgress>
                <h3>Project Progress</h3>
                <p>Start Date: {}</p>
                <p>End Date: {}</p>
                <ProgressBar completed={this.state.progress} />
                {this.state.progress} %
              </ProjectProgress>
            </PageContent>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default Project;
