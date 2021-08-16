const { MarkovMachine } = require('./markov');

describe('test MarkovMachine', function () {
  test('output any object', function () {
    let mm = new MarkovMachine('the cat in the hat');
    expect(mm).toEqual(expect.any(Object));
  });

  test('output any string', function () {
    let mm = new MarkovMachine('the cat in the hat');
    let makeText = mm.makeText();

    expect(makeText).toEqual(expect.any(String));
  });
});
