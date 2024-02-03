import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Mywork() {
  return (
    <div className="container mx-auto work">
      <div>
        <h1 className="line"><span>Mywork</span></h1>
      </div>
      <div className="work contianer mx-auto gap-4 grid grid-cols-6 sm:grid sm:grid-cols-4 lg:grid lg:grid-cols-6">
    
          <div className="gal-one xs:col-span-6 sm:col-span-2 lg:col-span-2">
            <Image className="ani" src="/portfolio1.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Setting</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href="#">
                <button>Take look</button>
               </Link>
            </div>
          </div>
          <div className="gal-two xs:col-span-6 sm:col-span-2 lg:col-span-2">
            <Image className="ani" src="/portfolio2.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Setting</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href="#">
                <button>Take look</button>
               </Link>
            </div>
          </div>
          <div className="gal-three xs:col-span-6 sm:col-span-2 lg:col-span-2">
            <Image className="ani" src="/portfolio3.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Setting</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href="#">
                <button>Take look</button>
               </Link>
            </div>
          </div>
       
     
          <div className="gal-four xs:col-span-6 sm:col-span-2">
            <Image className="ani" src="/portfolio4.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Setting</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href="#">
                <button>Take look</button>
               </Link>
            </div>
          </div>
          <div className="gal-five xs:col-span-6 sm:col-span-2">
            <Image className="ani" src="/portfolio5.jpg" width={340} height={400}></Image>
             <div className="hid-div">
               <div>
                <h4>Setting</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href="#">
                <button>Take look</button>
               </Link>
            </div>
          </div>
          <div className="gal-six xs:col-span-6 sm:col-span-2">
            <Image className="ani" src="/portfolio6.jpg" width={340} height={400}></Image>
            <div className="hid-div">
               <div>
                <h4>Setting</h4>
                <h6>By Zain Ikram</h6>
               </div>
               <Link href="#">
                <button>Take look</button>
               </Link>
            </div>
          </div>
        
      </div>
    </div>
  );
}
