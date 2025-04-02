
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl: string;
}

const VideoPlayer = ({ videoUrl, posterUrl }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  let controlsTimeout: NodeJS.Timeout | null = null;
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };
    
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };
    
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);
  
  useEffect(() => {
    // Auto-hide controls after 3 seconds
    const hideControls = () => {
      if (isPlaying) {
        setShowControls(false);
      }
    };
    
    if (isPlaying) {
      controlsTimeout = setTimeout(hideControls, 3000);
    }
    
    return () => {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout);
      }
    };
  }, [isPlaying, showControls]);
  
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };
  
  const handleProgressChange = (newValue: number[]) => {
    if (!videoRef.current) return;
    
    const newTime = (newValue[0] / 100) * duration;
    videoRef.current.currentTime = newTime;
    setProgress(newValue[0]);
    setCurrentTime(newTime);
  };
  
  const handleVolumeChange = (newValue: number[]) => {
    if (!videoRef.current) return;
    
    const newVolume = newValue[0] / 100;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };
  
  const toggleMute = () => {
    if (!videoRef.current) return;
    
    if (isMuted) {
      videoRef.current.volume = volume;
      setIsMuted(false);
    } else {
      videoRef.current.volume = 0;
      setIsMuted(true);
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      playerRef.current.requestFullscreen();
    }
  };
  
  const skip = (seconds: number) => {
    if (!videoRef.current) return;
    
    videoRef.current.currentTime += seconds;
  };
  
  const showControlsOnMouseMove = () => {
    if (controlsTimeout) {
      clearTimeout(controlsTimeout);
    }
    setShowControls(true);
  };
  
  return (
    <div 
      ref={playerRef}
      className="relative w-full h-full bg-black"
      onMouseMove={showControlsOnMouseMove}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        className="w-full h-full"
        poster={posterUrl}
        src={videoUrl}
        playsInline
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Controles do player */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 flex flex-col justify-between p-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Título no topo */}
        <div className="text-white text-lg font-semibold drop-shadow-lg">
          {/* O título pode ser exibido aqui se necessário */}
        </div>
        
        {/* Controles inferiores */}
        <div className="flex flex-col">
          {/* Barra de progresso */}
          <div className="w-full px-4 mb-4">
            <Slider 
              value={[progress]} 
              min={0} 
              max={100} 
              step={0.1}
              onValueChange={handleProgressChange}
              className="cursor-pointer"
            />
          </div>
          
          {/* Botões de controle */}
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={togglePlay}
                className="text-white hover:text-primary focus:outline-none"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </button>
              
              <button 
                onClick={() => skip(-10)}
                className="text-white hover:text-primary focus:outline-none"
              >
                <SkipBack className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => skip(10)}
                className="text-white hover:text-primary focus:outline-none"
              >
                <SkipForward className="h-5 w-5" />
              </button>
              
              <div className="text-white text-sm space-x-1">
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 w-24">
                <button 
                  onClick={toggleMute}
                  className="text-white hover:text-primary focus:outline-none"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
                
                <Slider 
                  value={[isMuted ? 0 : volume * 100]} 
                  min={0} 
                  max={100} 
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="cursor-pointer w-16"
                />
              </div>
              
              <button 
                onClick={toggleFullscreen}
                className="text-white hover:text-primary focus:outline-none"
              >
                <Maximize className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
