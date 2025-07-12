const Feedback=({feedbackLayout,maxwrong})=>{
    return(<>
      {feedbackLayout&&(<div className="feedback-overlay">{
        feedbackLayout==="correct"?(<div className="feeback-box">
            <div className="astronaut-2"><img src="Astronaut2.png" alt="astronaut"/></div>
             <img src="./smallrocket.png" alt="rocket" className="rocket-1"/>
              <img src="./smallrocket.png" alt="rocket" className="rocket-2"/>
           <div className="correct-h"> Correct!!</div></div>):
           (<div className="feeback-box">
            <div className="astronaut-2"><img src="wrongastro.png" alt="astronaut"/></div>
              <img src="./smallrocket.png" alt="rocket" className="rocket-1"/>
              <img src="./smallrocket.png" alt="rocket" className="rocket-2"/>
               <div className="correct-h"> Wrong!!</div>
                <p className="life">{3-maxwrong} Life left</p>
            wrong</div>)
        }</div>)}
        </>)
}
export default Feedback;