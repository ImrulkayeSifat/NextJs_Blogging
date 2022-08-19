import Link from 'next/link';
import React from 'react'
import { IArticle } from '../types'
import Image from 'next/image';
interface IPropTypes{
  article:IArticle;
}

const BlogCard = ({article}:IPropTypes) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className='text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'>
          {article.attributes.Title}
        </h1>
      </Link>

      <div className='flex items-center my-4'>
        <div>
         <Image
            src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.url}`}
            height={40}
            width={40}
        /> 
        </div>
        <span className="text-sm font-bold text-gray-600">
            {article.attributes.author.data.attributes.firstname}{' '}
            {article.attributes.author.data.attributes.lastname} on
            &nbsp;
            <span className="text-gray-400">
                {article.attributes.createdAt}
            </span>
        </span>
      </div>
    </div>
  )
}

export default BlogCard