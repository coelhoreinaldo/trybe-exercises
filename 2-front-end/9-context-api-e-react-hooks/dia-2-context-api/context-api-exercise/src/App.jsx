
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Image from './components/Image';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeContext.Provider value={{ color: 'dark' }}>
      <div>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
