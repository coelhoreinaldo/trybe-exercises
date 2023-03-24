// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

describe('the random joke app...', () => {

  it('fetches a joke', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    //  1 forma de mockar
    // jest.spyOn(global, 'fetch');
    // global.fetch.mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(joke),
    // });

    // 2 forma de mockar 
    //  global.fetch = jest.fn(() => Promise.resolve({
    //   json: () => Promise.resolve(joke),
    // }));

    // 3 forma e a melhor :P 

    global.fetch = jest.fn(async () => ({
      json: async () => joke
    }))

    render(<App />);
    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } },
    );
  });
  it('fetches a joke when click the New Joke button', async () => {
    const joke1 = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    const joke2 = {
      id: '2321312',
      joke: 'Frankenstein enters a bodybuilding competition and finds he has seriously misunderstood the objective.',
      status: 200,
    }

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke1),
    });

    render(<App />)

    const renderedJoke1 = await screen.findByText(joke1.joke);
    expect(renderedJoke1).toBeInTheDocument();
    expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke2),
    });

    const addBtn = screen.getByRole('button', { name: /New Joke/i });

    userEvent.click(addBtn)
    const renderedJoke2 = await screen.findByText(joke2.joke);
    expect(renderedJoke2).toBeInTheDocument();

    const joke1Joke = 'Whiteboards ... are remarkable.'
    expect(screen.queryByText(joke1Joke)).not.toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(2);

  })
})