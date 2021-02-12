
// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'an app',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.option.value;

    if (option) {
        app.options.push(option);
        e.target.option.value = '';
    }

    render();
}

const user = {
    name: 'Shaun',
    age: 12,
    location: 'South Africa'
}

const getLocation = (location) => {

    return location ? <p>Location: {location}</p> : undefined;
    
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum)
    render();
}

const appRoot = document.querySelector('#app');

const numbers = [55,23,64,79];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle ? <p>{app.subtitle}</p> : undefined}
            {app.options.length>0 ? <p>Here are your options</p> : <p>No options</p>}
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 1} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>remove</button>
            <ol>
                {app.options.map((option)=> {
                    return <li key={option}>{option}</li>
                })
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
}

render();