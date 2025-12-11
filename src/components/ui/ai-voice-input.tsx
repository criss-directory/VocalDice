"use client";

import { Volume2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AIVoiceInputProps {
  isActive?: boolean;
  onToggle?: () => void;
  onStart?: () => void;
  onStop?: (duration: number) => void;
  visualizerBars?: number;
  className?: string;
  audiosrc?: string; // Added audio source prop
}

export function AIVoiceInput({
  isActive = false,
  onToggle,
  onStart,
  onStop,
  visualizerBars = 48,
  className,
  audiosrc
}: AIVoiceInputProps) {
  const [time, setTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isActive) {
      onStart?.();
      
      // Play audio if source is provided
      if (audiosrc && audioRef.current) {
        audioRef.current.play().catch(err => {
          console.error("Error playing audio:", err);
        });
      }
      
      intervalId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      // Pause and reset audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      onStop?.(time);
      setTime(0);
    }

    return () => clearInterval(intervalId);
  }, [isActive, audiosrc, onStart, onStop, time]);

  // Handle audio end
  useEffect(() => {
    const audio = audioRef.current;
    
    const handleEnded = () => {
      onToggle?.(); // Auto-stop when audio ends
    };
    
    if (audio) {
      audio.addEventListener('ended', handleEnded);
    }
    
    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
      }
    };
  }, [onToggle]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleClick = () => {
    onToggle?.();
  };

  return (
    <div className={cn("w-full py-4", className)}>
      {/* Hidden audio element */}
      {audiosrc && (
        <audio ref={audioRef} src={audiosrc} preload="auto" />
      )}
      
      <div className="relative max-w-xl w-full mx-auto flex items-center flex-col gap-2">
        <button
          className={cn(
            "group w-16 h-16 rounded-xl flex items-center justify-center transition-colors",
            isActive
              ? "bg-none"
              : "bg-none hover:bg-foreground/10"
          )}
          type="button"
          onClick={handleClick}
        >
          {isActive ? (
            <div
              className="w-6 h-6 rounded-sm animate-spin bg-foreground cursor-pointer pointer-events-auto"
              style={{ animationDuration: "3s" }}
            />
          ) : (
            <Volume2 className="w-6 h-6 text-foreground/70" />
          )}
        </button>

        <span
          className={cn(
            "font-mono text-sm transition-opacity duration-300",
            isActive
              ? "text-foreground/70"
              : "text-muted-foreground"
          )}
        >
          {formatTime(time)}
        </span>

        <div className="h-4 w-64 flex items-center justify-center gap-0.5">
          {[...Array(visualizerBars)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-0.5 rounded-full transition-all duration-300",
                isActive
                  ? "bg-primary/50 animate-pulse"
                  : "bg-muted-foreground/10 h-1"
              )}
              style={
                isActive && isClient
                  ? {
                      height: `${20 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.05}s`,
                    }
                  : undefined
              }
            />
          ))}
        </div>

        <p className="h-4 text-xs text-muted-foreground">
          {isActive ? "Playing audio..." : "Click to play"}
        </p>
      </div>
    </div>
  );
}