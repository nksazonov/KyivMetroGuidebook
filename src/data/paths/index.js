const m1 = require('./M1.json')
const m2 = require('./M2.json')
const m3 = require('./M3.json')
const transfers = require('./transfers.json')

export default paths = m1.concat(m2, m3, transfers);