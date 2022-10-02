import React from 'react'
import { selectOverlay, setOverlay } from '../../app/features/mainReducer'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

const Overlay = () => {
  const isOpen = useAppSelector(selectOverlay);
  const dispatch = useAppDispatch();
  
  return (
    <>
      {isOpen && 
      <div className='fixed left-0 top-0 bg-black/40 w-full h-screen z-50' onClick={() => dispatch(setOverlay(false))}></div>}
    </>
  )
}

export default Overlay