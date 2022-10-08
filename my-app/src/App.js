import './App.css';
import { ImageTile } from './components/ImageTile'
import Icon1 from "./images/icon1.png"
import Icon2 from "./images/icon2.png"
import Icon3 from "./images/icon3.png"
import Icon4 from "./images/icon4.png"
// import IronHackLogo from "./images/ironhack-logo-xs-dark.png"
// import MenuImg from "./images/menu-top-xs-dark.png"
import { NavCover } from './components/NavCover'

function App() {
  return (
    <div className="App">
      <NavCover/>
      {/* Vanessa's Nav Bar work
      <div className="color-container">
        <nav className="navbar">
          <div className="container-fluid">
            <img className="navbar-brand" alt={'ironhacklogo'} src={IronHackLogo} />
            <img className="navbar-brand" alt={'menuimg'}  src={MenuImg} />
          </div>
        </nav>
        <h1>
          Say Hello to ReactJS
        </h1>
      </div> */}
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
          <ImageTile title={'Declarative'} summary={'React makes it painless to create interactive UIs.'} icon={Icon1}/>
          <ImageTile title={'Components'} summary={'Build encapsulated components that manage their state.'} icon={Icon2}/>
          <ImageTile title={'Single-Way'} summary={'A set of immutable values as passed to the components.'} icon={Icon3}/>
          <ImageTile title={'JSX'} summary={'Statically-typed, designed to run on modern browsers.'} icon={Icon4}/>
      </div>
    </div>
  );
}
export default App;


