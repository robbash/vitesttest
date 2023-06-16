export const getToken = async () => Promise.resolve("a token");

export const sendRequest = async () => {
  const token = await getToken();

  console.warn(
    `Using the token >>> ${token} <<< to send my authenticated request`
  );

  return true;
};
