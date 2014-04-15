# Unit

## What

Adds units to numbers or parses them from united strings.

## Usage

Require:

    var unitr = require('unitr');

Signaute:

    unitr(value [, unit]) -> String

If no unit is passed, it will add 'px'

If the value already has a unit, the unit will not be changed.

## Example

Add 'px' to a number:

    unitr(10); // -> "10px"

Add '%' to a number:

    unitr(10, '%'); // -> "10%"

Attempt Add '%' to a value that is in px:

    unitr('10px', '%'); // -> "10px"

Parse a value:

    unitr.parse('10px'); // -> {value: 10, unit: 'px'}