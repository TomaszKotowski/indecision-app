class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false,
            buttonText: 'Show details',
            messege: ''
        }
    }
    handleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visible toggle</h1>
                <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                <p>{this.state.visibility && 'Now you see some details'}</p>
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// OLD VERSION

// console.log('Build it visible');
// const onToggle = () => {
//     visible = !visible;
//     console.log('Toggle');
//     render()
// };

// const appRoot = document.getElementById('app');

// let visible = false;
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visible toggle</h1>
//             <button onClick={onToggle}>{visible ? 'Hide details' : 'Show details'}</button>
//             <p>{visible && 'Now you see some details'}</p>
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// };

// render()