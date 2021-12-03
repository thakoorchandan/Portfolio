import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container>
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={prof.avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">
                Reach Out to me on{" "}
                <a
                  style={{ color: "black" }}
                  href="mailto:thakoorchandan@gmail.com"
                >
                  thakoorchandan@gmail.com
                </a>
                <br />
                <a
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: "2rem",
                  }}
                  href="tel:+919121967673"
                >
                  Contact: +91 9121967673
                </a>
              </h2>
              <p className="lead text-white mt-3">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                ALL
              </p>
              <p className="text-white mt-3">{prof.bio}</p>
              <SocialLinks />
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {prof.location}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
