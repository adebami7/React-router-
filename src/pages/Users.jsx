import { useState, useEffect } from 'react';
import ErrorBoundryUser from '../components/ErrorBoundryUser';
import TableSkeletonLoader from '../components/TableSkeletonLoader';
import User from '../components/User';
import RANDOM_USER_API from '../constants';

function Users() {
  /**
   * @type {[User[], React.Dispatch<React.SetStateAction<User[]>>]}
   */
  const [users, setUsers] = useState([]);
  const [requestStatus, setRequestStatus] = useState('loading');
  const [pageIndex, setPageIndex] = useState(0);

  /**
   * @type {[User[], React.Dispatch<React.SetStateAction<User[]>>]}
   */
  const [usersInPage, setUsersInPage] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setRequestStatus('loading');
        const response = await fetch(`${RANDOM_USER_API}?results=100`);

        if (!response.ok) throw new Error('Failed to Fetch users');

        const { results } = await response.json();

        const resultArray = [];

        results.forEach((user) => {
          const userObject = {};
          userObject.id = user.login.uuid;
          userObject.username = user.login.username;
          userObject.first = user.name.first;
          userObject.last = user.name.last;
          userObject.email = user.email;
          userObject.age = user.dob.age;
          userObject.photo = user.picture.medium;
          resultArray.push(userObject);
        });

        setUsers(resultArray);
        setRequestStatus('');
      } catch (error) {
        setRequestStatus('error');
      }
    })();
  }, []);

  useEffect(() => setUsers([]), []);

  useEffect(() => {
    setUsersInPage(() => [...users.slice(pageIndex * 10, pageIndex * 10 + 10)]);
  }, [users, pageIndex]);

  return (
    <div className="users">
      <div>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          {requestStatus === 'loading' && <TableSkeletonLoader />}
          {requestStatus === '' && (
            <tbody>
              {usersInPage.map((user, index) => (
                <ErrorBoundryUser key={user.id}>
                  <User {...user} index={pageIndex * 10 + index + 1} />
                </ErrorBoundryUser>
              ))}
            </tbody>
          )}
        </table>
        <div
          className={`controls ${
            requestStatus === 'loading' ? 'disable-touch' : ''
          }`}
        >
          <button
            type="button"
            aria-describedby="Previus page button"
            aria-label="Previus button"
            aria-disabled={pageIndex === 0}
            className="main"
            disabled={pageIndex === 0}
            onClick={() => setPageIndex((prev) => prev - 1)}
          >
            Prev
          </button>
          {Array.from(Array(10).keys()).map((key) => (
            <button
              key={key}
              className={`${pageIndex === key ? 'active' : ''}`}
              type="button"
              onClick={() => setPageIndex(key)}
            >
              {key + 1}
            </button>
          ))}
          <button
            type="button"
            aria-describedby="Next page button"
            aria-label="Next button"
            aria-disabled={pageIndex === 9}
            className="main"
            disabled={pageIndex === 9}
            onClick={() => setPageIndex((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Users;
