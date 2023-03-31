import { PostCard } from '../../components/PostCard'
import { ProfileCard } from '../../components/ProfileCard'
import { SearchForm } from '../../components/SearchForm'
import { PostsWrapper, ProfileWrapper, SearchWrapper, Wrapper } from './styles'
import { GitUserContext, Post } from '../../contexts/GitUserContainer'
import { useContext } from 'react'

export function Home() {
  // async function fetchPosts() {}

  const context = useContext(GitUserContext)

  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileCard />
      </ProfileWrapper>
      <SearchWrapper>
        <SearchForm />
      </SearchWrapper>
      <PostsWrapper>
        {context.posts?.map((post: Post) => {
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
