import React from "react";
import Link from 'next/link';

async function getData() {
  const data = await fetch('http://localhost:4000/posts')

  const res = await data.json()

  return res;
}

export default async function Blog() {

  const data = await getData()

  return (
    <>
      <h1 className="text-xl">List of Blogs</h1>
      {
        data.map((blog, index) => {
          return (
            <div key={index} className="border py-3 my-5">
              <h1>{blog.title}</h1>
              <p>{blog.body}</p>
              <small>{blog.author}</small>
              <br />
              <Link href={`/blogs/${blog.id}`} >read more...</Link>
            </div>
          )
        })
      }
    </>
  )
}
