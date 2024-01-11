import "./Main.css"

function Main() {
    return (
      <>
        <main>
          <section>
              <article>
                  <img alt="Greek Salad" src={require('./assets/greeksalad.jpg')}></img>
                  <h3>Greek Salad</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </article>
              <article>
                  <img alt="Bruchetta" src={require('./assets/burchetta.jpg')}></img>
                  <h3>Bruchetta</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </article>
              <article>
                  <img alt="Lemon Desert" src={require('./assets/lemondesert.jpg')}></img>
                  <h3>Lemon Desert</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </article>
          </section>
        </main>
      </>
    );
  }

  export default Main;
