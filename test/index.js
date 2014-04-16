var grape = require('grape'),
    unit = require('../');

grape('number to px', function(t){
    t.plan(1);

    t.equal(unit(10, 'px'), '10px');
});

grape('negaive number to px', function(t){
    t.plan(1);

    t.equal(unit(-10, 'px'), '-10px');
});

grape('number to %', function(t){
    t.plan(1);

    t.equal(unit(10, '%'), '10%');
});

grape('negaive number to %', function(t){
    t.plan(1);

    t.equal(unit(-10, '%'), '-10%');
});

grape('number to default (px)', function(t){
    t.plan(1);

    t.equal(unit(10), '10px');
});

grape('negative number to default (px)', function(t){
    t.plan(1);

    t.equal(unit(-10), '-10px');
});

grape('united number to px isnt overridden', function(t){
    t.plan(1);

    t.equal(unit('10%', 'px'), '10%');
});

grape('non-number to unit returns input', function(t){
    t.plan(1);

    t.equal(unit('10.1.2px', 'px'), '10.1.2px');
});

grape('swapped parameters', function(t){
    t.plan(1);

    t.equal(unit('px', 10), '10px');
});

grape('get value from px', function(t){
    t.plan(1);

    t.equal(unit.parse('10px').value, 10);
});

grape('get negative value from px', function(t){
    t.plan(1);

    t.equal(unit.parse('-10px').value, -10);
});


grape('get value from %', function(t){
    t.plan(1);

    t.equal(unit.parse('10%').value, 10);
});

grape('get unit from px', function(t){
    t.plan(1);

    t.equal(unit.parse('10px').unit, 'px');
});

grape('get unit from %', function(t){
    t.plan(1);

    t.equal(unit.parse('10%').unit, '%');
});

grape('get value from non number', function(t){
    t.plan(1);

    t.equal(unit.parse('10.1.2px'), undefined);
});

grape('partial application', function(t){
    t.plan(1);

    t.equal([1,2,3,4].map(unit).join(' '), '1px 2px 3px 4px');
});

grape('partial application with units', function(t){
    t.plan(1);

    t.equal([1,2,3,4].map(unit.bind(null, '%')).join(' '), '1% 2% 3% 4%');
});