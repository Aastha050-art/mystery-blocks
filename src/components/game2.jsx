import React ,{useEffect, useState}from "react";
import Container from "./container/container";
import Feedback from "./feedback";
import Wrong from "./wrong";
import Congratulation from "./congratulation";



const shapes=["circle","square","triangle","oval"];
const getRandomShape=()=> shapes[Math.floor(Math.random()*shapes.length)];





const Game2 =()=>{
  const[blocks,setBlocks]=useState(Array(9).fill(false));
  const [currentShape,setCurrentShape]=useState(getRandomShape());
  const[round,setRound]=useState(0);
  const [score,setScore]=useState(0);
  const[message,setMessage]=useState("");
  const[feedbackLayout,setFeedbackLayout]=useState(null);
  const[congratulation,setCongratulation]=useState(false);
  const[maxwrong,setMaxWrong]=useState(0);


  const handleGuess=(shape)=>{
    const isCorrect=shape===currentShape
    if(isCorrect){
        setFeedbackLayout("correct")
        const nextBlocks=[...blocks];
        const nextIndex= nextBlocks.findIndex((b)=>b=== false);
        if (nextIndex !== -1){
            nextBlocks[nextIndex]=true;
            setBlocks(nextBlocks);
            setScore(score+1);
            setRound(round+1);
            setMessage("correct");
        }
       
      
    }
        else{
            setFeedbackLayout("wrong")
            setMessage (`Wrong!It was ${currentShape}`);
            setMaxWrong(maxwrong+1)
        }
        setTimeout(()=>{
            setFeedbackLayout(null);
             setCurrentShape(getRandomShape());
        },500);
       
    };
    useEffect(()=>{
     if(round===9){
      setCongratulation(true)
    }
      
    },[round])
    
    const resetGame =()=>{
      setBlocks(Array(9).fill(false));
      setCurrentShape(getRandomShape());
      setRound(0);
      setScore(0);
      setMessage("");
      setCongratulation(false)
      setMaxWrong(0);
    };


    return(
      <Container>
      <div className="game-container">
        <h2 className="which-shape">Which shape this is ?</h2>
       <div className="display-shape">
         {currentShape === "circle"&&<div className="newshape circle"></div>}
          {currentShape === "square"&&<div className="newshape square"></div>}
           {currentShape === "triangle"&&<div className="newshape triangle"></div>}
            {currentShape === "oval"&&<div className="newshape oval"></div>}
        </div>
        <ol className="options">
          {shapes.map((shape)=>(
           <li className="shape-list"> <button key={shape}  className="button-option"    onClick={()=>handleGuess(shape)}> {shape}</button></li>
          ))}
        </ol>
        <div className="flex-container">
          <div className="moon-image"/>
          <div className="flex">
            {blocks.map((revealed,idx)=>(
            <div key ={idx} className={`block ${revealed?"revealed" :""}`}
                      style={{backgroundImage:revealed ? 'none ':'url(/single-frame.png)',
                        backgroundSize:'cover',
                      }}    />
             
          ))}
        </div>
        </div>
        <Feedback feedbackLayout={feedbackLayout} maxwrong={maxwrong}/>
        <Wrong maxwrong={maxwrong} resetGame={resetGame} score={score}/>
       <Congratulation congratulation={congratulation} resetGame={resetGame} score={score} />
      
       
     
      </div>  </Container>
    )
  }
  
  export default Game2;

