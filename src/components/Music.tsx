import React, { useState, useRef } from 'react';

const Music: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Toggle play/pause
    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="music-player-container">
            {/* Audio Element */}
            <audio
                ref={audioRef}
                src="/audio.mp3"
                loop={true}
            />

            {/* Music Control Button */}
            <button
                onClick={togglePlayPause}
                className={`music-control-button ${isPlaying ? 'playing' : ''}`}
            >
                <img
                    src={"audio.svg"}
                    alt="Audio Control"
                    className={`music-control-icon ${isPlaying ? 'rotate' : ''}`}
                />
            </button>
        </div>
    );
};

export default Music;