(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fetch = require('node-fetch');
  var isValidUrl = require('@jswork/is-valid-url').default;
  var fs = require('fs');

  var NxFsOpen = nx.declare('nx.FsOpen', {
    statics: {
      fromUrl: function (inUrl) {
        return fetch(inUrl).then((r) => r.buffer());
      },
      fromFile: function (inFilename) {
        return new Promise((resolve, reject) => {
          fs.readFile(inFilename, (err, data) => {
            err ? reject(err) : resolve(data);
          });
        });
      },
      from: function (inTarget) {
        if (Buffer.isBuffer(inTarget)) return inTarget;
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
