import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioDemoCardProps {
  title: string;
  description: string;
  audioSrc: string;
  icon?: string;
}

export const AudioDemoCard = ({ title, description, audioSrc, icon }: AudioDemoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    if (!time) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group">
      <audio
        ref={audioRef}
        src={audioSrc}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Icon/Badge */}
      {icon && <div className="text-4xl mb-4">{icon}</div>}

      {/* Title and Description */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-6">{description}</p>

      {/* Player Controls */}
      <div className="space-y-3">
        {/* Play Button and Volume */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 group-hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-white" />
            ) : (
              <Play className="w-5 h-5 ml-0.5 fill-white" />
            )}
          </button>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="text-xs text-gray-500">{formatTime(currentTime)}</span>
              <span className="text-xs text-gray-500">/</span>
              <span className="text-xs text-gray-500">{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer accent-purple-500"
          style={{
            background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${
              duration ? (currentTime / duration) * 100 : 0
            }%, rgb(55, 65, 81) ${duration ? (currentTime / duration) * 100 : 0}%, rgb(55, 65, 81) 100%)`,
          }}
        />
      </div>
    </div>
  );
};

export const AudioDemosSection = () => {
  const demos = [
    {
      title: "Customer Inquiry",
      description: "Watch how our AI handles a typical customer order status question with natural conversation.",
      audioSrc: "/src/assets/buyer-demo.mp3",
      icon: "🎧",
    },
    {
      title: "Return Request",
      description: "See how the AI assists with return procedures and refund inquiries automatically.",
      audioSrc: "/src/assets/seller-demo.mp3",
      icon: "💬",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hear It in Action
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Listen to real examples of how our AI ecommerce assistant handles customer interactions with natural, human-like conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {demos.map((demo, index) => (
            <AudioDemoCard
              key={index}
              title={demo.title}
              description={demo.description}
              audioSrc={demo.audioSrc}
              icon={demo.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioDemosSection;
