/** @type {import('next').NextConfig} */

const nextConfig = {};
if (process.env.NODE_ENV === "development") {
  // we import the utility from the next-dev submodule
  const { setupDevBindings } = require("@cloudflare/next-on-pages/next-dev");

  // we call the utility with the bindings we want to have access to
  setupDevBindings({
    bindings: {
      MY_R2: {
        type: "r2",
        bucketName: "MY_R2",
      },
    },
  });
}

module.exports = nextConfig;
