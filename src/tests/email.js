import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

test('o estado do e-mail foi atualizado corretamente', () => {
  const { getByPlaceholderText } = render(<LoginScreen />);
  const emailInput = getByPlaceholderText('Email');
  fireEvent.changeText(emailInput, 'test@test.com');
  expect(emailInput.props.value).toBe('test@test.com');
});
