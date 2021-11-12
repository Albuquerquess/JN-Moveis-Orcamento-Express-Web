import React from "react";
// Styles
import youtubeEmbedStyles from './youtubeEmbed.module.css'

interface youtubeEnbedProps {
  embedId: string
}

const YoutubeEmbed = ({ embedId }: youtubeEnbedProps) => (
  <div id="youtube-video-embed" className={youtubeEmbedStyles["video-responsive"]}>
     {
    (embedId) && (
      <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
        title="Embedded youtube"
      />
    )
    }
  </div>
);

export default YoutubeEmbed;