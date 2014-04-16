var parseRegex = /^(-?(?:\d+|\d+\.\d+|\.\d+))([^\.]*?)$/;

function parse(input){
    var valueParts = parseRegex.exec(input);

    if(!valueParts){
        return;
    }

    return {
        value: parseFloat(valueParts[1]),
        unit: valueParts[2]
    };
}

function addUnit(input, unit){
    var parsedInput = parse(input),
        parsedUnit = parse(unit);

    if(!parsedInput && parsedUnit){
        unit = input;
        parsedInput = parsedUnit;
    }

    if(!isNaN(unit)){
        unit = null;
    }

    if(!parsedInput){
        return input;
    }

    if(parsedInput.unit == null || parsedInput.unit == ''){
        parsedInput.unit = unit || 'px';
    }

    return parsedInput.value + parsedInput.unit;
};

module.exports = addUnit;
module.exports.parse = parse;