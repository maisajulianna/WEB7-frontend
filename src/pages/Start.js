import { Link } from 'react-router-dom';
import symbol from '../pink.jpg';

function Start() {
  return (
    <div className="start">
      <h1>Feedback site</h1>
      <section>
        <Link to="/signup">Sign in</Link>
        <Link to="/login">Log in</Link>
      </section>
      <img src={symbol} alt="symbol" />
    </div>
  );
}

export default Start;