import React from 'react'

const InfoBlock = () => {
  return (
    <div className="flex justify-center bg-opacity-20 relative">
      <div className='bg-secondary bg-opacity-40 w-4/5 text-text h-full justify-center flex p-8'>
        <div className='mx-auto w-auto justify-center'>
          <div className='grid auto-rows-fixed grid-cols-sm  lg:grid-rows-1 lg:grid-cols-md w-auto h-auto mx-auto'>
            <div className='bg-transparent justify-end flex'>
              <img src="/images/inside_image.jpg" className=' object-fill w-[250px] h-[250px]'/>
            </div>
            <div className='bg-primary bg-opacity-40 h-full col-span-1 row-span-2 lg:col-span-2 lg:row-span-1 '>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officia vitae consequatur quae sapiente deleniti modi libero numquam labore! Voluptate nemo perferendis, quam placeat eligendi iste ducimus doloribus recusandae! Corporis.S
              </p>
            </div>
          </div>
         </div> 
        </div>
    </div>
  )
}

export default InfoBlock