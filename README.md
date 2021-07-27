# KyivMetroGuidebook
Mobile app for navigation in Kyiv Metro.

# Features (TODO)
* Get travel time and info about route between stations
* See schedule of last metro trains / trams
* See schedule of stations
* See schemas of stations
* See schemas of exits
* Share exit of station you want to meet near

# Glossary
**KMG** - Kyiv Metro Guidebook

## Related to the topic
**Route** - sequence of stations between start and end ones. Means the same as 'path' therm in graphs theory.

**Departure** - station that marks the start of the Route.

**Arrival** - station that marks the end of the Route.

**Select station** - mark station as Departure or Arrival.

**Deselect station** - remove station from Selected.

**Selecting** - equals to '', 'from' or 'to'. Defines whether station will become Departure or Arrival if pressed in Station search.


## Components
**Map** - React zoomable svg component, which renders Metro map.

**Station search** - React FlatList component, which gives an ability to search and select stations.

**Stations bar** - React component, which renders Departure, Arrival and cross, which Deselects corresponding station when pressed.

**Route block** - React component, which renders duration of the Route and cross, which Deselects Arrival when pressed.
