import { useAuth } from 'hooks/useAurh';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn && (
        <NavLink to="/goit-react-hw-08-phonebook/contacts"></NavLink>
      )}
    </nav>
  );
};
