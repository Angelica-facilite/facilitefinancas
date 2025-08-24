"use client"

import ReactPlayer from "react-player/youtube"

export default function VideoPlayer({ width = "100%", height = "100%" }) {



  return (
    <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden group">
      <ReactPlayer
        url="https://youtu.be/5CURKqtrEOY"
        playing={false}
        controls={true}
        width={width}
        height={height}
        className="absolute top-0 left-0"
      />
    </div>
  )
}
