import Form from './Form'
import ColorList from './ColorList';
import Values from 'values.js';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [colors,setColors]=useState(new Values('#f15025').all(10));
// console.log(new Values('#f15025').all(10));
// toast.error('error')
const getColor=(color)=>{
  try {
    const newColor= new Values(color).all(10);     //get colors with 10% of shade difference
    setColors(newColor);
  } catch (error) {
    toast.error(error.message)                //display error message using toast library to display on the top of the screen
  }

};
  return (
    <>
    <main>
    <Form getColor={getColor}/>;
    <ColorList colors={colors}/>;
    <ToastContainer position='top-center'/>
  </main>
  </>
  )
};
export default App;
