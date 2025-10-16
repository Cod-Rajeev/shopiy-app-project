import React, { useState } from 'react'
import shirt1 from './img/Man shirt/shirt1.jpeg'

function ClickPhoto() {
    const [currentImage, setCurrentImage] = useState('');

    const handleImageChange = (imageUrl) => {
      setCurrentImage(imageUrl);
    };
  return (
    <>
     <div>
      <img id="img" src={currentImage} width="500vh" height="400vh" />
      <hr />
      <ul>
        <li onClick={() => handleImageChange('https://t4.ftcdn.net/jpg/05/70/00/45/360_F_570004598_U8OFHVhDNFVs6qHXDhQd6hij4KHOd1Dq.jpg')}><h1 className="aa">3rd img</h1></li>
        <li className='container' onClick={() => handleImageChange('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUlGP1QLlIqS479k4q85tanUtJbdj91Gffw&usqp=CAU')}><h1 className="aa">  <img className="card-img-top " src={shirt1} height={100}  alt="..."/></h1></li>
        <li onClick={() => handleImageChange('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSn1k5SlENIsRufXup_I8qE_Vt3SNg5dCjQplzq76GticEMhzKp0xKn0zYN-2NeZJOb8&usqp=CAU')}><h1 className="aa">5th img</h1></li>
      </ul>
    </div>     
    </>
  )
}

export default ClickPhoto