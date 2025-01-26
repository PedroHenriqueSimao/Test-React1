import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Award } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import type { Course } from '../types';

const featuredCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Leadership Essentials',
    description: 'Master the fundamentals of effective leadership and team management in this comprehensive course.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    duration: 1,
    category: 'Leadership',
    externalLink: 'https://www.linkedin.com/learning/fundamentos-de-lideranca-22628090/compreensao-da-lideranca-efetiva?u=75468826',
    popularity: 95
  },
  {
    id: 'course-2',
    title: 'Digital Marketing Strategy',
    description: 'Learn how to create and implement successful digital marketing campaigns.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    duration: 2,
    category: 'Marketing',
    externalLink: 'https://www.linkedin.com/learning/fundamentos-do-marketing-digital/como-se-conectar-com-seus-clientes-on-line?u=75468826',
    popularity: 88
  },
  {
    id: 'course-3',
    title: 'Project Management Professional',
    description: 'Develop essential project management skills and prepare for PMP certification.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    duration: 8,
    category: 'Project Management',
    externalLink: 'https://www.linkedin.com/learning/paths/explore-uma-carreira-em-gestao-de-projetos?u=75468826',
    popularity: 92
  }
];

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learn, Achieve, Evolve!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Unlock your potential with our comprehensive corporate training platform
          </p>
          <button 
            onClick={() => navigate('/courses')}
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg active:scale-95"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <GraduationCap className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-neutral">Available Courses</p>
            </div>
            <div className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-neutral">Active Learners</p>
            </div>
            <div className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15,000+</h3>
              <p className="text-neutral">Certificates Awarded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}