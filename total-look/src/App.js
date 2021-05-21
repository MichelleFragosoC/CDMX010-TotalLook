import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Principal from './Views/Principal/Principal';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Principal/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
