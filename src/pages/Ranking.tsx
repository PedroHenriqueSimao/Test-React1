import React from 'react';
import { Trophy, Medal } from 'lucide-react';

interface RankingUser {
  id: string;
  name: string;
  avatar: string;
  totalHours: number;
  position: number;
}

const users: RankingUser[] = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    totalHours: 156,
    position: 1
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    totalHours: 142,
    position: 2
  },
  {
    id: '3',
    name: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    totalHours: 128,
    position: 3
  }
];

export function Ranking() {
  const getPositionStyle = (position: number) => {
    switch (position) {
      case 1:
        return 'bg-yellow-100 border-yellow-300';
      case 2:
        return 'bg-gray-100 border-gray-300';
      case 3:
        return 'bg-orange-100 border-orange-300';
      default:
        return 'bg-white border-gray-200';
    }
  };

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-500" />;
      case 3:
        return <Medal className="w-6 h-6 text-orange-500" />;
      default:
        return <span className="text-gray-500">{position}</span>;
    }
  };

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Learning Leaders</h1>
        
        <div className="space-y-4">
          {users.map(user => (
            <div
              key={user.id}
              className={`flex items-center p-4 border rounded-lg transition-all duration-300 hover:shadow-md ${getPositionStyle(user.position)}`}
            >
              <div className="flex items-center justify-center w-12 h-12">
                {getPositionIcon(user.position)}
              </div>
              <div className="flex-shrink-0 ml-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-gray-600">{user.totalHours} hours completed</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}