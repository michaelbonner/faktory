import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "226re884",
  dataset: "production",
  useCdn: process.env.NEXT_PUBLIC_VERCEL_ENV === "production",
  apiVersion: "2022-01-31",
});

export default client;
