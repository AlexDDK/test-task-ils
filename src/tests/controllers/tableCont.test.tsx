import { fireEvent, render, screen } from '@testing-library/react';
import TableCont from '../../components/controllers/tableCont/TableCont';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialState } from '../testHelper';


describe('TableCont component', () => {

  const mockStore = configureStore()
  let store: any

  beforeEach(() => {
    store = mockStore(initialState);
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Provider store={store} >< TableCont /></Provider>)
  });

  it('renders the Table component', async () => {
    await screen.findByTestId('tableContainer')
  });

  it('dispatches right action on clickHandler', async () => {
    const tableColumn = await screen.findByText('№1');
    const wanted = {
      type: "currentOrder/chooseOrder",
      payload: {
        "id": 357,
        "from": {
          "lat": 59.84660399,
          "lng": 30.29496392
        },
        "to": {
          "lat": 59.82934196,
          "lng": 30.42423701
        }
      }
    }
    expect(store.getActions()).not.toContainEqual(wanted);
    fireEvent.click(tableColumn)
    expect(store.getActions()).toContainEqual(wanted);
  });

});

