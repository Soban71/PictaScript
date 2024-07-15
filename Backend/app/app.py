from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import VisionEncoderDecoderModel, ViTFeatureExtractor, AutoTokenizer
import torch
from PIL import Image
import io
import requests

app = Flask(__name__)
CORS(app)

# Load the pre-trained model
model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
feature_extractor = ViTFeatureExtractor.from_pretrained("nlpconnect/vit-gpt2-image-captioning")
tokenizer = AutoTokenizer.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

@app.route('/generate-caption', methods=['POST'])
def generate_caption():
    if 'image' in request.files:
        file = request.files['image'].read()
        image = Image.open(io.BytesIO(file)).convert("RGB")
        pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
        pixel_values = pixel_values.to(device)
        
        output_ids = model.generate(pixel_values)
        caption = tokenizer.decode(output_ids[0], skip_special_tokens=True)
        
        return jsonify({'caption': caption})
    
    elif 'image_url' in request.form:
        image_url = request.form['image_url']
        
        try:
            # Fetch image from URL
            response = requests.get(image_url)
            image = Image.open(io.BytesIO(response.content)).convert("RGB")
            
            # Process image
            pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
            pixel_values = pixel_values.to(device)
            
            # Generate caption
            output_ids = model.generate(pixel_values)
            caption = tokenizer.decode(output_ids[0], skip_special_tokens=True)
            
            return jsonify({'caption': caption})
        
        except Exception as e:
            return jsonify({'error': str(e)}), 400
    
    else:
        return jsonify({'error': 'No image or image URL provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)
