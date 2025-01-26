import React, { useState } from 'react';
import { Send, Lightbulb } from 'lucide-react';

export function SuggestCourse() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    expectedDuration: '',
    additionalComments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Course suggestion submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const categories = [
    'Leadership',
    'Marketing',
    'Project Management',
    'Technology',
    'Personal Development',
    'Business',
    'Other'
  ];

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-[#4CAF50] bg-opacity-10 rounded-full mb-4">
            <Lightbulb className="w-8 h-8 text-[#4CAF50]" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Suggest a Course</h1>
          <p className="text-gray-600">Help us improve our course catalog by suggesting new topics</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Course Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g., Advanced Data Analytics"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-all duration-300 bg-white"
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Course Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Describe the course content and learning objectives..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="expectedDuration" className="block text-sm font-medium text-gray-700 mb-1">
              Expected Duration (hours)
            </label>
            <input
              type="number"
              id="expectedDuration"
              name="expectedDuration"
              value={formData.expectedDuration}
              onChange={handleChange}
              required
              min="1"
              placeholder="e.g., 10"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Comments
            </label>
            <textarea
              id="additionalComments"
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleChange}
              rows={3}
              placeholder="Any additional information or specific requirements..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#45a049] transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <span>Submit Suggestion</span>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}