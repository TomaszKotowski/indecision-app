console.log("App is running");

// JSX - JavaScript XML
const app = {
    title: 'This is JSX from app jsx',
    subtitle: 'This is some info',
    options: ['One', 'Two']
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderForm();
    }
};

const removeOptions = () => {
    app.options = [];
    renderForm();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log("onMakeDecision " + randomNum);
};

const appRoot = document.getElementById('app');

const renderForm = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && app.subtitle}
            <p>{app.options.length > 0 ? "Here are you options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All Options</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
};
renderForm();

