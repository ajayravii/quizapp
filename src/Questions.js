import React, { useState,useEffect } from 'react';
import './Home.css'
import data from './QuestionArray.js';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import axios from 'axios';
function Questions() {
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [checked, setChecked] = useState(false);
    const [data,setData]=useState()
    const [loading, setLoading] = useState(true);
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
        if (e.target.value === data[index].ans) {
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
    useEffect(()=>{
         const getData=async ()=>{
            try{
            const res=await axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
            setData(()=>{
                const data=res?.data?.results?.map((q)=>{
                    return {
                        que: q?.question,
                        a: q?.incorrect_answers?.[0],
                        b: q?.incorrect_answers?.[1],
                        c: q?.incorrect_answers?.[2],
                        d: q?.correct_answer,
                        ans: q?.correct_answer
                    }
                })
                return data
            })
            }
        catch(e){
            console.log(e)
        }
        finally{
            setLoading(false)
        }
        }
         getData()
    },[])
    if(loading){
        return <div>Loading....</div>
    }
    return (
        <>
            <div className='questionstructure'>
                <h3>
                    {index + 1}.{data[index]?.que}<br />
                    a.<input type='radio' name='radio' value={data[index]?.a} onChange={(e) => handleInput(e)} />{data[index]?.a}<br />
                    b.<input type='radio' name='radio' value={data[index]?.b} onChange={(e) => handleInput(e)} />{data[index]?.b}<br />
                    c.<input type='radio' name='radio' value={data[index]?.c} onChange={(e) => handleInput(e)} />{data[index]?.c}<br />
                    d.<input type='radio' name='radio' value={data[index]?.d} onChange={(e) => handleInput(e)} />{data[index]?.d}<br />
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