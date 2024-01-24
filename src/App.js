import React, { useReducer, useEffect } from "react";
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

const fetchData = () => [17, 18, 19, 20, 21, 22];

const reducer = (state, action) => {
  switch (action.type) {
    case "updateTime":
      return [action.time]
    default:
      return state;
  }
};

export default function App() {
const [availableTimesList, dispatch] = useReducer(reducer, initializeTimes());

useEffect(() => {
  fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js",
  {
    method: "POST",
    body: new Date()
  }
  )
  .then((res) => res)
  .then((data) => console.log(data))
});

const handleUpdateTimes = (newTime) => {
  dispatch({ type: "updateTime", time: newTime });
};

const displayAvailableTimesList = availableTimesList.map((time, index) => <li key={index}>{time}</li>);

  return (
    <>
    <Header></Header>
    <HeroBanner></HeroBanner>
    <h2 data-testid="seatsAvailable">Seats Available</h2>
    <ul>
      { displayAvailableTimesList }
    </ul>
    <WeeklySpecials></WeeklySpecials>
    <Routes>
      <Route index element={<Main />} />
      <Route path="/Home" element={<Main />} />
      <Route path="/About" element={<About />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/BookingPage" element={<BookingPage handleUpdateTimes={ handleUpdateTimes }/>} />
    </Routes>
    <Footer></Footer>
    </>
  );
};