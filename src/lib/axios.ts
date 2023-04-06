import axios from 'axios'

export const api = import.meta.env.VITE_GIT_TOKEN
  ? axios.create({
      baseURL: 'https://api.github.com/',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GIT_TOKEN}`,
      },
    })
  : axios.create({
      baseURL: 'https://api.github.com/',
    })
