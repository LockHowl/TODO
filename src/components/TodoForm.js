import React, { useState } from 'react';
import './TodoForm.css';
import { BiMessageAltAdd } from 'react-icons/bi';

const TodoForm = ({ setTodos }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = event => {
        event.preventDefault();
        if (title !== "") {
            description.replace(/\n/g, '<br>');
            setTodos(oldTodos => [...oldTodos, { title: title, description: description }]);
            setTitle(''); setDescription('');
        }
    };

    return (
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <input type="text"  className='titleInput' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea type="text"  className='descInput' placeholder='Description (Optional)' value={description} onChange={e => setDescription(e.target.value)} />
                    <button type="submit"><BiMessageAltAdd/></button>
                </div>
            </form>
    );
};

export default TodoForm;