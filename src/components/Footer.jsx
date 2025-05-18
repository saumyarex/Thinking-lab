import React from "react";

function Footer() {
  const quickLinks = ["Home", "About us", " Contact Us"];
  const date = new Date();
  return (
    <div className="bg-[#E2AD28] p-5 mr-0 w-full">
      <div className="grid md:grid-cols-12 grid-cols-1">
        <div className="md:col-span-6 justify-self-center self-center ">
          <img src="/footelogo.svg" alt="Idea lab logo" className=" h-50" />
        </div>
        <div className="md:col-span-2 md:mt-15 m-5 ">
          <h2 className="font-semibold">QUICK LINKS</h2>
          <ul>
            {quickLinks.map((link) => (
              <li
                key={link}
                value={link}
                className="my-3 hover:cursor-pointer font-light hover:font-medium"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 md:mt-15 m-5 w-48">
          <div>
            {/* Address */}
            <h2 className="font-semibold">FIND US</h2>
            <address className="not-italic font-light my-3">
              PixelNest Media 4128 Harborview Blvd, Suite 203 San Mateo, CA
              94403 United States
            </address>

            {/* Contact info */}
            <h1 className="font-semibold">CALL US</h1>
            <div className="font-light my-3">(123)456-7890</div>
            <div className="font-light my-3">info@pixelnest.com</div>
          </div>
        </div>
      </div>

      {/* social media handles */}
      <div className="flex items-center md:justify-start  justify-center mt-10 border-t-2 border-[#ffffff49] mb-2">
        {/* Facebook logo */}
        <div className="w-10 h-10 my-5 mx-2 hover:cursor-pointer ">
          <img src="/facebook.svg" alt="facebook link" />
        </div>

        {/* Twitter logo */}
        <div className="w-8 h-8 my-5 mx-2 hover:cursor-pointer ">
          <img src="/twiiter.svg" alt="twitter link" />
        </div>

        {/* github logo */}
        <div className="w-7 h-7 my-5 mx-2 ml-3 hover:cursor-pointer ">
          <img src="/github.svg" alt="github link" />
        </div>

        {/* linkedin logo */}
        <div className="w-7 h-7 my-5 mx-2 ml-3  hover:cursor-pointer ">
          <img src="/linkedln.svg" alt="linkedin link" />
        </div>
      </div>
      <p className="text-center mb-5">
        &copy; {date.getFullYear()} PixelNest Media. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
