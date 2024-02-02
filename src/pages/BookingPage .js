import BookingForm from "../BookingForm ";

function BookingPage(props) {
    return (
      <>
      <div className="booking">
        <section>
          <h1>Reserve A Table</h1>
          <BookingForm updateTime={ props.updateTime } availableTimesList={ props.availableTimesList } setAvailableTimesList={ props.setAvailableTimesList } submitForm={ props.submitForm } />
        </section>
      </div>
      </>
    );
  }

  export default BookingPage;
