import React, { useState } from 'react';
import './Home.css'
import questionArray from './QuestionArray.js';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
function Questions() {
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [checked, setChecked] = React.useState(false);
    const handleNext = () => {
        if (index < 9) {
            setIndex(index + 1)
        }
    }
    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
        setChecked(false)
    }
    const handleInput = (e) => {
        if (e.target.value === questionArray[index].ans) {
            setScore(prevscore => prevscore + 1)
        }
    }
    const handleFinish = (e) => {
        setChecked(true)
    }
    const handleReset = (e) => {
        window.location.reload();
    }
    const showFinishButton = index === 9
    const icon = (
        <Paper sx={{ m: 1, width: '20rem', height: '5rem', backgroundColor: 'lightblue', pl: 8, pt: 0.5 }} elevation={4}>
            <h1>Your score is {score}</h1>
        </Paper>
    )
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (
        <>
            <div className='questionstructure'>
                <h3>
                    {index + 1}.{questionArray[index].que}<br />
                    a.<input type='radio' name='radio' value={questionArray[index].a} onChange={(e) => handleInput(e)} />{questionArray[index].a}<br />
                    b.<input type='radio' name='radio' value={questionArray[index].b} onChange={(e) => handleInput(e)} />{questionArray[index].b}<br />
                    c.<input type='radio' name='radio' value={questionArray[index].c} onChange={(e) => handleInput(e)} />{questionArray[index].c}<br />
                    d.<input type='radio' name='radio' value={questionArray[index].d} onChange={(e) => handleInput(e)} />{questionArray[index].d}<br />
                </h3>
            </div>
            <div className='buttongroup'>
                <Button variant="contained" onClick={() => handlePrev()} disabled={index === 0}>Prev</Button>
                <Button variant="contained" onClick={() => handleNext()} disabled={index === 9}>Next</Button>
                {showFinishButton && <Button variant="contained" color="success" onClick={() => handleFinish()}>Finish</Button>}
                {checked && <Button variant="outlined" color="secondary" onClick={() => handleReset()}>Reset</Button>}
            </div>
            <Box sx={{ height: 180, width: 130, position: 'relative', zIndex: 1 }}>
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                    {icon}
                </Slide>
            </Box>
        </>
    )
}
export default Questions;