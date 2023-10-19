"use client"

import React, { useState, useEffect } from 'react'


const Blog = ({ params }) => {

    const [blogData, setBlogData] = useState()

    useEffect(() => {
        const fecthData = async () => {
            if (params.id) {
                const res = await fetch(`http://localhost:4000/posts/${params.id}`)
                if (!res.ok) {
                    console.error('error wile fetching data')
                }

                const data = await res.json()

                setBlogData(data)
            }
        }

        fecthData()
    }, [])

    console.log(blogData)

    return (
        <>
            <h1 className="text-2xl">Specific Blog Page</h1>
            <br />
            <h2 className="text-2xl">{params.id}</h2>
        </>
    )
}

export default Blog;