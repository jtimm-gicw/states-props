import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import HornedBeast from './HornedBeast';
import image_url  from './data.json';

function App() {
  return (
    <div className='App'>
      <Header />
        <Gallery />
        <HornedBeast message="Make Your Beast Opinion Known" image_url ={image_url}/>
        <Footer />
    </div>
  );
}

export default App;
