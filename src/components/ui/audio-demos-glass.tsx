"use client"

import * as React from "react"
import { Play, Pause, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAudio } from "@/contexts/AudioContext"

interface AudioDemoCardProps {
  title: string
  description: string
  audioSrc: string
  icon: React.ReactNode
  accentColor: string
}

function AudioDemoCard({ title, description, audioSrc, icon, accentColor }: AudioDemoCardProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [currentTime, setCurrentTime] = React.useState(0)
  const audioRef = React.useRef<HTMLAudioElement>(null)
  const cardId = React.useRef(`audio-${Math.random().toString(36).substr(2, 9)}`).current
  const { playAudio, pauseAudio } = useAudio()

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      setCurrentTime(audioRef.current.currentTime)
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime(0)
  }

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      pauseAudio(cardId)
    } else {
      playAudio(cardId, audioRef.current)
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error)
        setIsPlaying(false)
      })
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    if (audioRef.current && !isNaN(duration)) {
      audioRef.current.currentTime = (value / 100) * duration
      setProgress(value)
    }
  }

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="group relative">
      {/* Glass effect background card */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl backdrop-blur-md transition-all duration-300 group-hover:backdrop-blur-lg",
          "bg-gradient-to-br from-white/12 to-white/6 border border-white/25 group-hover:border-white/40",
          "group-hover:from-white/18 group-hover:to-white/12"
        )}
      />

      {/* Content */}
      <div className="relative p-6 md:p-8 flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", accentColor)}>
              {icon}
            </div>
            <h3 className="font-bold text-white text-lg md:text-xl leading-tight">{title}</h3>
            <p className="text-sm md:text-base text-gray-300 mt-2">{description}</p>
          </div>
        </div>

        {/* Audio Controls */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={togglePlay}
            className={cn(
              "w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200",
              "hover:scale-110 flex-shrink-0",
              accentColor,
              "text-white shadow-lg hover:shadow-xl"
            )}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
            )}
          </button>

          {/* Progress Bar */}
          <div className="flex-1 flex items-center gap-2.5">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-1.5 rounded-full bg-white/20 appearance-none cursor-pointer transition-all hover:h-2"
              style={{
                accentColor: accentColor.includes("bg-purple") ? "#a855f7" :
                            accentColor.includes("bg-cyan") ? "#06b6d4" :
                            accentColor.includes("bg-emerald") ? "#10b981" :
                            accentColor.includes("bg-amber") ? "#f59e0b" : "#a855f7"
              }}
            />
            <span className="text-xs md:text-sm text-gray-300 whitespace-nowrap font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <Volume2 className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </div>

        <audio
          ref={audioRef}
          src={audioSrc}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          crossOrigin="anonymous"
        />
      </div>
    </div>
  )
}

interface AudioDemosSectionProps {
  demos: AudioDemoCardProps[]
  heading?: string
  subheading?: string
  buttonColor?: string
  buttonText?: string
}

export function AudioDemosSection({ demos, heading = "Experience Our AI in Action", subheading = "Listen to real examples of how our AI handles common customer interactions", buttonColor = "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/50", buttonText = "Hear How This Would Sound for Your Business" }: AudioDemosSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-6">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Audio Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {demos.map((demo, index) => (
            <AudioDemoCard
              key={index}
              title={demo.title}
              description={demo.description}
              audioSrc={demo.audioSrc}
              icon={demo.icon}
              accentColor={demo.accentColor}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            data-cal-link="vocaldice/strategy-session"
            data-cal-namespace="default"
            data-cal-origin="https://cal.id"
            data-cal-config='{"layout":"month_view"}'
            className={cn("px-8 py-3.5 bg-gradient-to-r text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg group", buttonColor)}
          >
            <span className="flex items-center gap-2">
              {buttonText}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export { AudioDemoCard }
