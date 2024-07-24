'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-custom flex flex-col md:flex-row md:h-[60vh]">
      <div className="flex flex-col justify-start items-start md:w-[25%] w-full p-4">
        <Image className="pt-4 mx-auto" src="/footerlogo.png" alt="logo" width={250} height={250} />
        <div className="flex flex-row justify-center items-center space-x-4 mx-auto mt-4">
          <Image src="/socials/linkedin.svg" alt="linkedin" width={25} height={25} />
          <Image src="/socials/facebook.svg" alt="facebook" width={25} height={25} />
          <Image src="/socials/instagram.svg" alt="instagram" width={25} height={25} />
          <Image src="/socials/twitter.svg" alt="twitter" width={25} height={25} />
        </div>
      </div>
      <div className="flex flex-col space-y-1 md:w-[8%] mt-10 mx-8 font-nohemi text-lg">
        <h1 className='text-xl font-bold'>Company</h1>
        <Link href="/contactus">Contact Us</Link>
        <Link href="/contactus">About Us</Link>
        <Link href="/contactus">Terms and Conditions</Link>
        <Link href="/contactus">Contact Us</Link>
      </div>
      <div className="flex flex-col space-y-1 md:w-[10%] mt-10 mx-8 font-nohemi text-lg">
        <h1 className='text-xl font-bold'>Quick Links</h1>
        <Link href="/contactus">Smart Collar</Link>
        <Link href="/contactus">Become Pet Sitter</Link>
        <Link href="/contactus">Become Dog Walker</Link>
        <Link href="/contactus">Blog</Link>
        <Link href="/contactus">Community</Link>
      </div>
      <div className="md:w-[65%] w-full p-8 flex flex-col md:flex-row">
        <div className="md:w-[30%] w-full">
          <h1 className="text-3xl md:text-5xl font-nohemi text-black">Say Hello</h1>
        </div>
        <div className="flex flex-col md:w-[35%] w-full space-y-2 md:mx-4">
          <input type="text" placeholder="Your E-Mail ID" className="p-2 rounded-xl shadow-3d" />
          <input type="text" placeholder="Your Mobile Number" className="p-2 shadow-sm rounded-xl shadow-3d" />
        </div>
        <div className='md:w-[35%] w-full flex flex-col items-end space-y-4 mt-2 md:mt-0'>
          <textarea rows={3} placeholder="Your Message" className="p-2 rounded-xl shadow-3d w-full" />
          <button className='py-1 px-4 bg-[#F97247] rounded-full text-white text-xl font-nohemi'>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;