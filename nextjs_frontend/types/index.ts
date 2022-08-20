import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ICollectionResponse<T>{
  data:T;
  meta:IResourceMeta;
}

export interface IResourceMeta{
  pagination : IPagination;
}

export interface IPagination{
  page:number;
  pageSize: number;
  pageCount: number;
  total:number;
}

export interface ICategory{
  id:number;
  attributes:ICategoryAttribute;
}

export interface IPropTypes{
  categories : {
    items:ICategory[]
  };
  articles:{
    items:IArticle[];
  }
}

export interface ICategoryAttribute{
  Title:string;
  Slug : string;
  createdAt :string;
  updatedAt :string;
  publishedAt:string;
}

export interface IArticle {
  id:number;
  attributes:IArticleAttribute;
}

export interface IArticleAttribute {
  Title : string;
  body : string | MDXRemoteSerializeResult;
  Slug : string;
  image : IImageData;
  createdAt : string;
  author : IAuthor;
  shortDescription : string;
}

export interface IAuthor{
  data:{
    attributes:{
      firstname:string;
      lastname:string;
      avatar:{
        data:{
          attributes:{           
                url:string;          
          }
        }
      }
    }
  }
}

export interface IImageData {
  data:{
    attributes:{
      url: any;
      name:string;
      formats:{
        thumbnail: any;
        small:{
          url:string;
        }
      }
    }
  }
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
  filters ?: any;
  sort : any;
  populate:any;
  pagination:{
    page:number;
    pageSize:number;
  }
}