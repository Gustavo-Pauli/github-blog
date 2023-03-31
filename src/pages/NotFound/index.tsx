// create a 404 page like the Home page
import { Link } from 'react-router-dom'
import { Wrapper } from './styles'

export function NotFound() {
  return (
    <Wrapper>
      <div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <line
              x1="128"
              y1="132"
              x2="128"
              y2="80"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <path
              d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <circle cx="128" cy="172" r="16" />
          </svg>
          <h1>404</h1>
        </div>
        <h2>Post not found</h2>
        <Link to="/">Go back to home</Link>
      </div>
    </Wrapper>
  )
}
