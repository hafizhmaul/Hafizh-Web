import * as React from 'react';
import { Divider, Layout } from "@/components";
import ProfilePhoto from '@/assets/img/profile-img.png';
import Image from "next/image";
import { config } from '@/utils/config';
import { Tooltip } from 'react-tippy';

const AboutMe = () => {
  return (
    <Layout id={"about-page"} >
      <div id="profile-container" className="flex justify-center">
        <div id="profile-section">
          <div id="aboutme-section" className="flex items-center">
            <div id="aboutme-headline" className="text-yellow-origin text-5xl mr-4 font-bold">About&nbsp;Me</div>
            <Divider height="0.5px" width='-webkit-fill-available' />
          </div>
          <div id="profile-desc" >
            <p>
              Hi, my name is
              <strong className="hover:text-yellow-origin transition-all ease-in">
                <a href='https://www.linkedin.com/in/hafizhmaulana/' target="_blank" rel="noreferrer"> Hafizh</a>
              </strong> and I enjoy bridging the gap between engineering and design, combining my technical knowledge with my keen eye for design to create a beautiful product.
            </p>
            <br />
            <p>
              My focus is on creating engaging, accessible, and performant interfaces for humans.
            </p>
          </div>
          <div id="aboutme-section" className="flex items-center mt-10">
            <div id="aboutme-headline" className="text-yellow-origin text-5xl mr-4 font-bold">Skills&nbsp;and&nbsp;Tools</div>
            <Divider height="0.5px" width='-webkit-fill-available' />
          </div>
          <div id="profile-desc" className="text-lg mt-4">
            <p>
              The skills, tools, and technologies I use to bring your products to life:
            </p>
            <div id="tech-skill-section" className='flex flex-wrap'>
              {config.skillList.map((item, idx) => (
                <Tooltip
                  key={idx}
                  title={item.name}
                  position="top"
                  className='mr-8'
                  html={
                    <div
                      style={{ backgroundColor: `${config.colors.blackSolid}` }}
                      className='inline-block p-2 rounded-md shadow-md text-white border border-yellow-400 pointer-events-none'>
                      {item.name}
                    </div>}
                >
                  <div className='cursor-pointer'>
                    <item.icon className='mt-6 hover:fill-yellow-origin transition-all ease-in' size={30} />
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image src={ProfilePhoto} alt="profile-img" className="profile-image" />
        </div>
      </div>
    </Layout>
  )
};

export default AboutMe;
