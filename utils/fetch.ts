import axios from "axios";

export async function fetch<T> (query: string, variables?: object): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MASTER_TOKEN}`,
  };
  const requestBody = {
    query,
  };
  if (variables) {
    requestBody['variables'] = variables;
  }
  const options = {
    method: "POST",
    url: process.env.NEXT_PUBLIC_URL,
    headers,
    data: JSON.stringify(requestBody),
  };

  return axios(options)
  .then((res) => res.data.data)
  .catch((error) => {
    throw {
      error,
    };
  })
};
