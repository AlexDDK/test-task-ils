const order1 = {
  id: 357,
  from: {
      lat: 59.84660399,
      lng: 30.29496392,
  },
  to: {
      lat: 59.82934196,
      lng: 30.42423701
  }
}

const order2 ={
  id: 358,
  from: {
      lat: 59.82934196,
      lng: 30.42423701,
  },
  to: {
      lat: 59.82761295,
      lng: 30.41705607
  }
}

export const initialState = {
    orderList: {
      orders: [order1, order2],
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
