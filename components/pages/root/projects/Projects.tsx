"use client"

import React from 'react'
import Image from 'next/image'
import images from '@/components/constants/images'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

// 🧩 Import the animation components
import { CardContainer, CardBody, CardItem } from '../../../ui/card/CardEffect'

const Projects = () => {

  interface DataProjects {
    id:string;
    title:string;
    description:string;
    githubRepo:string;
    domainUrl:string;
    image: string;
    stackUsed:string;
    role: 'Front-end Developer' | 'Full-Stack Developer'
    isComplete: 'In Development' | 'No Domain'
    projectType: 'Personal' | 'Collaborative'
  }

  const data:DataProjects[] = [
    {
      id:'1',
      title: "MVP Intern Attendance Management System",
      description : "Project preview at mvpinterns.vercel.app",
      githubRepo : "",
      domainUrl: "https://mvpinterns.vercel.app",
      image: images.project4.mvpinternpage,
      stackUsed:"Express JS, React, TypeScript",
      role:'Full-Stack Developer',
      isComplete:'In Development',
      projectType:'Personal'
    },
  ];

  return (
    <div id='projects' className='h-full projects-section overflow-hidden '>
      <p className='teko text-[2rem] md:text-[3rem] lg:text-[5rem] text-center text-white mb-8'>Projects</p>
      <div className='flex w-full  '>
        {data.map((el, index) => (
          <CardContainer key={index} className=' flex justify-center items-center w-full  '>
            <CardBody className='flex flex-col justify-center items-center w-[400px] '>
              <p className='text-center text-gray-400 font-bold underline-none hover:underline mb-4 transition delay-150 duration-800'>{el.title} | {el.role}</p>
              <p className='text-gray-400'>{el.projectType}</p>
              <p className='text-gray-400 '>({el.isComplete})</p>
              <div>
                <CardContainer containerClassName="group w-[300px] h-[200px] relative overflow-hidden">
                  <CardBody>
                    <CardItem
                      className="w-full h-full relative group"
                      translateZ={20}
                      rotateX={5}
                      rotateY={5}
                    >
                          <Image
                            src={el.image}
                            alt={el.title}
                            width={600}
                            height={400}
                            className='w-full h-full rounded-lg object-cover'
                          />
                      <div className='z-100 flex justify-center items-end gap-5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60'>
                          {el.githubRepo ? (
                            <Link target='_blank' href={el.githubRepo} className='text-gray-300 flex items-center gap-2'>
                              Github <FaGithub />
                            </Link>
                          ) : null}
                          {el.domainUrl ? (
                            <Link target='_blank' href={el.domainUrl} className='text-gray-300 flex items-center gap-2'>
                              Preview <CgWebsite />
                            </Link>
                          ) : null}
                    </div>
                    </CardItem>   
                  </CardBody>
                </CardContainer>
              </div>
              <div className='w-[300px] h-[150px]'>
                <p className='text-gray-400 text-left'>{el.description} </p>
              </div>
              <p className='text-gray-400 w-[300px] text-center '>Tech Used: {el.stackUsed}</p>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  )
}

export default Projects
