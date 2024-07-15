import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { DNA } from "react-loader-spinner";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import Modal from "react-modal";
import Navbar from "../Navbar/Navbar";
import Header from "../Home/Home";
import Footer from "../Footer/Footer";
import Feature from "../Featured/Feature";

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  margin: 1rem 0;
  font-family: "Montserrat", sans-serif;
  color: linear-gradient(145deg, #ff007f, #ff00ff);
  text-transform: uppercase; /* Apply uppercase transformation */
  letter-spacing: 0.2rem;
`;

const InputContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin: 1rem 0;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(145deg, #ff007f, #ff00ff);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

const CaptionContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background: #fff;
  border: 2px solid #6b00b6;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const GalleryContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #fff;
  border: 2px solid #6b00b6;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
`;

const GalleryTitle = styled.h2`
  margin: 0 0 1rem;
  color: #6b00b6;
  font-size: 2.5rem;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;
`;

const GalleryItem = styled.div`
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
  width: 100px;
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

const CropButton = styled(Button)`
  width: 100%;
  max-width: 400px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const CropContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: #333;
  border-radius: 10px;
  overflow: hidden;
`;

const OkButton = styled(Button)`
  margin-top: 1rem;
  width: auto;
`;

function App() {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImageUrl("");
    setCroppedImage(null);
    setCaption("");
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setImageFile(null);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const cropImage = async () => {
    try {
      const croppedImg = await getCroppedImg(
        URL.createObjectURL(imageFile),
        croppedAreaPixels
      );
      setCroppedImage(croppedImg);
      setIsModalOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const generateCaption = async () => {
    setLoading(true);
    setCaption("");

    const formData = new FormData();
    if (croppedImage) {
      formData.append("image", croppedImage);
    } else if (imageFile) {
      formData.append("image", imageFile);
    } else if (imageUrl) {
      formData.append("image_url", imageUrl);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/generate-caption",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setCaption(response.data.caption);
      setLoading(false);

      const imageSrc = croppedImage
        ? URL.createObjectURL(croppedImage)
        : imageFile
        ? URL.createObjectURL(imageFile)
        : imageUrl;

      setGallery((prevGallery) => [
        ...prevGallery,
        { src: imageSrc, caption: response.data.caption },
      ]);
    } catch (error) {
      console.error("Error generating caption:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Feature />

      <AppContainer className="App">
        <Title className="Service">Image Captioning Application</Title>
        <InputContainer>
          <Input type="file" onChange={handleImageUpload} />
          <Input
            type="text"
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
          <Button onClick={generateCaption}>Generate Caption</Button>
        </InputContainer>

        {imageFile && (
          <CropButton onClick={() => setIsModalOpen(true)}>
            Crop Image
          </CropButton>
        )}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          ariaHideApp={false}
        >
          <ModalContent>
            <CropContainer>
              {imageFile && (
                <Cropper
                  image={URL.createObjectURL(imageFile)}
                  crop={crop}
                  zoom={zoom}
                  aspect={4 / 3}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              )}
            </CropContainer>
            <OkButton onClick={cropImage}>OK</OkButton>
          </ModalContent>
        </Modal>

        {croppedImage && (
          <ImageContainer>
            <Image
              src={URL.createObjectURL(croppedImage)}
              alt="Cropped Image"
            />
          </ImageContainer>
        )}

        {loading && (
          <LoaderContainer>
            <DNA height="120" width="100" radius={1} color="#6b00b6" />
          </LoaderContainer>
        )}

        {caption && (
          <CaptionContainer>
            <p>
              {gallery.length > 0
                ? gallery[gallery.length - 1].caption
                : caption}
            </p>
          </CaptionContainer>
        )}

        <GalleryContainer>
          <GalleryTitle>Gallery</GalleryTitle>
          {gallery.map((item, index) => (
            <GalleryItem key={index}>
              <GalleryImage src={item.src} alt={`Gallery Image ${index + 1}`} />
              <GalleryCaption>{item.caption}</GalleryCaption>
            </GalleryItem>
          ))}
        </GalleryContainer>
      </AppContainer>

      <Footer />
    </div>
  );
}

export default App;
