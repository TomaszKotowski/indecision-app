console.log('Build it visible');
const onToggle = () => {

    // if(visible){
    //     visible=false;
    // }else{
    //     visible=true;
    // };
    visible = !visible;
    console.log('Toggle');
    render()
};

const appRoot = document.getElementById('app');

let visible = false;
const render = () => {
    const template = (
        <div>
            <h1>Visible toggle</h1>
            <button onClick={onToggle}>{visible ? 'Hide details' : 'Show details'}</button>
            <p>{visible && 'Now you see some details'}</p>
        </div>
    )
    ReactDOM.render(template, appRoot)
};

render()