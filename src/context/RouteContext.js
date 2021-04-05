import createDataContext from './createDataContext';

const initialState = { departure: '', arrival: '', route: [], active: '', selecting: '' };

const routeReducer = (state, action) => {
  switch(action.type) {
    case 'set_departure':
      return { ...state, departure: action.payload };

    case 'set_arrival':
      return { ...state, arrival: action.payload };

    case 'set_active':
      return { ...state, active: action.payload };

    case 'set_selecting':
      return { ...state, selecting: action.payload };

    default:
      return state;
  }
}

const setActive = dispatch => (stationId) => {
  dispatch({ type: 'set_active', payload: stationId });
}

const setDeparture = dispatch => (stationId) => {
  dispatch({ type: 'set_selecting', payload: '' });
  dispatch({ type: 'set_departure', payload: stationId });
}

const setDepartureForced = dispatch => (stationId, arrival) => {
  dispatch({ type: 'set_selecting', payload: '' });

  //forced set departure makes equal arrival set to null
  if (stationId === arrival) {
    dispatch({ type: 'set_arrival', payload: '' });
  }

  dispatch({ type: 'set_departure', payload: stationId });
}

const setArrival = dispatch => (stationId) => {
  dispatch({ type: 'set_arrival', payload: stationId });
  dispatch({ type: 'set_selecting', payload: '' });
}

const setArrivalForced = dispatch => (stationId, departure) => {
  dispatch({ type: 'set_selecting', payload: '' });

  //forced set arrival makes equal departure set to null
  if (stationId === departure) {
    dispatch({ type: 'set_departure', payload: '' });
  }

  dispatch({ type: 'set_arrival', payload: stationId });
}

const setSelecting = dispatch => (type) => {
  dispatch({ type: 'set_selecting', payload: type })
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

  dispatch({ type: 'set_active', payload: stationId }); //is it needed?
}

export const { Provider, Context } = createDataContext(
  routeReducer,
  { setDeparture, setDepartureForced, setArrival, setArrivalForced, setRouteStation, setActive, setSelecting },
  initialState
)