'use strict';

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'an app',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle ? React.createElement(
        'p',
        null,
        app.subtitle
    ) : undefined,
    app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options'
    ) : React.createElement(
        'p',
        null,
        'No options'
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

var user = {
    name: 'Shaun',
    age: 12,
    location: 'South Africa'
};

var getLocation = function getLocation(location) {

    return location ? React.createElement(
        'p',
        null,
        'Location: ',
        location
    ) : undefined;
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);
