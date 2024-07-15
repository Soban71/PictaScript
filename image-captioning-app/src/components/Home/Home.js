import React, { useEffect } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import AOS from "aos";

const myStyle = {
  backgroundImage: "url('/Images/background.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100vh",
  width: "100vw", // Ensure full viewport width
  color: "white",
};

const HeroSection = styled.section`
  width: 60%; // Ensure full viewport width
  height: 100vh; // Full viewport height
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%; // Adjust padding if necessary
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  transform-style: preserve-3d;
  perspective: 1000px;
  max-width: 400px; /* Set a max width for the card */
  margin-left: 2rem; /* Adjust margin to create space from the left edge */
`;

const CardHeader = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;
  transform: translateZ(30px);
`;

const HeroButton = styled.button`
  padding: 0.85rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: linear-gradient(145deg, #ff007f, #ff00ff);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(10px);

  &:hover {
    transform: translateY(-5px) translateZ(10px);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0) translateZ(10px);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }

  i {
    margin-left: 0.5rem;
  }
`;

function Hero() {
  useEffect(() => {
    AOS.init({ once: false }); // Initialize AOS with once: false to allow repeated animations
    AOS.refresh(); // Refresh AOS to reset animations
  }, []);

  return (
    <HeroSection style={myStyle}>
      <Card
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <CardHeader>Discover the Future of Image Captioning</CardHeader>
        <HeroButton type="button">
          Get Started <i className="fa-sharp fa-solid fa-arrow-right"></i>
        </HeroButton>
      </Card>
    </HeroSection>
  );
}

export default Hero;
