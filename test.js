describe("difference", function() {

  it("разность массивов [1,2,3] и [2,3] составляет [1]", function() {
    assert.equal(difference([1, 2, 3], [2, 3]), 1);
  });

  it("разность пустого и любого иного массивов - пустой массив", function() {
      assert.equal(difference('', 1), '');
  });

  it("разность массива ['a', 'b'] и пустого массивов - массив ['a', 'b']", function() {
      assert.equal(difference(['a', 'b'], ''), 'a,b');
  });

  it("разность двух пустых массивов - пустой массив", function() {
      assert.equal(difference('', ''), '');
  });

});


describe("intersection", function() {

  it("без аргументов возвращает пустой массив", function() {
    assert.equal(intersection(), '');
  });

  it("для одного массива возвращает данный массив", function() {
    assert.equal(intersection(['one', 'two', 'three']), 'one,two,three');
  });

  it("пересечение непустого массива с пустым дает пустой массив", function() {
    assert.equal(intersection(['stuff'], ''), '');
  });

  it("выполняет пересечение нескольких массивов", function() {
    assert.equal(intersection([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],  [-2, -1, 0, 1, 2, 3, 4]), '1,2,3,4');
  });

});
