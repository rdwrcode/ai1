import React from 'react';
import GithubApi from 'github';

const gh = new GithubApi({
  debug: true,
  protocol: "https",
  host: "api.github.com",
  pathPrefix: "/api/v3",
  headers: {
      "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
  },
  Promise: require('bluebird'),
  followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
  timeout: 5000
})

const Github = () => (
  <h2>Github</h2>
);

export default Github;
