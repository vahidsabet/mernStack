import React from 'react';

class TodoList extends React.Component {
    render(){
        return(
            <div className='ui list'>
                <p className='item'>Plan the project 1</p>
                <p className='item'>Take Coffee</p>
                <p className='item'>Sleep</p>
            </div>
        )
    }
}

export default TodoList;