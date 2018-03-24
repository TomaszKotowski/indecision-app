'use strict';

console.log("App is running");

// JSX - JavaScript XML
var app = {
    title: 'This is JSX from app jsx',
    subtitle: 'This is some info',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && app.subtitle,
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are you options" : "No options"
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        )
    )
);
var user = {
    name: 'Mike',
    age: 26,
    location: 'Barcelona'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Miejscowo\u015B\u0107: ',
            location
        );
    }
};

var userName = 'Mike';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Wiek: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
