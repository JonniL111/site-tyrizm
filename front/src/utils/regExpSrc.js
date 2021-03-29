//const page = regExpSrc(str) || 1;

export default (str, word) => {
  if (!word) return null
  const reg = new RegExp(`${word}=\\d*`);
  if (!reg) return null
  const strPage = str.match(reg);
  const index = strPage[0].indexOf('=');
  return strPage[0].slice(index + 1);
};
