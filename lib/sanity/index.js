import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import createSanityClient from "@sanity/client";

import { config, configWithToken } from "./config";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
export const sanityClient = createClient(config);

export const imageBuilder = (source) =>
  createImageUrlBuilder(config).image(source);

export const getFileUrlFromId = (ref) => {
  // Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
  // We don't need the first part, unless we're using the same function for files and images
  const [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
};

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;

export default sanityClient;

// Creating second client for performing mutations on database

export const sanityClient2 = createSanityClient(configWithToken);
