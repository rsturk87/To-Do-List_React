import React from 'react';
import Item from './Item'
import './ToDos.css';
import uuid from 'react-uuid';

class ToDos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            items: [
                {title: "Study React", completed: false, id: uuid()},
                {title: "Read a book", completed: false, id: uuid()},
                {title: "Online shopping", completed: false, id: uuid()},
                {title: "Code a new project", completed: false, id: uuid()}
            ]
        }
    }

    addItem = (e) => {
        e.preventDefault();
        this.setState({
            search: '',
            items: this.state.items.concat(
                {
                    title: this.state.search,
                    description: 'Descrição',
                    completed: false,
                    id: uuid()
                }
            )
        })
    }

    searchChange = (e) => this.setState({search: e.target.value});

    onCompletion = (id) => {
        const updatedList = this.state.items.map(
            item => item.id === id ? {...item, completed: !item.completed} : item
        );

        this.setState({
            items: updatedList
        })
    }

    onDeletion = (id) => {
        const updatedList = this.state.items.filter(
            item => item.id !== id
        );

        this.setState({
            items: updatedList
        });
    }

    render(){
        return (
            <div className='todo-list'>
            <h1 className="title">What are you up to today?</h1>
            <form className='AddForm' onSubmit={this.addItem}>
                <input className='textField' type='text' value={this.state.search} onChange={this.searchChange} autoFocus />
                <input className='addButton' type='submit' value='Add' />
            </form>
            <div className='todo-items'>
            {this.state.items.map(
                item => <Item title={item.title} completed={item.completed} onCompletion={this.onCompletion} onDeletion={this.onDeletion} id={item.id} key={item.id} />
            )}
            </div>
            </div>
        );
    }
}

export default ToDos;