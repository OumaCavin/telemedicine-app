import React, { useState } from 'react';
import './styles/VideoConsultation.css';

const VideoConsultation = () => {
    const [isCallActive, setIsCallActive] = useState(false);

    const handleStartCall = () => {
        setIsCallActive(true);
        // Logic for starting video call
    };

    const handleEndCall = () => {
        setIsCallActive(false);
        // Logic for ending video call
    };

    return (
        <div className="video-consultation">
            <h2>Video Consultation</h2>
            {isCallActive ? (
                <div className="video-container">
                    <div className="video">[Video Feed]</div>
                    <button onClick={handleEndCall} className="end-call-button">End Call</button>
                </div>
            ) : (
                <div className="start-call-container">
                    <button onClick={handleStartCall} className="start-call-button">Start Video Call</button>
                </div>
            )}
        </div>
    );
};

export default VideoConsultation;

// import React from 'react';

// const VideoConsultation = () => {
//     return (
//         <div className="video-consultation">
//             <h2>Video Consultation</h2>
//             {/* Video call interface goes here */}
//         </div>
//     );
// };

// export default VideoConsultation;
