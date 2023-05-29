import {useState} from 'react';
const Form =({getColor})=>{
    const [color,setColor]=useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        getColor(color);
    }
    return(
        <section className='container'>
        <form className='color-form' onSubmit={handleSubmit}>
            <h4>Color generator</h4>
            <input type='color'value={color} onChange={(e)=>setColor(e.target.value)} ></input>
            <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} placeholder='#f15025'></input>
            <button type='submit' className='btn' style={{background:color}}>submit</button>
        </form>
        </section>
    )
}
export default Form;