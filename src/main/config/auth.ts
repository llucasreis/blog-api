export default {
  jwt: {
    secret: process.env.APP_SECRET || 'eb8d9c512c90dcc2bcd87635ecbadba3',
    expiresIn: '1d',
  },
};
