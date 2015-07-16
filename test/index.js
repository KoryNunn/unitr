var tape = require('tape'),
    unit = require('../');

tape('number to px', function(t){
    t.plan(1);

    t.equal(unit(10, 'px'), '10px');
});

tape('negaive number to px', function(t){
    t.plan(1);

    t.equal(unit(-10, 'px'), '-10px');
});

tape('number to %', function(t){
    t.plan(1);

    t.equal(unit(10, '%'), '10%');
});

tape('negaive number to %', function(t){
    t.plan(1);

    t.equal(unit(-10, '%'), '-10%');
});

tape('number to default (px)', function(t){
    t.plan(1);

    t.equal(unit(10), '10px');
});

tape('negative number to default (px)', function(t){
    t.plan(1);

    t.equal(unit(-10), '-10px');
});

tape('united number to px isnt overridden', function(t){
    t.plan(1);

    t.equal(unit('10%', 'px'), '10%');
});

tape('non-number to unit returns input', function(t){
    t.plan(1);

    t.equal(unit('10.1.2px', 'px'), '10.1.2px');
});

tape('swapped parameters', function(t){
    t.plan(1);

    t.equal(unit('px', 10), '10px');
});

tape('get value from px', function(t){
    t.plan(1);

    t.equal(unit.parse('10px').value, 10);
});

tape('get negative value from px', function(t){
    t.plan(1);

    t.equal(unit.parse('-10px').value, -10);
});


tape('get value from %', function(t){
    t.plan(1);

    t.equal(unit.parse('10%').value, 10);
});

tape('get unit from px', function(t){
    t.plan(1);

    t.equal(unit.parse('10px').unit, 'px');
});

tape('get unit from %', function(t){
    t.plan(1);

    t.equal(unit.parse('10%').unit, '%');
});

tape('get value from non number', function(t){
    t.plan(1);

    t.equal(unit.parse('10.1.2px'), undefined);
});

tape('partial application', function(t){
    t.plan(1);

    t.equal([1,2,3,4].map(unit).join(' '), '1px 2px 3px 4px');
});

tape('partial application with units', function(t){
    t.plan(1);

    t.equal([1,2,3,4].map(unit.bind(null, '%')).join(' '), '1% 2% 3% 4%');
});