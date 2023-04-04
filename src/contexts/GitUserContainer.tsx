import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface User {
  login: string
  avatar_url: string
  html_url: string
  name: string
  followers: number
  bio: string
  company: string
}

export interface Post {
  id: string
  title: string
  content: string
  timestamp: Date
  author: string
  comments: number
  url: string
}

interface GitUserContextType {
  user?: User
  posts?: Post[]
}

interface GitUserProviderProps extends PropsWithChildren {}

export const GitUserContext = createContext({} as GitUserContextType)

export function GitUserProvider({ children }: GitUserProviderProps) {
  const [user, setUser] = useState<User | undefined>()
  const [posts, setPosts] = useState<Post[] | undefined>()

  // async function authenticate() {
  //   const response = await api.get('/octocat', {
  //     headers: {
  //       Authorization: `Bearer ${import.meta.env.GIT_TOKEN}`,
  //     },
  //   })

  //   console.log(response)
  // }

  async function fetchUser() {
    const response = await api.get<User>('/users/gustavo-pauli', {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GIT_TOKEN}`,
      },
    })

    if (response.status === 200 && response.data) {
      setUser({
        login: response.data.login,
        avatar_url: response.data.avatar_url,
        html_url: response.data.html_url,
        name: response.data.name,
        followers: response.data.followers,
        bio: response.data.bio,
        company: response.data.company,
      })
    }

    // show error if api call fails and localstorage is empty
  }

  async function fetchPosts() {
    api
      .get<Post[]>('/repos/gustavo-pauli/github-blog/issues', {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GIT_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response)
        setPosts(
          response.data.map((post: any) => ({
            id: post.id,
            title: post.title,
            content: post.body,
            timestamp: new Date(post.created_at),
            author: post.user.login,
            comments: post.comments,
            url: post.html_url,
          })),
        )
      })
      .catch((error) => {
        console.log(error)
      })

    // if (response.status === 200 && response.data) {
    // } else if (response.status) {
    // show error if api call fails and localstorage is empty
    // }
  }

  useEffect(() => {
    fetchUser()
    fetchPosts()
    console.log('Done fetching')
  }, [])

  return (
    <GitUserContext.Provider value={{ user, posts }}>
      {children}
    </GitUserContext.Provider>
  )
}
