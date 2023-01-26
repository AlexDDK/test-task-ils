import { render, screen } from '@testing-library/react';
import App from '../App';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'



describe('App', () => {
  
  const initialState = {
    orderList: {
      orders: [],
      isLoading: false,
      error: ''
    },
    currentOrder: {
      current: {
      id: 0,
      from: {
          lat: 0,
          lng: 0
      },
      to: {
          lat: 0,
          lng: 0
      },
  
     },
     polyline: [],
     isLoading: false,
     error: ''}
  }
  const mockStore = configureStore()
  let store

  it('renders the title "LIST OF ORDERS"', () => {
    store = mockStore(initialState)
    render(<Provider store={store}><App /></Provider>)
    const title = screen.getByText(/LIST OF ORDERS/i);
    expect(title).toBeInTheDocument();
  });

  it('renders the Layout component', () => {
    store = mockStore(initialState)
    render(<Provider store={store}><App /></Provider>)
    const layout = screen.getByTestId('layout');
    expect(layout).toBeInTheDocument();
  });
});

