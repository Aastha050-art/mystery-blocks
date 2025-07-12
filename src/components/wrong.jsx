const Wrong=({maxwrong ,resetGame,score})=>{
    return(
       <>  {maxwrong===3&&(<div className=" feedback-overlay"><p className="congratulation">Game Over!!!</p>
        <button className="play-again button-play z-10 w-[200px] mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full"
           onClick={resetGame}>Try Again</button> <p className="score">Score:{score}/9</p>  </div>)} </>
    )
}
export default Wrong;