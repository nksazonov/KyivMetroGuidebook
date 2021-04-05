import Graph from 'graph-data-structure'
import pathsData from '../data/paths'

const paths = Graph();

for (const path of pathsData) {
  const { from, to, time } = path;
  paths.addEdge(from, to, time);
  paths.addEdge(to, from, time);
}

export function buildRoute(departure, arrival) {
  if (departure && arrival && departure !== arrival) {
    console.log(paths.shortestPath(departure.toString(), arrival.toString()).weight);
    return paths.shortestPath(departure.toString(), arrival.toString());
  } else return [];
}