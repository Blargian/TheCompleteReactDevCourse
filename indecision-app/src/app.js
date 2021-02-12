
// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'an app',
    options: ['one','two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle ? <p>{app.subtitle}</p> : undefined}
        {app.options.length>0 ? <p>Here are your options</p> : <p>No options</p>}
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
    );

const user = {
    name: 'Shaun',
    age: 12,
    location: 'South Africa'
}

const getLocation = (location) => {

    return location ? <p>Location: {location}</p> : undefined;
    
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);