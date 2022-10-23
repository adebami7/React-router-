import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundryUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorExist: false,
    };
  }

  //   componentDidCatch(error, info) {}

  static getDerivedStateFromError() {
    return {
      errorExist: true,
    };
  }

  render() {
    const { errorExist } = this.state;
    const { children } = this.props;

    if (errorExist)
      return (
        <tr style={{ textAlign: 'center' }}>
          <td aria-colspan={6} colSpan="6">
            An Error Occured
          </td>
        </tr>
      );
    return children;
  }
}

ErrorBoundryUser.propTypes = {
  children: PropTypes.element,
};

export default ErrorBoundryUser;
