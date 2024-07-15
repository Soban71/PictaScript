import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

const FooterContainer = styled.footer`
  background-color: #2d2d2d;
  color: #fff;
  padding: 50px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 20px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #fff;
  }

  p,
  ul {
    font-size: 1rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #ff007f;
      }
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover {
      color: #ff007f;
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
    font-size: 1rem;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
  }

  button {
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    background: linear-gradient(145deg, #ff007f, #ff00ff);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSection>
        <h3>About Us</h3>
        <p>
          We are a group of passionate developers dedicated to making the best
          image captioning application. Our mission is to provide users with a
          seamless and intuitive experience for generating image captions.
        </p>
      </FooterSection>

      <FooterSection>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </FooterSection>

      <FooterSection>
        <h3>Follow Us</h3>
        <SocialMedia>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </SocialMedia>
      </FooterSection>

      <FooterSection>
        <h3>Newsletter</h3>
        <NewsletterForm>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </NewsletterForm>
      </FooterSection>
    </FooterContainer>
  );
}
