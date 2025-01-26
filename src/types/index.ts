export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalHours: number;
  isAdmin: boolean;
  completedCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: number;
  category: string;
  externalLink: string;
  popularity: number;
}

export interface Suggestion {
  id: string;
  title: string;
  category: string;
  comments: string;
  userId: string;
  createdAt: Date;
}