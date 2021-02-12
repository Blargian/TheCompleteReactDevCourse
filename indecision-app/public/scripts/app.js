'use strict';

var appRoot = document.querySelector('#app');
var visibility = false;

var onClickHandler = function onClickHandler() {
    visibility = !visibility;
    render();
};

var render = function render() {

    var rootElement = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onClickHandler },
            'Show details'
        ),
        visibility ? React.createElement(
            'p',
            null,
            'Some random information'
        ) : undefined
    );
    ReactDOM.render(rootElement, appRoot);
};

render();
