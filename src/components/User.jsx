import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

/**
 * @typedef UserProps
 * @type {User}
 */

/**
 * @param {UserProps} UserProps
 * @returns {JSX.Element}
 */

function User({ id, index, age, email, first, last, username, photo }) {
  if (index === 22) {
    // Adding this to demonstrate error boundry
    throw new Error('im an error');
  }
  const navigate = useNavigate();
  return (
    <tr
      role="button"
      onClick={() => navigate('user', { state: { first, last, photo } })}
    >
      <td>{index}</td>
      <td>{first}</td>
      <td>{last}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{age}</td>
    </tr>
  );
}

User.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  age: PropTypes.number,
  email: PropTypes.string,
  first: PropTypes.string,
  last: PropTypes.string,
  username: PropTypes.string,
  photo: PropTypes.string,
};

export default User;
