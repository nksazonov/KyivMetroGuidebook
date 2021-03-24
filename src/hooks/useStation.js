const stations = require('../data/stations.json');
const lines = require('../data/lines.json');

export function getStation(stationId) {
  return stations.find(st => st.id === stationId);
}

export function getLine(lineId) {
  return lines.find(line => line.id === lineId);
}