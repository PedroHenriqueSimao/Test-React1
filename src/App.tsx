import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { Ranking } from './pages/Ranking';
import { SuggestCourse } from './pages/SuggestCourse';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/suggest" element={<SuggestCourse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;