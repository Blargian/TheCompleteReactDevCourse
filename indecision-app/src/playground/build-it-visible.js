
// const appRoot = document.querySelector('#app');
// let visibility = false;

// const onClickHandler = () =>{
//     visibility = !visibility;
//     render();
// }

// const render = () => {

//     const rootElement = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onClickHandler}>Show details</button>
//             {visibility ? <p>Some random information</p> : undefined}
//         </div>
//     );
//     ReactDOM.render(rootElement, appRoot);
// }

// render();

class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
        }

        }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>Show details</button>
            {this.state.visibility ? <p>Some random information</p> : undefined}
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>,document.querySelector('#app'));