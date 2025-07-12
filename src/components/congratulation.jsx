const Congratulation =({score,resetGame,congratulation})=>{
    return(
        <>
         
        {congratulation&&(<div className=" feedback-overlay"><p className="congratulation">congratulation!!!</p> 
        <button className="play-again button-play z-10 w-[300px] mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full"
           onClick={resetGame}>Play Again</button> <p className="score">Score:{score}/9</p> </div>)}
       
        </>
    )
}
export default Congratulation;