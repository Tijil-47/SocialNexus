const nextConfig = {
    webpack(config) {
      config.infrastructureLogging = {
        debug: /PackFileCache/,
      };
      return config;
    },
  };
  
  export default nextConfig;
  