'use strict';

const writeFile = require('broccoli-file-creator');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  treeForAddon(tree) {
    const generated = writeFile(
      'utils/generated.js',
      'export default function generated() { return "this is a generated value" }'
    );

    return this._super.treeForAddon.call(this, mergeTrees([tree, generated])) ;
  }
};
