'use strict';

console.log('Build it visible');
var onToggle = function onToggle() {

    // if(visible){
    //     visible=false;
    // }else{
    //     visible=true;
    // };
    visible = !visible;
    console.log('Toggle');
    render();
};

var appRoot = document.getElementById('app');

var visible = false;
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visible toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggle },
            visible ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            'p',
            null,
            visible && 'Now you see some details'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
