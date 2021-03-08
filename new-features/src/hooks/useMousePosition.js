import {useEffect, useState} from 'react';

const useMousePosition = () => {
    const [position,setPosition] = useState({x:0, y:0})
    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }
    
    useEffect(()=>{
      console.log('Setting up event')
      document.addEventListener('mousemove', handleMouseMove)
  
      return () => {
        document.removeEventListener('mousemove',handleMouseMove)
      }
    },[])
   
    return position;
  }

export default useMousePosition;