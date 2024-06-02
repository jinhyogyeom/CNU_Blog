import axios, { AxiosResponse } from 'axios';
import { IPost, IResponsePostList } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://34.64.250.51:8080/',
});

// todo (6) api 작성

export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

export const createPost = () => {
  return null;
};

export const getPostById = (id: string): Promise<AxiosResponse<IPost>> => {
  return instance.get(`/posts/${id}`);
};

export const updatePostById = () => {
  return null;
};

export const deletePostById = () => {
  return null;
};