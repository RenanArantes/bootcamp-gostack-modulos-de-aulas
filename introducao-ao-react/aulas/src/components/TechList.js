import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
    state = {
        newTech: '',
        techs : []
    };
    
    /**
     * Execute when component show on screen.
     */
    componentDidMount() {
        const techs = localStorage.getItem('techs');

        if(techs) {
            this.setState({techs: JSON.parse(techs)})
        }
    }

    /**
     * Execute when component have changes on your`s state and/or props.
     */
    componentDidUpdate(_, prevState) {
        if(prevState !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }

    /**
     * Execute when coponent is deleted.
     */
    componentWillUnmount() {

    }


    handleInputChange = e => {
        this.setState({ newTech: e.target.value });
    }

    handleOnSubmit = e => {
        e.preventDefault();

        this.setState({ 
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
         });
    }

    handleDelete = (tech) => {
        this.setState({
            techs: this.state.techs.filter(t => t !== tech)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h1>{this.state.newTech}</h1>
                <ul>
                    {this.state.techs.map(tech => 
                        <TechItem 
                            key={tech} 
                            tech={tech} 
                            onDelete= {() => this.handleDelete(tech)}
                        />
                    )}
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleInputChange} 
                    value={this.state.newTech}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default TechList;