import ProfilePhoto from '@/assets/img/profile-img.png';
import { Divider, Layout } from "@/components";
import { config } from '@/utils/config';
import Image from "next/image";
import * as React from 'react';
import { Tooltip } from 'react-tippy';

const AboutMe = () => {
  return (
    <Layout id={"about-page"} >
      <div id="profile-container" className="flex justify-center">
        <div id="profile-section">
          <div id="aboutme-section" className="flex items-center">
            <div id="aboutme-headline" className="text-origin-color text-5xl mr-4 font-bold">About&nbsp;Me</div>
            <Divider height="0.5px" width='-webkit-fill-available' />
          </div>
          <div id="profile-desc" >
            <p>
              Hi, I&apos;m
              <strong className="hover:text-origin-color transition-all ease-in">
                <a href='https://www.linkedin.com/in/hafizhmaulana/' target="_blank" rel="noreferrer"> Hafizh</a>
              </strong> a Frontend Engineer with over 3 years of experience building functional, user-friendly interfaces using React, TypeScript, and modern tools. I’ve worked across industries like E-Learning, FinTech, and Web3, delivering impactful projects such as blockchain integrations and performance-optimized web applications.
            </p>
          </div>
          <div id="aboutme-section" className="flex items-center mt-10">
            <div id="aboutme-headline" className="text-origin-color text-5xl mr-4 font-bold">Skills&nbsp;and&nbsp;Tools</div>
            <Divider height="0.5px" width='-webkit-fill-available' />
          </div>
          <div id="profile-desc" className="text-lg mt-4">
            <p>
              The skills, tools, and technologies I use to bring your products to life:
            </p>
            <div id="tech-skill-section" className='flex flex-wrap'>
              {config?.skillList.map((skill, index) => {
                const Icon = skill.icon; // Ensure this isn't undefined
                if (!Icon) return null; // Skip undefined icons

                return (
                  <Tooltip
                    key={index}
                    title={skill.name}
                    position="bottom"
                    className='mr-8'
                    html={
                      <div
                        style={{ backgroundColor: `${config.colors.blackSolid}` }}
                        className='inline-block p-2 rounded-md shadow-md text-white border border-green-300 pointer-events-none'>
                        {skill.name}
                      </div>}
                  >
                    <span className='cursor-pointer'>
                      <Icon className='mt-6 hover:fill-origin-color transition-all ease-in' size={30} /> {/* Renders the icon */}

                    </span>
                  </Tooltip>
                );
              })}
              {/* {config.skillList.map((item, idx) => (
                <Tooltip
                  key={idx}
                  title={item.name}
                  position="top"
                  className='mr-8'
                  html={
                    <div
                      style={{ backgroundColor: `${config.colors.blackSolid}` }}
                      className='inline-block p-2 rounded-md shadow-md text-white border border-green-300 pointer-events-none'>
                      {item.name}
                    </div>}
                >
                  <span className='cursor-pointer'>
                    <item.icon className='mt-6 hover:fill-origin-color transition-all ease-in' size={30} />
                  </span>
                </Tooltip>
              ))} */}
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
