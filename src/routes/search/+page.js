/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  // Extract 'q' query parameter from the URL
  const searchQuery = url.searchParams.get('q');

  if (!searchQuery) {
    return { props: { data: null } };
  }

  // Construct the API URL with the query
  const apiUrl = `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(searchQuery)}`;
  
  // Make the API request
  const res = await fetch(apiUrl, {
    headers: {
      'Ocp-Apim-Subscription-Key': '0760f20a58f340a4ba3ce10857c43142'
    }
  });
  
  if (res.ok) {
    const results = await res.json();
    return { props: { data: results } };
  } else {
    // Handle potential errors or no data scenarios
    return { props: { data: null } };
  }
}
