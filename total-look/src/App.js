import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Principal from './Views/Principal/Principal';
import Products from './Products';
import Promotions from './Promotions';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Principal />
      </div>
      <footer>
        <Footer/>
      </footer>
      <Products />
      <Promotions />
    </div>
  );
}

export default App;