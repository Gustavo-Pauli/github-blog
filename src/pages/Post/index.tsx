import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PostHeader } from '../../components/PostHeader'
import { GitUserContext } from '../../contexts/GitUserContainer'
import { NotFound } from '../NotFound'
import {
  ContentMarkdown,
  ContentWrapper,
  PostHeaderWrapper,
  Wrapper,
} from './styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from 'styled-components'

export function Post() {
  const context = useContext(GitUserContext)
  const params = useParams<{ postId: string }>()

  // styling for the code blocks
  const theme = useTheme()
  const codeStyle = {
    ...dracula,
    'pre[class*="language-"]': {
      ...dracula['pre[class*="language-"]'],
      background: theme['base-post'],
    },
  }

  const post = context.posts?.find(
    (post) => post.id.toString() === params.postId,
  )

  // console.log(post?.content)

  if (!post) {
    return <NotFound />
  } else {
    return (
      <Wrapper>
        <PostHeaderWrapper>
          <PostHeader post={post} />
        </PostHeaderWrapper>
        <ContentWrapper>
          <ContentMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')}
                    style={codeStyle}
                    language={match[1]}
                    PreTag="div"
                    // {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {post.content}
          </ContentMarkdown>
        </ContentWrapper>
      </Wrapper>
    )
  }
}
