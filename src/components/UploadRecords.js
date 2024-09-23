import React from 'react';
import './styles/UploadRecords.css';

const UploadRecords = () => {
    return (
        <div className="upload-records">
            <h1>Upload Medical Records</h1>
            <p>Upload your medical records for future reference.</p>
            <form>
                <input type="file" className="upload-input" />
                <button type="submit" className="upload-btn">Upload</button>
            </form>
        </div>
    );
};

export default UploadRecords;
