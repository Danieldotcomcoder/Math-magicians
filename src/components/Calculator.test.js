import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('Renders Calculator page', () => {
  const calc = renderer.create(
    <Calculator />,
  ).toJSON();
  expect(calc).toMatchSnapshot();
});
