import { gql } from "@apollo/client";
import { getApolloClient } from "../../getApolloClient";
import type { NextApiRequest, NextApiResponse } from 'next';

  const client = getApolloClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const github  = await client.query({
    query: gql`
    {
      user(login: "sunnyzaman") {
        starredRepositories(first: 3) {
          edges {
            cursor
            node {
              id
              name
              description
              languages(first: 5) {
                nodes {
                  name
                  id
                }
              }
            }
          }
        }
      }
    }
    `,
  });
    res.status(200).json({ github })
}