import './App.css';
import Navbar from './compoment/Navbar';
import Main from './compoment/Main';
import Footer from './compoment/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
