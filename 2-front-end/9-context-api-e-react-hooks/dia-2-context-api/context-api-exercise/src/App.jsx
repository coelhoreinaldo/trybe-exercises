
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Image from './components/Image';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [themeColor, setThemeColor] = useState('dark');
  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }
  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      <div className={`app ${themeColor}`}>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
