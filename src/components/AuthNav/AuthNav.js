import { Link, Wrapperlink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapperlink>
      <Link to="/goit-react-hw-08-phonebook/register">Register</Link>
      <Link to="/goit-react-hw-08-phonebook/login">Log In</Link>
    </Wrapperlink>
  );
};
