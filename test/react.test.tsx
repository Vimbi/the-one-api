import React from 'react';
import fetch from 'node-fetch';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../src/components/about/about';
import App from '../src/components/app/app';
import Home from '../src/components/home/home';
import SortPanel from '../src/components/sort-panel/sort-panel';

it('render About page', () => {
  const el = render(<About />);
  const innerEl = el.getByTestId("test-div__about");
  expect(innerEl.textContent).toBe("Create About page (stub, blank page with some text)");
});

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByDisplayValue(/Test search value/)).toBeNull();
    fireEvent.change(screen.getByPlaceholderText(/search/), {
      target: { value: "Test search value" }
    });
    expect(screen.queryByDisplayValue(/Test search value/)).toBeInTheDocument();
  })

  it('check SortPanel', () => {
    const {getByLabelText} = render(<SortPanel />);
    const radio: HTMLInputElement = getByLabelText('Name');
    fireEvent.change(radio, {target: {value: 'gender:asc'}});
    expect(radio.value).toBe('gender:asc');
  })
})

describe('Person details', () => {
  test('renders Person details component', async () => {
    render(<App />);

    expect(screen.queryByText(/Person details/)).toBeNull();
    fireEvent.click(screen.getByText('Adaldrida (Bolger) Brandybuck'));
    expect(await screen.findByText(/Person details/)).toBeInTheDocument();
  });
});