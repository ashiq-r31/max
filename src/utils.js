export const fetchApi = async endpoint => {
  const url = `https://music.musicaudience.info/api/v1/music${endpoint}`;
  const options = {
    method: "get",
    headers: {
      Authorization: "apikey cc5e1f8543954fb1bddfa36bfd98"
    }
  };
  const response = await fetch(url, options);
  return response.json();
};

export const debounce = (fn, time) => {
  let timeout;
  return function() {
    const functionCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};
