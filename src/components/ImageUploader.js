import React, { useState } from 'react';
import axios from 'axios';
import './landing.css'; // Importing CSS for styling

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [confidence, setConfidence] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const sendImage = async () => {
        if (!image) return;

        console.log("Sending image:", image);  // Debug log to verify image data

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                image: image,
            });

            console.log("Response data:", response.data); // Debug log for response
            setPrediction(response.data.prediction);
            setConfidence(response.data.confidence);
        } catch (error) {
            console.error('Error sending the image', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <div className="image-uploader">
            <h1 className="title">Upload an Image</h1>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="file-input"
            />
            {image && (
                <div className="image-preview">
                    <h2>Uploaded Image:</h2>
                    <img src={image} alt="Uploaded" className="uploaded-image" />
                    <button onClick={sendImage} className="send-button">Send to Server</button>
                </div>
            )}
            {prediction && (
                <div className="prediction-result">
                    <h2>Prediction: {prediction}</h2>
                    <p>Confidence: {confidence}</p>
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
