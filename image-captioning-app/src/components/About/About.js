import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import Navbar from "../Navbar/Navbar";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: #f5f7fa;
  margin-top: 5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #555;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 300px;
  transition: transform 0.3s;
  perspective: 1000px;

  &:hover {
    transform: rotateY(10deg) rotateX(10deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 340px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <AboutContainer>
        <Title
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          About Us
        </Title>
        <Subtitle
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          Our Mission and Vision
        </Subtitle>
        <Content>
          <Card data-aos="zoom-in" data-aos-duration="1000">
            <CardImage src="/Images/pic2-Photoroom.jpg" alt="Our Team" />
            <CardTitle>Our Team</CardTitle>
            <CardText>
              We are a group of passionate developers dedicated to making the
              best image captioning application. Our team works tirelessly to
              bring you the latest technology and the most accurate image
              descriptions.
            </CardText>
          </Card>
          <Card data-aos="zoom-in" data-aos-duration="1000">
            <CardImage src="/Images/mission.png" alt="Our Mission" />
            <CardTitle>Our Mission</CardTitle>
            <CardText>
              Our mission is to provide users with a seamless and intuitive
              experience for generating image captions. We strive to
              continuously improve our algorithms and deliver the most reliable
              results.
            </CardText>
          </Card>
          <Card data-aos="zoom-in" data-aos-duration="1000">
            <CardImage src="/Images/Vision.png" alt="Our Vision" />
            <CardTitle>Our Vision</CardTitle>
            <CardText>
              We envision a world where technology bridges the gap between
              imagination and reality. Our vision is to lead the market in image
              captioning and AI technology, making it accessible to everyone.
            </CardText>
          </Card>
        </Content>
      </AboutContainer>
    </>
  );
}
