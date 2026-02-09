import React, { createContext, useContext, useRef, useCallback, useState } from 'react'

interface AudioContextType {
  currentAudioId: string | null
  playAudio: (cardId: string, audioElement: HTMLAudioElement) => void
  pauseAudio: (cardId: string) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const currentAudioRef = useRef<HTMLAudioElement | null>(null)
  const currentAudioIdRef = useRef<string | null>(null)
  const [, setUpdateTrigger] = useState({})

  const playAudio = useCallback((cardId: string, audioElement: HTMLAudioElement) => {
    // Pause the currently playing audio if it's different
    if (currentAudioRef.current && currentAudioRef.current !== audioElement) {
      try {
        currentAudioRef.current.pause()
        currentAudioRef.current.currentTime = 0
      } catch (e) {
        console.error('Error pausing previous audio:', e)
      }
    }

    // Play the new audio
    currentAudioRef.current = audioElement
    currentAudioIdRef.current = cardId
    
    try {
      audioElement.play().catch((error) => {
        console.error('Error playing audio:', error)
      })
    } catch (e) {
      console.error('Error in playAudio:', e)
    }

    setUpdateTrigger({})
  }, [])

  const pauseAudio = useCallback((cardId: string) => {
    if (currentAudioIdRef.current === cardId && currentAudioRef.current) {
      try {
        currentAudioRef.current.pause()
      } catch (e) {
        console.error('Error pausing audio:', e)
      }
      currentAudioIdRef.current = null
      setUpdateTrigger({})
    }
  }, [])

  const value: AudioContextType = {
    currentAudioId: currentAudioIdRef.current,
    playAudio,
    pauseAudio,
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}
