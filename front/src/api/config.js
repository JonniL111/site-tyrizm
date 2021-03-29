const config = {
  token: '',
  errorHandler: (error) => console.log(error),
};

export function setToken(token) {
  config.token = token;
}

export default config;
