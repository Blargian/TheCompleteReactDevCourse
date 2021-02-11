'use strict';

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'an app'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        ),
        React.createElement(
            'li',
            null,
            'Item 3'
        )
    )
);

var userName = 'Shaun';
var age = 26;
var locationPlace = 'South Africa';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        age
    ),
    React.createElement(
        'p',
        null,
        'place: ',
        locationPlace
    )
);

var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);
