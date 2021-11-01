const headers = async () => {
  return [
    {
      source: '/rss',
      headers: [
        {
          key: 'Content-Type',
          value: 'text/xml',
        }
      ]
    }
  ];
}

module.exports = {
  swcMinify: true,
  headers,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};
