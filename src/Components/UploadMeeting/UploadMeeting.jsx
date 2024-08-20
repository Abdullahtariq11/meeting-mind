import React from "react";
import "./UploadMeeting.css";
import Navbar from "../Common/Navbar";

function UploadMeeting() {
  return (
    <div>
      <div className="upload-meeting-page">
        <Navbar />
        <div className="upload-meeting-content">
          <h2>Upload Your Meeting</h2>
          <p>
            Upload your meeting recording to generate AI-powered summaries and
            actionable insights.
          </p>
          <div className="upload-area">
            <p>Drag and drop your files here or</p>
            <button>Select Files</button>
          </div>
          <div className="upload-instructions">
            <p>Supported file types: MP3, MP4, WAV. Max size: 500MB.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadMeeting;
