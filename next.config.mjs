/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en', 'de'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'de',
        localeDetection: true
      },
};

export default nextConfig;
