const headers = async () => {
  return [
    {
      source: '/rss.xml',
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
};
