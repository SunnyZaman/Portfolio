import { gql } from "@apollo/client";
import { getApolloClient } from "../../getApolloClient";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
  // const client = getApolloClient();

  // try {
  //   const { data } = await client.query({
  //     query: gql`
  //     {
  //       user(login: "sunnyzaman") {
  //         starredRepositories(first: 3) {
  //           edges {
  //             cursor
  //             node {
  //               id
  //               name
  //               description
  //               languages(first: 5) {
  //                 nodes {
  //                   name
  //                   id
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //     `,
  //   });
  //   res.status(200).json({ data });
  // } catch (e:any) {
  //   res.status(400).json({ error: e.message });
  // }
}