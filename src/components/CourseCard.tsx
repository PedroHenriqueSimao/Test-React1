import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [isCompleted, setIsCompleted] = React.useState(() => {
    const completed = localStorage.getItem('completedCourses');
    return completed ? JSON.parse(completed).includes(course.id) : false;
  });

  const toggleCompletion = () => {
    const completed = localStorage.getItem('completedCourses');
    const completedCourses = completed ? JSON.parse(completed) : [];
    
    if (isCompleted) {
      const newCompleted = completedCourses.filter((id: string) => id !== course.id);
      localStorage.setItem('completedCourses', JSON.stringify(newCompleted));
    } else {
      completedCourses.push(course.id);
      localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
    }
    
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
      <img 
        src={course.imageUrl} 
        alt={course.title}
        className="w-full h-48 object-cover transition duration-300 hover:scale-105"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
          <button
            onClick={toggleCompletion}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isCompleted ? 'text-primary' : 'text-gray-400 hover:text-primary'
            }`}
            aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
          >
            <CheckCircle className={`w-6 h-6 ${isCompleted ? 'fill-primary' : ''}`} />
          </button>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center text-neutral mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span>{course.duration} hours</span>
        </div>
        <a 
          href={course.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-primary block text-center"
        >
          View Course
        </a>
      </div>
    </div>
  );
}