import { useState } from 'react';
import { MusicPlayer } from './components/MusicPlayer';
import { PlaylistItem } from './components/PlaylistItem';
import { Music2 } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  albumArt: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: 'Sunset Breeze',
    artist: 'Ocean Dreams',
    duration: '3:45',
    albumArt: 'https://images.unsplash.com/photo-1631535152690-ba1a85229136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwb2NlYW58ZW58MXx8fHwxNzcxNzIzMTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Waves at Dawn',
    artist: 'Coastal Vibes',
    duration: '4:12',
    albumArt: 'https://images.unsplash.com/photo-1601361692723-1ee4846cbc13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHdhdmVzJTIwc2FuZCUyMHNob3JlfGVufDF8fHx8MTc3MTc3MjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Horizon Blue',
    artist: 'Seaside Sound',
    duration: '3:28',
    albumArt: 'https://images.unsplash.com/photo-1751563696363-abb675273f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGhvcml6b24lMjBwZWFjZWZ1bCUyMGJsdWV8ZW58MXx8fHwxNzcxNzcyNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Palm Tree Paradise',
    artist: 'Tropical Beats',
    duration: '3:56',
    albumArt: 'https://images.unsplash.com/photo-1631535152690-ba1a85229136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwb2NlYW58ZW58MXx8fHwxNzcxNzIzMTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Seashell Serenade',
    artist: 'Beach Harmony',
    duration: '4:03',
    albumArt: 'https://images.unsplash.com/photo-1601361692723-1ee4846cbc13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHdhdmVzJTIwc2FuZCUyMHNob3JlfGVufDF8fHx8MTc3MTc3MjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Tidal Melody',
    artist: 'Wave Riders',
    duration: '3:38',
    albumArt: 'https://images.unsplash.com/photo-1751563696363-abb675273f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGhvcml6b24lMjBwZWFjZWZ1bCUyMGJsdWV8ZW58MXx8fHwxNzcxNzcyNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 7,
    title: 'Coral Reef Dreams',
    artist: 'Underwater Echoes',
    duration: '4:21',
    albumArt: 'https://images.unsplash.com/photo-1631535152690-ba1a85229136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwb2NlYW58ZW58MXx8fHwxNzcxNzIzMTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 8,
    title: 'Seaside Sunset',
    artist: 'Golden Hour',
    duration: '3:52',
    albumArt: 'https://images.unsplash.com/photo-1601361692723-1ee4846cbc13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHdhdmVzJTIwc2FuZCUyMHNob3JlfGVufDF8fHx8MTc3MTc3MjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function App() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTrackChange = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 text-white">
          <Music2 className="w-10 h-10" />
          <div>
            <h1 className="text-4xl font-bold">Beach Waves</h1>
            <p className="text-cyan-100">Your coastal music sanctuary</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Player */}
          <div className="lg:col-span-2">
            <MusicPlayer
              tracks={tracks}
              currentTrackIndex={currentTrackIndex}
              onTrackChange={handleTrackChange}
            />
          </div>

          {/* Playlist */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Playlist</h3>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {tracks.map((track, index) => (
                <PlaylistItem
                  key={track.id}
                  track={track}
                  isActive={index === currentTrackIndex}
                  isPlaying={isPlaying}
                  onClick={() => handleTrackChange(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
