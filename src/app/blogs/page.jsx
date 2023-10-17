import React from "react";
import Link from 'next/link'

const Page = () => {

  const Blogdata = [
    {
      title: 'Reactjs',
      subTitle: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js',
    },
    {
      title: 'Nextjs',
      subTitle: 'Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.',
    },
  ]

  return (
    <>
      <h1 className="text-3xl" >List of Blogs</h1>
      <br />
      <ul>
        {Blogdata.map((data, index) => {
          return (
            <li key={index}>
              <Link href={`/blogs/${data.title}`} >{data.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
};

export default Page;
