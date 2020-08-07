import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(props){
        super(props);
    }

    onComplete = () => this.props.onCompletion(this.props.id)
    
    onDelete = () => this.props.onDeletion(this.props.id);
    
    render(){
        return(
            <>
                <div className="todo-item">
                    <input className="check" type="checkbox" checked={this.props.completed} onChange={this.onComplete}></input>
                    <span className="todo-title" style={{color: this.props.completed ? '#5cd961' : '#2d2d2d'}}>{this.props.title}</span>
                    <button className="del-btn" onClick={this.onDelete}>X</button>
                </div>
            </>
        );
    }
}

export default Item;