var container = document.getElementById('container');
function Counter(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click', function () { return el.innerHTML = (_this.count += 1); });
}
new Counter(container);
var filtered = [1, 2, 3].filter(function (x) { return x > 0; });
