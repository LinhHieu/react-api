module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2121f77cc3ae2d407e3f0111ea4f16ae'),
  },
});
