const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

const nextConfig = withPayload(
  {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "www.autosaesthetics.com",
          pathname: "**",
        },
      ],
    },
  },
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies
    // and configure the admin route to your Payload CMS.

    // Point to your Payload config (required)
    configPath: path.resolve(__dirname, "src", "payload.config.ts"),

    // Point to custom Payload CSS (optional)
    // cssPath: path.resolve(__dirname, "./css/my-custom-payload-styles.css"),

    // Point to your exported, initialized Payload instance (optional, default shown below`)
    // payloadPath: path.resolve(process.cwd(), "./payload/payloadClient.ts"),

    // Set a custom Payload admin route (optional, default is `/admin`)
    // NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
    adminRoute: "/sell",
  }
);

module.exports = nextConfig;
