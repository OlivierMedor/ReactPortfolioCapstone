import BookingForm from "../BookingForm ";

function BookingPage(props) {
    return (
      <>
      <div className="booking">
        <section>
          <h1>Reserve A Table</h1>
          <BookingForm handleUpdateTimes={ props.handleUpdateTimes } />
        </section>
      </div>
      </>
    );
  }

  export default BookingPage;
