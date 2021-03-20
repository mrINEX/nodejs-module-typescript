function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'subtract':
                total -= value;
                break;
        }
    }
    return total;
}
calculate('subtract', 1, 2, 3, 4, 5);
var list = [1, 2, 3];
var toAdd = [4, 5, 6];
list.push.apply(list, toAdd);
