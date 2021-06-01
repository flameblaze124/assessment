import Logo from './home.jpg'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Apartment} from './components/Apartment'
import {Book} from './components/Book'
import {Pricing} from './components/Pricing'
import {Local} from './components/Local'
import {Contact} from './components/Contact'
import {NotFound} from './components/NotFound'

import {Header} from'./components/Header'

const NavItems = [
  {"name" : "Home" , "link" :"/"},
  {"name" : "The Apartment" , "link" :"/apartment"},
  {"name" : "Pricing" , "link" :"/pricing"},
  {"name" : "Book" , "link" :"/book"},
  {"name" : "Local Area" , "link" :"/local"},
  {"name" : "Contact" , "link" :"/contact"}
]

function App() {
  return (
    <div className="website">
      <Header logo={Logo} nav={NavItems} />
      <main className="context">
      <Switch>
      <Route  exact path="/">
          <Home />
        </Route>
        <Route path ="/home">
          <Home />
        </Route>
        <Route path ="/apartment">
          <Apartment />
        </Route>
        <Route path ="/book">
          <Book />
        </Route>
        <Route path ="/pricing">
          <Pricing />
        </Route>
        <Route path ="/local">
          <Local />
        </Route>
        <Route path ="/contact">
          <Contact />
        </Route>
        < Route path= "*">
          <NotFound />
        </Route>

      </Switch>
      </main>
      <footer className="footer">
        <nav class="social-nav">
      <a href="ttps://www.facebook.com/sorrento">
            <i class="fab fa-facebook"></i>
        </a>
        
        <a href="ttps://www.instagram.com/sorrento">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="ttps://www.twitter.com/sorrento">
            <i class="fab fa-twitter"></i>
        </a>
    </nav>
      </footer>
    </div>
  );
}

export default App;

