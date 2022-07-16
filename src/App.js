
import './App.css';

import Navbar from "./Components/Navbar/Navbar";
import Section_1 from "./Components/Section_1/Section_1";
import Section_2 from "./Components/Section_2/Section_2";
import Carousel from './Components/Carousel/Carousel';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Section_1 />
      <Section_2 />
      <Carousel />
    </div>
  );
}

export default App;
