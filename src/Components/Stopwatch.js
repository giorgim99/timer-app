import React, { useEffect, useState, useSelector } from 'react'
import SettingsPopUp from './SettingsPopUp'
import './Stopwatch.css'


function Stopwatch() {

  // dasharray 790px
  
  //progressCircle.style.strokeDasharray = circumference;
  
  // const setProgress = (percent) =>{
    //  progressCircle.style.strokeDashoffset = dasharray - (percent / 100 ) * dasharray;
    
    // }
    
    const [ settingsOpen, setSettingsOpen ] = useState(false) 
    const [ time, setTime ] = useState(0)
    const [ timerOn, setTimerOn ] = useState(false)
    const [ offset, setOffset ] = useState(0)
    // let progress = 10
    // let radius = 125;
    // let circumference = radius * 2 * Math.PI;
    
    // useEffect(()=>{
      //   const progressOffset = ((100 - progress) / 100) * circumference;
      //   setOffset(progressOffset)
      // }, [setOffset, offset, circumference, progress]);
      
      
    // let progressCircle = document.getElementById('progress');
    // const [ progressBarLevels, setProgressBarLevels ] = useState['0px', '90px', '180px', '270px', '360px', '450px', '540px', '630px'] 

    // const LINE_MAX = 1465;
    // const changeLineValue = (ns) => {
    //   let value = LINE_MAX * (ns / 60);
    //   if (ns === 0) {
    //   value = LINE_MAX;
	  //   }
	  //   document.documentElement.style.setProperty("--line-value", "" + value);
    // };


    useEffect(()=>{
      let counter = 0;
        if(timerOn){
        setInterval(()=>{
          counter++;
          if(counter > 9){
            counter = 0;
          }

        }, 1000)
      }
    },[timerOn])

    const handleReset = () =>{
      setTimerOn(false)
      setTime(0)
    }


    // setTime(useSelector((state) => state.timer.timePassed));
    
    // const ns = Math.floor(time / 1000) % 60;
    // changeLineValue(ns);
    
    
    React.useEffect(()=>{
      let interval = null

      if(timerOn){
          interval = setInterval(() => {
              setTime(prevTime=>prevTime+10)
          }, 10)

      }else{
          clearInterval(interval)
      }



    return () => clearInterval(interval)
  }, [timerOn])


 

  return (
  <>
    <div class=''>

      <div class=' flex flex-col content-center items-center p-10 rounded-xl drop-shadow-3xl'>

        <div class=' flex mb-10 bg-[#151932] rounded-full'>
            <button class='m-2 mr-5 ml-3 text-white hover:bg-[#F6716D] px-3 py-2 rounded-full duration-300' onClick={()=>setTimerOn(true)}>Start</button>
            <button class='m-2 mr-2 text-white hover:bg-[#F6716D] px-3 py-2 rounded-full duration-300' onClick={()=> handleReset()}>Reset</button>
        </div>
        
        <div class='p-5 bg-gradient-to-br from-[#151932] to-[#282C51] rounded-full flex justify-center items-center '>
          <svg width='270px' height='270px'>
            <circle r='125' cx='135' cy='135'  id='progress' ></circle>
          </svg>
            <div class=' absolute bg-[#151932] flex flex-col justify-center  items-center gap-2 w-[250px] h-[250px] rounded-full drop-shadow-2xl text-7xl text-white font-semibold '>
                <div class=''>
                    <span>{ ('0' + Math.floor( (time/60000) % 60)).slice(-2) }:</span>
                    <span>{ ('0' + Math.floor( (time/1000) % 60)).slice(-2) }</span>
                </div>
                <button class='m-3 text-white text-3xl hover:bg-[#F6716D] px-3 py-2 rounded-full duration-300' onClick={()=>setTimerOn(false)}>P a u s e</button>
            </div>
        </div>
        
        <i class="fa-sharp fa-solid fa-gear text-3xl text-white filter-none mt-16 hover:text-5xl hover:rotate-90 duration-300 cursor-pointer" onClick={()=>setSettingsOpen(!settingsOpen)} ></i>
      </div>
    </div>
        {settingsOpen && <SettingsPopUp />}
  </>
  )
}

export default Stopwatch