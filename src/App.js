import Logo from './home.png'
import './App.css';

import {Header} from'./components/Header'

const NavItems = [
  {"name" : "Home" , "link" :"/home"},
  {"name" : "The Apartment" , "link" :"/apartment"},
  {"name" : "Pricing" , "link" :"/pricing"},
  {"name" : "Book" , "link" :"/link"},
  {"name" : "Local Area" , "link" :"/local"},
  {"name" : "Contact" , "link" :"/contact"}
]

function App() {
  return (
    <div className="website">
      <Header logo={Logo} nav={NavItems} />
      <main className="context"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;

