import './App.css';
import './getstarted.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>

    <div className="get-started-container">
      <p>Explore the Crypto Markets here!</p>

      <Link to={"/Login"}><button className="get-started-button">Get Started</button></Link>
    </div>
    </div>
  );
}
export default App;
