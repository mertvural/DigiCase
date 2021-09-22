import Header from './components/Header'
import Banner from './components/Banner'
import Lists from './components/Lists'
import Footer from './components/Footer'
import Detail from './components/Detail'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <header className="header">
        <div className="container">
          <Header />
        </div>
      </header>
      <main>

      <Switch>
          <Route path="/" exact>
            <Banner/>
            <Lists/>
          </Route>
          <Route path="/detail/:id" exact>
            <Detail/>
          </Route>
      </Switch>
      <Redirect from="/" to="/" />        
      </main>
      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>
      </BrowserRouter>
    </>
  );
}

export default App;




