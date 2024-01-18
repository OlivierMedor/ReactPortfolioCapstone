import React, { useState } from "react";
function BookingForm(props) {
    const [bookings, setBookings] = useState({
      reservationTime: '',
      reservationDate: '',
      numberOfGuest: 1,
      occasion: ''
    });

    return (
      <div className="bookin-form">
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input
            onChange={(e) => {
              setBookings(previousState => {
                return {
                  ...previousState, reservationDate: e.target.value
                }
              })
            }}
            type="date"
            id="res-date"
            />
            <label htmlFor="res-time">Choose time</label>
            <select
            id="res-time "
            onChange={(e) => {
              props.handleUpdateTimes(e.target.value);
            }}
            >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            onChange={
              (e) => {
                setBookings(previousState => {
                  return { ...previousState, numberOfGuest: e.target.value }
                })
              }
            }
            />
            <label htmlFor="occasion">Occasion</label>
            <select
            id="occasion"
            onChange={(e) => {
              setBookings(previousState => {
                return { ...previousState, occasion: e.target.value }
              });
            }}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit">Make Your reservation</button>
        </form>
      </div>
    );
  }

  export default BookingForm;