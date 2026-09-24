import type { NextConfig } from "next";

// Images embedded in the Gmail HTML signature. Listed explicitly rather than
// matched with a wildcard: the header rule also applies to misses, and a
// wildcard let a 404 be cached for a year, which would permanently break the
// image in every recipient's client. A path not listed here just falls back to
// the default short cache. Add new files here; never rename the existing ones.
const SIGNATURE_IMAGES = ["avatar", "avatar-bw", "linkedin", "github", "fiverr", "portfolio"];

const nextConfig: NextConfig = {
  async headers() {
    return SIGNATURE_IMAGES.map((name) => ({
      source: `/signature/${name}.png`,
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        { key: "Access-Control-Allow-Origin", value: "*" },
      ],
    }));
  },
};

export default nextConfig;
