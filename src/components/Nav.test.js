import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from './Nav';

test('render about link', () => {
  const nav = renderer.create(
    <Router>
      <Nav />
    </Router>,
  ).toJSON();
  expect(nav).toMatchSnapshot();
});
