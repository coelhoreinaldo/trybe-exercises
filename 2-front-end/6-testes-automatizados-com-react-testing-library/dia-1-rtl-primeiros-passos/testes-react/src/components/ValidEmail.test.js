import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';
// import userEvent from '@testing-library/user-event';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

// test('it should not shows the email if the submit btn hasnt been clicked', () => {
//   const EMAIL_USER = 'email@email.com';
//   render(<ValidEmail email={ EMAIL_USER } />);
//   const isValid = screen.getByText('Email Válido');
//   const inputEmail = screen.getByTestId('id-email-user');

//   userEvent.type(inputEmail, EMAIL_USER);
//   expect(isValid).not.toBeInTheDocument();

// })

test('it should not shows the email if the submit btn hasnt been clicked', () => {
  render(<ValidEmail email="" />)
  const isValidText = screen.queryByTestId('id-is-email-valid');
  expect(isValidText).not.toBeInTheDocument();
});


test('testa cor', () => {
  const EMAIL_USER = 'emailerrado';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'red');
})