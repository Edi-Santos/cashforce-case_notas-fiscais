const request = (ulr, method, headers, body) => {
  const OPTIONS = {
    method,
    headers,
    body,
  };

  return fetch(url, OPTIONS)
    .then((response) => response.json());
};

export default request;
