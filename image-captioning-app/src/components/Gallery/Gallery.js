import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #fff;
  border: 2px solid #6b00b6;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

const GalleryTitle = styled.h2`
  margin: 0 0 1rem;
  color: #6b00b6;
`;

const GalleryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const GalleryItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid linear-gradient(145deg, #ff007f, #ff00ff);
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GalleryImage = styled.img`
  max-width: 100px;
  height: 100px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const GalleryCaption = styled.p`
  margin-left: 1rem;
  flex: 1;
  text-align: left;
`;

const Gallery = ({ gallery }) => {
  return (
    <GalleryContainer>
      <GalleryTitle>Gallery</GalleryTitle>
      <h1>hellllllllllllllllllllllllll</h1>
      <GalleryList>
        {gallery.map((item, index) => (
          <GalleryItem key={index}>
            <GalleryImage src={item.src} alt={`Gallery Image ${index + 1}`} />
            <GalleryCaption>{item.caption}</GalleryCaption>
          </GalleryItem>
        ))}
      </GalleryList>
    </GalleryContainer>
  );
};

export default Gallery;
