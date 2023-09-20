/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        // Source Path ( from )
        source: "/",

        // Destination Path ( to )
        destination: "/products/list",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
