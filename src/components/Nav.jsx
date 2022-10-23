import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav" aria-label="primary-nav">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default Nav;
