const API_URL = `${process.env.WORDPRESS_API_URL}`;

const fetchAPI = async <T extends {}>(query: string, { variables = {} } = {}): Promise<T> => {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.append('Authorization', `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`);
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data as T;
}

export default fetchAPI;
