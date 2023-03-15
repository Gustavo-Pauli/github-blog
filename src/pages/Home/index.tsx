import { useState } from 'react'
import { PostCard } from '../../components/PostCard'
import { ProfileCard } from '../../components/ProfileCard'
import { SearchForm } from '../../components/SearchForm'
import { PostsWrapper, ProfileWrapper, SearchWrapper, Wrapper } from './styles'

interface Post {
  id: number
  title: string
  content: string
  timestamp: Date
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: 'JavaScript data types and data structures',
      content: `
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

        let foo = 42; // foo is now a number
        foo = 'bar'; // foo is now a string
        foo = true; // foo is now a boolean
      `,
      timestamp: new Date(),
    },
    {
      id: 2,
      title: 'JavaScript data types and data structures',
      content: `
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

        let foo = 42; // foo is now a number
        foo = 'bar'; // foo is now a string
        foo = true; // foo is now a boolean
      `,
      timestamp: new Date(),
    },
    {
      id: 3,
      title: 'JavaScript data types and data structures',
      content: `
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

        let foo = 42; // foo is now a number
        foo = 'bar'; // foo is now a string
        foo = true; // foo is now a boolean
      `,
      timestamp: new Date(),
    },
  ])

  // async function fetchPosts() {}

  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileCard />
      </ProfileWrapper>
      <SearchWrapper>
        <SearchForm />
      </SearchWrapper>
      <PostsWrapper>
        {posts.map((post: Post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              timestamp={post.timestamp}
            />
          )
        })}
      </PostsWrapper>
    </Wrapper>
  )
}
