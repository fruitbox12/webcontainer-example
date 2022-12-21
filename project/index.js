const Hypercore = require('hypercore')
const ram = require('random-access-memory')

module.exports = function () {
  return new Hypercore(ram)
}
