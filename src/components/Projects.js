import { Container, TabContent, Tab, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import Nav from "react-bootstrap/Nav";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Developmenet",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Developmenet",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Developmenet",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Developmenet",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Developmenet",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Developmenet",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="projects" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" disabled>
                    Tab three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren Input</Tab.Pane>
                <Tab.Pane eventKey="third">Loren Input</Tab.Pane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="nackground-image-right" src={colorSharp2} />
    </section>
  );
};
