import React, { useState } from "react";

function BookingForm(props) {
    const [bookings, setBookings] = useState({
      reservationTime: '17',
      reservationDate: '',
      numberOfGuest: 1,
      occasion: 'Birthday'
    });

    return (
      <div className="bookin-form">
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={(e) => { 
          e.preventDefault();
          props.submitForm(bookings);
          }}>
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
            required
            />
            <label htmlFor="res-time">Choose time</label>
            <select
            id="res-time "
            onChange={(e) => {
              props.updateTime(e.target.value )

              setBookings(previousState => {
                return { ...previousState, reservationTime: e.target.value }
              });
            }}
            >
              {
                props.availableTimesList.availableTimes.map((times, index) => <option key={ index }>{ times.time }</option>)
              }
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