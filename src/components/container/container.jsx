
import './container.css'

const Container=(props)=>{
    /*const stars = Array.from ({length:19})*/
    return(
        <>
      <div className="my-container">
        <div className='my-header'></div>
          <div className='mystery'><span>Mystery Blocks</span></div>
                {props.children}
          <div className='star-wrapper'>
          <img className="star star-1" alt="star" src="/Star.png"></img>
          <img className="star star-2" alt="star" src="/Star.png"></img>
          <img className="star star-3" alt="star" src="/Star.png"></img>
          <img className="star star-4" alt="star" src="/Star.png"></img>
          <img className="star star-5" alt="star" src="/Star.png"></img>
          <img className="star star-6" alt="star" src="/Star.png"></img>
          <img className="star star-7" alt="star" src="/Star.png"></img>
          <img className="star star-8" alt="star" src="/Star.png"></img>
          <img className="star star-9" alt="star" src="/Star.png"></img>
          <img className="star star-10" alt="star" src="/Star.png"></img>
          <img className="star star-11" alt="star" src="/Star.png"></img>
          <img className="star star-12" alt="star" src="/Star.png"></img>
          <img className="star star-13" alt="star" src="/Star.png"></img>
          <img className="star star-14" alt="star" src="/Star.png"></img>
          <img className="star star-15" alt="star" src="/Star.png"></img>
          <img className="star star-16" alt="star" src="/Star.png"></img>
          <img className="star star-17" alt="star" src="/Star.png"></img>
          <img className="star star-18" alt="star" src="/Star.png"></img>
          <img className="star star-19" alt="star" src="/Star.png"></img>
          </div>
         
          
          <div className='clouds'><img src="/clouds.png" alt="star" /></div>
      </div>
     
      </>
    )
}
export default Container;