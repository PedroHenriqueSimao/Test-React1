import React, { useState, useEffect } from 'react';
import { Search, ArrowUp } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import type { Course } from '../types';

const allCourses: Course[] = [
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

// Get unique categories from courses
const categories = ['All', ...new Set(allCourses.map(course => course.category))];

export function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={`category-${category}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
          </div>
        )}

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}