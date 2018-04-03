'use strict';

console.log("App is running");

// JSX - JavaScript XML
var app = {
    title: 'This is JSX from app jsx',
    subtitle: 'This is some info',
    options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderForm();
    }
};

var removeOptions = function removeOptions() {
    app.options = [];
    renderForm();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
    console.log("onMakeDecision " + randomNum);
};

var appRoot = document.getElementById('app');

var renderForm = function renderForm() {
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove All Options'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderForm();
