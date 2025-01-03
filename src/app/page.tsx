"use client"
import React from 'react'
import ImageSlider from '../components/ImageSlider'
import BlogCard from '../components/blogcards'
import Subs from '../components/subs'
import Post from '@/components/topblogs'

const Page = () => {
  return (
    <div>
      <ImageSlider/>
      <Post/>
      <BlogCard />
      <Subs/>

    </div>
  )
}

export default Page
