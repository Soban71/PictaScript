**PictaScript**

PictaScript is an innovative image captioning application that allows users to upload images or provide an image URL to receive descriptive captions. The application utilizes advanced algorithms to analyze images and generate accurate and meaningful captions. PictaScript is built using React, styled-components, axios, and react-easy-crop for the frontend and Flask for the backend to provide a seamless and intuitive user experience1.

**Features**

**Image Upload:**  Users can upload images from their local device.

**Image URL Upload:**  Users can provide an online link to an image.

**Caption Generation:**  The app generates descriptive captions for the uploaded images.

**Image Cropping: ** Users can crop images before generating captions.

**Gallery Display:**  All uploaded images and their captions are displayed in a gallery format.

**Responsive Design:**  The app is designed to work seamlessly on both desktop and mobile devices

**Usage**

**Upload an Image:**

Click on the "Upload Image" button.

Select an image from your local device.

**Provide an Image URL:**

Enter the URL of an online image.

**Crop the Image (optional):**

Use the cropping tool to adjust the size and portion of the image.

Click "Crop" to apply the changes.

**Generate Caption:**

Click the "Generate Caption" button to receive a descriptive caption for the uploaded image.

**View Gallery:**

All uploaded images along with their generated captions are displayed in the gallery section of the app.

**Dependencies**

PictaScript relies on the following major dependencies:

**Frontend**

**React:**  A JavaScript library for building user interfaces.

**styled-components:**  Utilizes tagged template literals to style components.

**axios:**  Promise-based HTTP client for making requests.

**react-easy-crop:** A React component to crop images with easy interactions.

**react-icons:**  A popular library for including icons in React projects.


**Backend**

**Flask:** A lightweight WSGI web application framework in Python.

**flask-cors:** A Flask extension for handling Cross-Origin Resource Sharing (CORS).

**transformers: **A library by Hugging Face for state-of-the-art NLP.

**torch:** A deep learning framework.

**PIL:** Python Imaging Library for opening, manipulating, and saving images.

**requests:** A simple HTTP library for Python.


**Contributing**

We welcome contributions to PictaScript! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. To contribute:

**Fork the repository.**

Create a new branch: git checkout -b feature-name

Commit your changes: git commit -m 'Add some feature'

Push to the branch: git push origin feature-name

Submit a pull request
