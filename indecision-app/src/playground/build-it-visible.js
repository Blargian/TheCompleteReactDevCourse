
const appRoot = document.querySelector('#app');
let visibility = false;

const onClickHandler = () =>{
    visibility = !visibility;
    render();
}

const render = () => {

    const rootElement = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onClickHandler}>Show details</button>
            {visibility ? <p>Some random information</p> : undefined}
        </div>
    );
    ReactDOM.render(rootElement, appRoot);
}

render();