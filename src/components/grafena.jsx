import React from 'react';
import "./dataaad.css";

const Grafena = () => {
  return (
    <div>
      <video
        className="video__embedded--video box-shadow-medium"

        preload="metadata"
        controls={true}
      >
        <source src="https://player.vimeo.com/external/561360326.m3u8?s=0ead6a57c566557a430c6d83c0f0e03b16f13c95" type="video/m3u8" />
        <source src="https://player.vimeo.com/progressive_redirect/playback/561360326/rendition/720p/file.mp4?loc=external&signature=f3bc1da052bc98f1ddf0faa2e68edb8256c8680a1505f72916d8fd98381f9086" type="video/mp4" />
        <p>A problem with video playback occurred. If it persists, please email <a href="mailto:update@grafana.com">update@grafana.com</a> for help.</p>
      </video>
    </div>
  );
};

export default Grafena;

