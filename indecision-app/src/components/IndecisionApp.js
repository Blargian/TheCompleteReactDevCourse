import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionsModal';

class IndecisionApp extends React.Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    }

    handleDeleteOptions = () =>{
        this.setState(() => ({options: []}));
    }

    handleDeleteOption = (optionToRemove) => {
        console.log(optionToRemove)
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }))
    }

    handlePick = () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption: option
        }));
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option)>-1){
            return 'You already entered that'
        }

        this.setState((prevState)=>({options: prevState.options.concat(option)}))
    }

    handleCloseModal = () => {
        this.setState(()=>({
            selectedOption: undefined
        }))
    }

    componentDidMount() {
        const storedOptions = JSON.parse(localStorage.getItem('options'))
        if(storedOptions){
            this.setState(() => ({
                options: storedOptions
            }))
        } 
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            localStorage.setItem('options',JSON.stringify(this.state.options))
        }
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount!')
    }

    render () {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">

                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}    
                    />
                    <div  className="widget">
                   
                    <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions} 
                        handleDeleteOption={this.handleDeleteOption}   
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                    </div>
                   
                </div>
                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;