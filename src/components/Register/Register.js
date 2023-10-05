import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Form, RegBtn, RegInput, RegLabel } from './Register.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <RegLabel>
        Username
        <RegInput type="text" name="name" autoComplete="name" />
      </RegLabel>
      <RegLabel>
        Email
        <RegInput type="email" name="email" autoComplete="name" />
      </RegLabel>
      <RegLabel>
        Password
        <RegInput
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </RegLabel>
      <RegBtn type="submit">Register</RegBtn>
    </Form>
  );
};
