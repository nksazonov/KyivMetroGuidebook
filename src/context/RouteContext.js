import createDataContext from './createDataContext';

const initialState = { departure: '', arrival: '', route: [] };

const routeReducer = (state, action) => {
  switch(action.type) {
    case 'set_departure':
      return { ...state, departure: action.payload };

    default:
      return state;
  }
}

const setDeparture = dispatch => (stationId) => {
  dispatch({ type: 'set_departure', payload: stationId });
}

export const { Provider, Context } = createDataContext(
  routeReducer,
  { setDeparture },
  initialState
)