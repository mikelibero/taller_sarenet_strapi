export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      baseUrl: env('MEDIA_URL'),
    },
  },
});