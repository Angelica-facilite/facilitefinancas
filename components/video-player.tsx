"use client"

import { useState } from "react"
import ReactPlayer from "react-player/youtube"

export default function VideoPlayer({ width = "100%", height = "100%" }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(true)

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying)
    setShowControls(false)
  }

  return (
    <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden group">
      <ReactPlayer
        url="https://youtu.be/5CURKqtrEOY"
        playing={isPlaying}
        controls={showControls}
        width={width}
        height={height}
        className="absolute top-0 left-0"
      />
    </div>
  )
}
