console.log("App is running");

// JSX - JavaScript XML
var app = {
    title: 'This is JSX from app jsx',
    subtitle : 'This is some info',
    options:['One','Two']
}

var template =(
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && app.subtitle}
        <p>{app.options.length >0 ? "Here are you options" :"No options"}</p>
    <ul>
        <li>Item one</li>
        <li>Item two</li>
        <li>Item three</li>
    </ul>
    </div>
);
var user = {
    name: 'Mike',
    age: 26,
    location: 'Barcelona'
};
function getLocation(location){
    if(location){
        return <p>Miejscowość: {location}</p>;
    }  
};

var userName ='Mike';
var templateTwo=(
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Wiek: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot);