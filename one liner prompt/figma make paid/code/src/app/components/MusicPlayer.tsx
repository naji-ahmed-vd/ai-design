import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Repeat, Shuffle } from 'lucide-react';
import { Slider } from './ui/slider';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  albumArt: string;
}

interface MusicPlayerProps {
  tracks: Track[];
  currentTrackIndex: number;
  onTrackChange: (index: number) => void;
}

export function MusicPlayer({ tracks, currentTrackIndex, onTrackChange }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      onTrackChange(randomIndex);
    } else {
      const nextIndex = (currentTrackIndex + 1) % tracks.length;
      onTrackChange(nextIndex);
    }
    setProgress(0);
  };

  const handlePrevious = () => {
    if (progress > 5) {
      setProgress(0);
    } else {
      const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
      onTrackChange(prevIndex);
      setProgress(0);
    }
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (value[0] > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (progress: number) => {
    const [minutes, seconds] = currentTrack.duration.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    const currentSeconds = Math.floor((progress / 100) * totalSeconds);
    const min = Math.floor(currentSeconds / 60);
    const sec = currentSeconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl shadow-2xl overflow-hidden">
      {/* Album Art Section */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={currentTrack.albumArt}
          alt={currentTrack.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent" />
        
        {/* Track Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-3xl font-bold mb-1">{currentTrack.title}</h2>
          <p className="text-lg text-cyan-100">{currentTrack.artist}</p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="p-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <Slider
            value={[progress]}
            onValueChange={handleProgressChange}
            max={100}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between mt-2 text-sm text-cyan-700">
            <span>{formatTime(progress)}</span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        {/* Main Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => setIsShuffle(!isShuffle)}
            className={`p-2 rounded-full transition-colors ${
              isShuffle ? 'text-cyan-600 bg-cyan-100' : 'text-cyan-500 hover:bg-cyan-50'
            }`}
          >
            <Shuffle className="w-5 h-5" />
          </button>

          <button
            onClick={handlePrevious}
            className="p-3 rounded-full bg-white text-cyan-600 hover:bg-cyan-50 transition-all shadow-md"
          >
            <SkipBack className="w-6 h-6 fill-current" />
          </button>

          <button
            onClick={togglePlay}
            className="p-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg transform hover:scale-105"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white text-cyan-600 hover:bg-cyan-50 transition-all shadow-md"
          >
            <SkipForward className="w-6 h-6 fill-current" />
          </button>

          <button
            onClick={() => setIsRepeat(!isRepeat)}
            className={`p-2 rounded-full transition-colors ${
              isRepeat ? 'text-cyan-600 bg-cyan-100' : 'text-cyan-500 hover:bg-cyan-50'
            }`}
          >
            <Repeat className="w-5 h-5" />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          <Slider
            value={[isMuted ? 0 : volume]}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            className="w-32"
          />
        </div>
      </div>
    </div>
  );
}
