import { Play, Pause } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  albumArt: string;
}

interface PlaylistItemProps {
  track: Track;
  isActive: boolean;
  isPlaying: boolean;
  onClick: () => void;
}

export function PlaylistItem({ track, isActive, isPlaying, onClick }: PlaylistItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
        isActive
          ? 'bg-gradient-to-r from-cyan-100 to-blue-100 shadow-md'
          : 'hover:bg-cyan-50'
      }`}
    >
      {/* Album Art Thumbnail */}
      <div className="relative w-14 h-14 flex-shrink-0">
        <img
          src={track.albumArt}
          alt={track.title}
          className="w-full h-full object-cover rounded-lg"
        />
        {isActive && (
          <div className="absolute inset-0 bg-cyan-900/40 rounded-lg flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white fill-current" />
            ) : (
              <Play className="w-6 h-6 text-white fill-current" />
            )}
          </div>
        )}
      </div>

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <h4 className={`font-medium truncate ${isActive ? 'text-cyan-700' : 'text-gray-800'}`}>
          {track.title}
        </h4>
        <p className={`text-sm truncate ${isActive ? 'text-cyan-600' : 'text-gray-500'}`}>
          {track.artist}
        </p>
      </div>

      {/* Duration */}
      <div className={`text-sm ${isActive ? 'text-cyan-600' : 'text-gray-500'}`}>
        {track.duration}
      </div>
    </div>
  );
}
