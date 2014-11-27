/**
 * Created by andrew on 26.11.14.
 */

function Spy(target, method){
    var newFunction = target[method];

    var result = {
        count: 0
    };

    target[method] = function() {
        result.count++;
        return newFunction.apply(this, arguments);
    };
    return result;
}

module.exports = Spy;