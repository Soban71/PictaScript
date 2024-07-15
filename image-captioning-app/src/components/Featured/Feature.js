import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const FeatureSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  background-color: #f0f0f0;
  margin: 50px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeatureTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureText = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
`;

const PlaceholderVideo = styled.video`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Feature = () => {
  return (
    <FeatureSection>
      <Content data-aos="fade-right">
        <FeatureTitle>Discover the Future of Image Captioning</FeatureTitle>
        <FeatureText>
          Our application allows you to generate detailed descriptions for your
          images with just a click. Experience the next generation of image
          captioning technology.
        </FeatureText>
      </Content>
      <VideoContainer data-aos="fade-left">
        <PlaceholderVideo controls>
          <source src="Images/VideoFeature.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </PlaceholderVideo>
      </VideoContainer>
    </FeatureSection>
  );
};

export default Feature;
