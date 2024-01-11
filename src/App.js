import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HeroBanner from './HeroBanner';
import WeeklySpecials from './WeeklySpecials';
import About from './pages/About';
import Menu from './pages/Menu';
import BookingPage from './pages/BookingPage ';

export default function App() {
  return (
    <>
    <Header></Header>
    <HeroBanner></HeroBanner>
    <WeeklySpecials></WeeklySpecials>
    <Routes>
      <Route index element={<Main />} />
      <Route path="/Home" element={<Main />} />
      <Route path="/About" element={<About />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/BookingPage" element={<BookingPage />} />
    </Routes>
    <Footer></Footer>
    </>
  );
};