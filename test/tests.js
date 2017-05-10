var assert = chai.assert;

suite('temperature', function() {
    test('45C to F', function() {
        original.value = "45C to F";
        calculate();
        assert.deepEqual(converted.innerHTML, "113");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    
    test('32F to C', function() {
        original.value = "32F to C";
        calculate();
        assert.deepEqual(converted.innerHTML, "0");
    });
});