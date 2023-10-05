import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { Form, LoginBtn, LoginInput, LoginLabel } from './Login.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LoginLabel>
        Email
        <LoginInput type="email" name="email" autoComplete="name" />
      </LoginLabel>
      <LoginLabel>
        Password
        <LoginInput
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </LoginLabel>
      <LoginBtn type="submit">Log In</LoginBtn>
    </Form>
  );
};
