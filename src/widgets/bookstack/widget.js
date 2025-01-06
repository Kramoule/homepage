import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    shelves: {
      endpoint: "shelves",
    },
    books: {
      endpoint: "books",
    },
    pages: {
      endpoint: "pages",
    },
  },
};

export default widget;
