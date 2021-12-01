import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

it('Renders Quote page', () => {
  const home = renderer.create(
    <Quote />,
  ).toJSON();
  expect(home).toMatchSnapshot();
});
