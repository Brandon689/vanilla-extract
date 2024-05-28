// next.config.mjs
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configuration options can go here
};

export default withVanillaExtract(nextConfig);
