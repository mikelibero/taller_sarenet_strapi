export default () => ({
    upload: {
    config: {
      provider: 'local',
      baseUrl: env('MEDIA_URL'),
    },
  },
});
