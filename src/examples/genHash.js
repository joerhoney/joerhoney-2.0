const genHash = (url) => {
  url = url.replace(/(^https:\/\/)/g, "");
  url = url.replace(/(^http:\/\/)/g, "");
  url = url.replace(/(www.)/g, "");
  url = url.replace(/(\.)/g, "_");
  url = url.replace(/[^a-zA-Z0-9_]/g, "");
  return url;
};

export default genHash;
