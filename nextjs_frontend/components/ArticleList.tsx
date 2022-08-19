import React from 'react'
import { IArticle } from '../types'
import BlogCard from './BlogCard'


interface IPropTypes{
  articles:IArticle[]
}
const ArticleList = ({articles}:IPropTypes) => {
  return (
    <div className='grid lg:grid-cols-2 grid-gap gap-16 mt-16'>
      {
        articles.map(article =>{
          return <BlogCard article={article} key={article.id}/>
        })
      }
    </div>
  )
}

export default ArticleList