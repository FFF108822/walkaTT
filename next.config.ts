import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
    output: "export",
    basePath: isProd ? "/walka" : "",
    assetPrefix: isProd ? "/walka" : "",
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? '/walka' : '',
    }
};

export default nextConfig;
