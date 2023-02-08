const apiCall = async ({ url, method = "get", body, headers }) => {
  try {
    const response = await fetch(url, { method, body, headers });
    const data = await response.json();
    return data;
  } catch (error) {
    Promise.reject(error);
  }
};

export default apiCall;
