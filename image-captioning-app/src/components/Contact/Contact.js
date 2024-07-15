// Contact.js

import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  margin-top: 40px;
`;

const FormContainer = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 400px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #6b00b6;
    box-shadow: 0 0 5px rgba(107, 0, 182, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #6b00b6;
    box-shadow: 0 0 5px rgba(107, 0, 182, 0.5);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #6b00b6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8f00ff;
  }
`;

const SuccessMessage = styled.p`
  color: #4caf50;
  margin-top: 1rem;
`;

const ErrorMessage = styled.p`
  color: #f44336;
  margin-top: 1rem;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // You can add additional validation logic for email format if needed

    // Simulate a server request (replace with actual backend call)
    try {
      // Mocking API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            message,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setSuccessMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <Title>Contact Us</Title>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <InputField
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <InputField
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextArea
            rows="5"
            placeholder="Your Suggestion about application"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
      </Container>
    </>
  );
};

export default Contact;
