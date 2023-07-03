module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@fullcalendar/common",
    "@babel/preset-react",
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    "@fullcalendar/interaction",
    "@fullcalendar/react",
    "@fullcalendar/timegrid",
    "react-github-btn",
    "dropzone",
  ],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboards/analytics",
        permanent: true,
      },
    ];
  },
};
