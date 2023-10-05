import { useAuth } from 'hooks/useAurh';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { LogoutBtn, Title, UserName, UserWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <UserWrapper>
        <Title>Phonebook</Title>
        <UserName>Welcome, {user.name}</UserName>
        <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
          Logout
        </LogoutBtn>
      </UserWrapper>
    </>
  );
};
