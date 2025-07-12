import Container from "./container/container";
import { useNavigate } from "react-router-dom";

   

const WelcomeScreen=()=>{
 const navigate=useNavigate();
    const handlePlay = ()=>{
        navigate('/start')}
return(
    <> 
   
    <Container>
        <img src="/Astronaut1.png" alt="Astronaut"className=" astronaut w-24 mx-auto my-4"/>
    <h2 className="coiny">Can You Unmask the Mystery</h2>
    <p className="para">Guess the answer correctly, and watch the mystery image slowly come to life! Incorrect gusses keep the mystery
        hidden... How far can you go ?
    </p>
    <button onClick={handlePlay} className=" button-play z-10 mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full"  
  >Play Now</button>
   
    </Container>
   
   
   
   </>
)
}
export default WelcomeScreen;