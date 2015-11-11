/**
 * Merge objects and concatenate arrays
 */
'use strict';

var merge = require('lodash.merge');
var isarray = require('lodash.isarray');

function configMerger() {
  var args = Array.prototype.slice.call(arguments);
  args.push(function arrayMerger(a, b) {
    if (isarray(a)) {
      return a.concat(b);
    }
    // otherwise use default merge
  });
  return merge.apply(null, args);
}

module.exports = configMerger;
