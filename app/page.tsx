import React from 'react';
import Image from "next/image";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Justtin Hoang',
  description: 'Justtin Hoang Official Webpage',
};

export default function Home() {
  return (
    <div>
      <link rel="icon" href="/images/icon.ico" sizes="any" />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-black p-4">
      <div className="flex flex-col md:flex-row items-center gap-5 max-w-screen-lg w-full">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
            Hey! I&apos;m <span className="text-blue-600 dark:text-blue-500">Justtin Hoang</span>
          </h1>
          <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-black">“You can’t add more days to your life but you can add more life to your days.”</p>
          <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-black">
            I am a full-stack developer who loves to create. I enjoy many aspects of life like figuring out how to get around a foreign country, finding the perfect ratios of making the perfect coffee, or making life-lasting connections with strangers. I just graduated from Toronto Metropolitan University and am now seeking a full-time position.
          </p>
          <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-black">
            I am experienced working in diverse work cultures from working with startups to large corporations. My go-to technologies are React and Django. I am capable of picking up new technologies for new projects. I believe that software development is reliant on the developer’s mind.
          </p>
          <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-black">
            Feel free to connect with me on <a href="https://www.linkedin.com/in/justtin-hoang/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">LinkedIn</a>, or email me <a href="mailto:dmj.hoang@gmail.com" className="text-blue-500 underline">here</a>!
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image 
            src="/MyPage/images/portrait.jpg" 
            width={800} 
            height={800} 
            alt="Portrait" 
            quality={100} 
            className="w-[1100px] h-auto md:w-[1100px] md:h-[400px] lg:w-[1100px] lg:h-[400px]" 
          />
        </div>
      </div>
      <div className="mt-5">
        <a href="https://github.com/jhoangy" target="_blank" rel="noopener noreferrer">
          <button className="mr-2">GitHub</button>
        </a>
        <a href="https://drive.google.com/file/d/1TTL4gHCYNdYJ01RIwrUPxUTkT0_cIGZX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="mr-2">Resume</button>
        </a>
        <a href="https://www.linkedin.com/in/justtin-hoang/" target="_blank" rel="noopener noreferrer">
          <button>LinkedIn</button>
        </a>
      </div>
    </div>
    <footer>
      <div>
        <p>&copy; Justtin Hoang 2024</p>
      </div>
    </footer>
  </div>
  );
}
