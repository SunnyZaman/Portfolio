import { gql } from "@apollo/client";
import { getApolloClient } from "../../getApolloClient";

export default async function handler(req:any, res:any) {
  const client = getApolloClient();

  try {
    const { data } = await client.query({
      query: gql`
        ...
      `,
    });
    res.status(200).json({ data });
  } catch (e:any) {
    res.status(400).json({ error: e.message });
  }
}