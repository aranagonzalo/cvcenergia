import { useState } from "react";
import { Play } from "lucide-react";

const VideoPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div className="relative w-full h-full">
            {/* Black overlay */}
            {!isPlaying && (
                <div
                    className="absolute inset-0 bg-black opacity-100 flex items-center justify-center cursor-pointer"
                    onClick={handlePlay}
                >
                    <Play color="#fefdf4" size={90} />
                </div>
            )}

            {/* Video player */}
            <video
                src={src}
                controls={true}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            ></video>
        </div>
    );
};

export default VideoPlayer;
