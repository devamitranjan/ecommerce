export const navigateTo = (url: URL) => {
  Object.defineProperty(window, 'location', {
    value: {
      ...window.location,
      href: url.href,
      search: url.search,
      pathname: url.pathname
    },
    writable: true
  });
};
