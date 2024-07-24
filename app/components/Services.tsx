import Image from 'next/image';

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-2 md:px-[3rem] m-5 md:m-10 mb-9 min-h-[90vh]" id='our-services'>
      <div className="w-full md:w-[35%] flex flex-col justify-center items-start space-y-4">
        <h1 className="text-5xl w-[50%] md:text-8xl text-[#3C130E] font-nohemi">Our Services</h1>
        <p className="text-md md:text-xl p-2 font-neue">Easily connect with certified, loving dog walkers through trusted platforms, ensuring your pets well-being and your peace of mind.</p>
        <button className="bg-[#FC6638] rounded-[2rem] py-2 px-4 md:px-7 text-lg md:text-xl text-white font-semibold">Book Now</button>
      </div>
      <div className="w-full md:w-[65%] flex flex-row md:flex-row justify-center items-center md:pl-20 mt-10 md:mt-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start m-2 md:m-10 space-y-4">
          <div className="bg-[#FEEDDD] h-[12rem] w-[10rem] md:h-[25rem] md:w-[22rem] p-2 md:p-8 flex justify-center items-center rounded-tl-[3rem] rounded-br-[3rem] md:rounded-tl-[5rem] md:rounded-br-[5rem] shadow-xl">
            <video width="300" height="300" autoPlay loop muted>
              <source src="/Animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="text-2xl md:text-4xl text-[#3C130E] font-nohemi">Dog Walking</h2>
          <p className='hidden md:block font-neue md:text-md'>Easily connect with certified, loving dog walkers through trusted platforms, ensuring your pets well-being and your peace of mind.`</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start m-2 md:m-10 space-y-4">
          <div className="bg-[#FEEDDD] h-[12rem] w-[10rem] md:h-[25rem] md:w-[22rem] p-2 md:p-8 rounded-tl-[3rem] rounded-br-[3rem] flex justify-center items-center md:rounded-tl-[5rem] md:rounded-br-[5rem] shadow-xl">
            <Image src="/dog_housing.png" alt="Dog Housing" width={225} height={225} />
          </div>
          <h2 className="text-2xl md:text-4xl text-[#3C130E] font-nohemi">Dog Boarding</h2>
          <p className='hidden md:block font-neue md:text-md'>By setting service standards of dog boarding we ensure the hygiene, safety, security and comfort of every stay.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;