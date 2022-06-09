const container = document.getElementById('container');

function countdown(initial, final = 0, interval = 1) {

    let current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }

}

countdown(10, 4, 2);
