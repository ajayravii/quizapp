import React, {useState} from 'react';
import Questions from './Questions';
import Button from '@mui/material/Button';
import './Home.css'
function Home(){
    const [isShow,setShow]=useState(false)
    return(
        <div className='main'>
            <h1 className='heading'>Quiz Home</h1>
            <Button className='start' variant="contained" onClick={()=>setShow(true)}>Start</Button>
            {isShow &&
            <div>
             <Questions/>
            </div>}
        </div>
    )
}
export default Home;

















