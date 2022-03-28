// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}[]

type Error = {
  error: number
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>,
) {
  if (req.method === 'GET') {
    res.status(200).json([{ name: 'John Doe' }])
  } else {
    res.status(405).json({ error: 405, message: 'Method Not Allowed' })
  }
}
