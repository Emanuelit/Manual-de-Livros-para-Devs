import React from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <BookList />
      <Footer />
    </div>
  )
}

export default App
