class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handelAddOne = this.handelAddOne.bind(this);
        this.handelMinusOne = this.handelMinusOne.bind(this);
        this.handelReset = this.handelReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'), 10)
        if (!isNaN(count)) {
            this.setState(() => ({ count }))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const num = this.state.count;
            localStorage.setItem('count', num)
            console.log('Did change')
        }
    }
    handelAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handelMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handelReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handelAddOne}>+1</button>
                <button onClick={this.handelMinusOne}>-1</button>
                <button onClick={this.handelReset} >Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// OLD VERSION 

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();



