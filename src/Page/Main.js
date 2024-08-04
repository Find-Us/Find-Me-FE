import {Link} from 'react-router-dom';
import './Main.css'

function Main() {
  return (
    <div>
      <Link to="/TestHome" className='TestButton'>test</Link>
      <Link to="/Login" className="LoginButton">login</Link>
    </div>
  );
}

export default Main;
