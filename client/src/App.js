import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/UI/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './components/UI/Blog';
import Posts from './components/UI/Posts';
import LoginPage from './components/UI/LoginPage';
import RegisterPage from './components/UI/RegisterPage';
import CreatePost from './components/UI/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/posts" element={<Posts />} />
        <Route path="blog/createpost" element={<CreatePost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
