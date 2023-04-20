import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

describe('LoginScreen', () => {
  test('navigates to CadScreen when the "Cadastrar" button is pressed', () => {
    const { getByText, getByTestId } = render(<LoginScreen />);
    const cadButton = getByText('Cadastrar');
    fireEvent.press(cadButton);
    const title = getByTestId('cad-screen-title');
    expect(title).toBeTruthy();
  });

  test('navigates back to LoginScreen after saving a new user', () => {
    const { getByText, getByTestId } = render(<LoginScreen />);
    const cadButton = getByText('Cadastrar');
    fireEvent.press(cadButton);
    const saveButton = getByText('Salvar');
    fireEvent.press(saveButton);
    const title = getByTestId('login-screen-title');
    expect(title).toBeTruthy();
  });

  test('displays an error message when trying to login without filling any field', () => {
    const { getByText } = render(<LoginScreen />);
    const loginButton = getByText('Entrar');
    fireEvent.press(loginButton);
    const errorMessage = getByText('Os campos email e senha são obrigatórios');
    expect(errorMessage).toBeTruthy();
  });

  test('displays an error message when trying to login without filling the password field', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);
    const emailInput = getByPlaceholderText('Email');
    const loginButton = getByText('Entrar');
    fireEvent.changeText(emailInput, 'email@example.com');
    fireEvent.press(loginButton);
    const errorMessage = getByText('O campo senha é obrigatório');
    expect(errorMessage).toBeTruthy();
  });

})