import createDataContext from './createDataContext';

const initialState = { departure: '', arrival: '', route: [], active: '' };

const routeReducer = (state, action) => {
  switch(action.type) {
    case 'set_departure':
      return { ...state, departure: action.payload };

    case 'set_arrival':
      return { ...state, arrival: action.payload };

    case 'set_active':
      return { ...state, active: action.payload };

    default:
      return state;
  }
}

const setActive = dispatch => (stationId) => {
  dispatch({ type: 'set_active', payload: stationId });
}

const setDeparture = dispatch => (stationId) => {
  dispatch({ type: 'set_departure', payload: stationId });
}

const setArrival = dispatch => (stationId) => {
  dispatch({ type: 'set_arrival', payload: stationId });
}

const setRouteStation = (dispatch) => (stationId, departure, arrival) => {
  if (!departure) {
    if (stationId === arrival)
     return;

    dispatch({ type: 'set_departure', payload: stationId });
    return;
  }

  if (!arrival) {
    if (stationId === departure)
     return;

    dispatch({ type: 'set_arrival', payload: stationId });
    return;
  }

  dispatch({ type: 'set_active', payload: stationId });
}

export const { Provider, Context } = createDataContext(
  routeReducer,
  { setDeparture, setArrival, setRouteStation, setActive },
  initialState
)