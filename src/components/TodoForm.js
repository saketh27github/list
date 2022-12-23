import React,{useState, useEffect, useRef}from 'react';

function TodoForm(props) {
    const [input,setInput] = useState(props.edit ? props.edit.value :'');

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })


    const handleChange = e => {
        setInput(e.target.value);
    };


    // it is refreshing so we dont want that so we add handleSubmit and e.preventDefault()
    const handleSubmit = e => {
        e.preventDefault();
   // and we will add props to store the data

       props.onSubmit({
        id:Math.floor(Math.random() * 10000),
        text:input
       });

       setInput('');
    };


  return (
   <form className='todo-form' onSubmit={handleSubmit}>
    {props.edit ? (
    <>
    <input 
    type='text'  
    placeholder='Update your item'
    value={input}
    name='text'
    className='todo-input edit'
    onChange={handleChange}
    ref={inputRef}
    />

    <button className='todo-button edit'>Update</button>
    </>
    ) : (
    <>
        <input 
        type='text'  
        placeholder='Make a Note'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />
    
        <button className='todo-button'>Add todo </button>
        </>
        )}
    

    </form>
  );
}

export default TodoForm