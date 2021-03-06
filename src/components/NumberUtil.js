export const linearSearch = (list, toFind) => {
    let changes = [];
    for (let i = 0; i < list.length; i++) {
        changes.push({ indexChanges: [i] })
        if (toFind === list[i]) {
            break;
        }
    }
    return changes;
}

export const getRandomNumbers = (start, end, n) => {
    let numbers = []
    let rand;
    let range = end - start;

    while (n >= 0) {
        rand = start + ((Math.random() * 100000).toFixed() % range);
        if (numbers.indexOf(rand) === -1) {
            numbers.push(rand)
            n--;
        }
    }
    return numbers;
}

export const delayLoop = (list, fn, eachDelay) => {
    const listLen = list.length;
    let index = 0;
    let interval = setInterval(() => {
        fn(list[index], index);
        index++;
        if (index === listLen) {
            clearInterval(interval);
        }
    }, eachDelay);
    return interval;
}

export const delayIndexLoop = (start, end, fn, eachDelay) => {
    let index = start;
    let interval = setInterval(() => {
        fn(index);
        index++;
        if (index === end) {
            clearInterval(interval);
        }
    }, eachDelay);
    return interval;
}