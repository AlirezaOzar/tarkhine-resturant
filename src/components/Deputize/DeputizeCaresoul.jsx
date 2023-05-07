import image from "../../assets/deputize.jpg";

const DeputizeCaresoul = () => {
    return (  
      <div>  
        <div className='w-full flex flex-col items-center relative'>
            <img className="w-full bg-fixed h-[336px] object-cover" src={image}  alt=''/>      
              <h1 className=' absolute top-1/2 text-center text-xl md:text-4xl lg:text-6xl text-white font-semibold'>همین الان به خانواده بزرگ ترخینه بپیوندید!</h1>
          </div>
       </div> );
}
 
export default DeputizeCaresoul;