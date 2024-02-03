"use client";

import React from "react";
import { TiThMenu } from "react-icons/ti";
import { IoHomeOutline } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdSportsKabaddi } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";

export default function Service() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="navBar">
        <div className="container mx-auto zain">
          <div className="logo">
            <p>Zain Ikram</p>
          </div>
          <div className="navLink">
            <div onClick={() => setOpen(!open)}>
              <i>
                <TiThMenu />
              </i>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="downpad container mx-auto">
          <nav>
            <ul
              onClick={() => {
                setOpen(false);
              }}
            >
               
              <li>
              <i>
                  <IoHomeOutline />
                </i>
                Home
              </li>
              <li>
                <i>
                  <RiCustomerServiceFill />
                </i>
                Service
              </li>
              <li>
                <i>
                  <MdSportsKabaddi />
                </i>
                Portfolio
              </li>
              <li>
                <i>
                  <IoMdContact />
                </i>
                Contact
              </li>
              <li>
                <i>
                  <SiAboutdotme />
                </i>
                About me
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div>
        <div className="container hori">
          <h1 className="line">
            <span>Service</span>
          </h1>
        </div>
        <div className="service container mx-auto xs:grid grid-cols-4 sm:grid grid-cols-4 md:grid grid-cols-4 lg:grid-cols-4 gap-8">
          <div className="xs:col-span-4  sm:col-span-2 md:col-span-2 lg:col-span-1">
            <div className="circle">
              <i>
                <MdSportsKabaddi />
              </i>
              <h3>Responsive Design</h3>
              <p>
              "Responsive design: Tailored for every screen, captivating user experiences everywhere."
              </p>
            </div>
          </div>
          <div className="xs:col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <div className="circle">
              <i >
                <IoMdContact />
              </i>
              <h3>Clean & Nice</h3>
              <p>
              "Elevating projects with clean precision and a touch of finesse where excellence meets aesthetics in every detail."
              </p>
            </div>
          </div>
          <div className="xs:col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <div className="circle">
              <i>
                <IoHomeOutline />
              </i>
              <h3>Creative Ideas</h3>

              <p>
              "Unleashing creativity beyond boundaries - where ideas transform into innovation."
              </p>
            </div>
          </div>
          <div className="xs:col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <div className="circle">
              <i>
                <IoHomeOutline />
              </i>
              <h3>Support</h3>

              <p>
              "Supporting your success with expertise and care."
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
