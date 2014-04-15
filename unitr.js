var parseRegex = /^(-?(?:\d+)|(?:\d+\.\d+)|(?:\.\d+))([^\.]*?)$/;

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
    var parsed = parse(input);

    if(!parsed){
        return input;
    }

    if(parsed.unit == null || parsed.unit == ''){
        parsed.unit = unit || 'px';
    }

    return parsed.value + parsed.unit;
};

module.exports = addUnit;
module.exports.parse = parse;