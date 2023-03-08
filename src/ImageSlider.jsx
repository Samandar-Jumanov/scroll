import React, {useState} from 'react'
import './ImageSlider.css'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import {GrLinkNext} from 'react-icons/gr'
import {BiArrowBack} from 'react-icons/bi'

const ImagesSlider = () =>{
    let  [image , setImage] = useState(0)
    const Images = [ { id:1, url:image1 }, {id:2, url:image2},{ id:3, url:image3},{id:4,url:image4}]

    let timeout =  setTimeout(()=>{
      image <  Images.length -1  && setImage(image +1 )
    }, 3000)
  console.log(timeout)
    const getBack =()=>{
      if (image > 0 ){
        setImage(image -1 )
      } 
    }

     return(
    <div className='imageSliderContainer'>
        <h1 style={{color:'white'}}>Auto scroll and handle scroll images
       <p>{Images[image].id} /{Images.length}</p>         
         </h1> 
    <div className="inner">
     
    <img src={Images[image].url} alt=""  className='image'/>
   <br />
   <br />
   <button onClick={getBack} className='btn back'><BiArrowBack/></button>
   <button onClick={()=>{image < Images.length - 1 && setImage(image+1)}} className='btn next'><GrLinkNext/></button>
    </div>
    </div>
    )
}
export default ImagesSlider