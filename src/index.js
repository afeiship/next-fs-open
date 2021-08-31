(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fetch = require('node-fetch');
  var isValidUrl = require('@jswork/is-valid-url').default;
  var fs = require('fs');
  var util = require('util');

  var NxFsOpen = nx.declare('nx.FsOpen', {
    statics: {
      fromFile: util.promisify(fs.readFile),
      fromUrl: function (inUrl) {
        return fetch(inUrl).then((r) => r.buffer());
      },
      from: function (inTarget) {
        if (Buffer.isBuffer(inTarget)) return Promise.resolve(inTarget);
        var valid = isValidUrl(inTarget);
        var api = valid ? 'fromUrl' : 'fromFile';
        return this[api](inTarget);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxFsOpen;
  }
})();
