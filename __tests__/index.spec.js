(function () {
  const NxFsOpen = require('../src');

  // https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg
  describe('NxFsOpen.methods', function () {
    test('fs read from file should get file', function (done) {
      NxFsOpen.fromFile('__tests__/007S8ZIlgy1gexw87htqhj305k05k74o.jpg').then((res) => {
        expect(res instanceof Buffer).toBe(true);
        done();
      });
    });

    test('fs read from url should get file', function (done) {
      NxFsOpen.fromUrl('https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg').then(
        (res) => {
          expect(res instanceof Buffer).toBe(true);
          done();
        }
      );
    });

    test('fs read from url/file will get the same buffer', (done) => {
      Promise.all([
        NxFsOpen.fromUrl('https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg'),
        NxFsOpen.fromFile('__tests__/007S8ZIlgy1gexw87htqhj305k05k74o.jpg'),
        NxFsOpen.from('__tests__/007S8ZIlgy1gexw87htqhj305k05k74o.jpg'),
        NxFsOpen.from('https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg')
      ]).then((res) => {
        expect(res[0]).toEqual(res[1]);
        expect(res[1]).toEqual(res[2]);
        expect(res[2]).toEqual(res[3]);
        done();
      });
    });
  });
})();
