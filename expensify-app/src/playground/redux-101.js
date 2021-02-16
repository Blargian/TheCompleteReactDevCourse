import { createStore } from 'redux';

// Action generators 

const incrementCount = ({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy 
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}={}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',
    count: 0
})

const store = createStore((state = {count: 0},action)=> {

    switch(action.type) {
        case 'INCREMENT': 
            return {
                count: state.count+action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count-decrementBy
            };
        case 'RESET':
            return{
                count: 0
            };
        case 'SET':
            return{
                count: action.count
            };
        default:
            return state;
    };
    
});

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

//To increment the count 
// store.dispatch(
//     {
//         type: 'INCREMENT',
//         incrementBy: 5
//     }
//     );

store.dispatch(incrementCount({ incrementBy: 5}))
store.dispatch(incrementCount());
store.dispatch(setCount({count:100}));
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy:2}));

    

