import { Fetcher } from 'swr'

export const usersFetcher: Fetcher<Users, string> = (url) => fetch(url).then((r) => r.json())
