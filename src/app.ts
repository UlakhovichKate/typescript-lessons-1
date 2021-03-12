const button = document.querySelector('button');
let appId = 'ula';

function clickHandler(message: string, age: number) {
    //let userName = 'ula';
    console.log('Clicked ' + message);
}

function add(n1: number, n2: number) {
    if(n1 + n2 > 0) {
        return n1 + n2;
    }
}

add(10, 21)

if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'you are welcome', 30));
}
