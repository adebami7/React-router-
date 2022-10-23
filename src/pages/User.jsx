import { useLocation } from 'react-router-dom';

function User() {
  const {
    state: { photo, first, last },
  } = useLocation();

  return (
    <div className="user">
      <header>
        <img src={photo} alt={first} className="skeleton" />
        <h1>
          {first} {last}
        </h1>
      </header>
      <hr />
    </div>
  );
}

export default User;
