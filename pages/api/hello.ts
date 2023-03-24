import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @typedef {Object} Data
 * @property {string} name - The name of the user
 */

type Data = {
  name: string
}

/**
 * Function to handle a Next.js API request
 *
 * @param {NextApiRequest} req - The request object
 * @param {NextApiResponse<Data>} res - The response object with data of type `Data`
 *
 * @returns {void}
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
