import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>
        Page not found, go back <Link to="/">home</Link>
      </p>
    </div>
  );
}

export default NotFound;
