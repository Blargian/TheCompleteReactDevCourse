
// JSX - JavaScript XML

let app = {
    title: 'Indecision App',
    subtitle: 'an app',
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
    );

let userName = 'Shaun';
let age = 26;
let locationPlace = 'South Africa';

var templateTwo = (
    <div>
        <h1>{userName}</h1>
        <p>Age: {age}</p>
        <p>place: {locationPlace}</p>
    </div>
);

var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);