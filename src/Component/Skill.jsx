import React from 'react'

function Skill() {
  return (
    <>
    <div className="slillContainer w-screen h-screen flex justify-center items-center ">
       <div className="skillBox h-[80vh] w-[80vw] bg-green-300 flex justify-center items-center gap-5 relative " >
        <div className="mainBox border-black border-2 flex flex-col justify-end   list-none h-[40vh] w-[30vw] after:content-['HeapStack'] after:absolute after:bottom-20 after:left-68
">
          <li className='border-b-2 text-xl text-center '>MONOGODB</li>
          <li className='border-b-2 text-xl text-center py-1'>REACT</li>
          <li className='border-b-2 text-xl text-center py-1'>TAILWIND</li>
          <li className='border-b-2 text-xl text-center py-1'>JAVASCRIPT</li>
          <li className='border-b-2 text-xl text-center py-1'>CSS</li>
          <li className='border-b-2 text-xl text-center py-1'>HTML</li>
        </div>
        <div className="secondBox  list-none  h-[40vh] w-[30vw]  flex flex-col justify-end  after:content-['CallStack'] after:absolute after:bottom-20 after:right-9  8
">
          <div className="list w-[25vh] border-2 border-black">
          <li className='border-b-2 text-xl text-center py-1' >C++</li>
          <li className='border-b-2 text-xl text-center py-1'>EXPRESS</li>
          <li className=' text-xl text-center py-1' >NODE JS</li>
          </div>
         
         
         
        </div>
       </div>
    </div>
    </>
  )
}

export default Skill