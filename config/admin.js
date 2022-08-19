module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'afd265ef1df83c1520ae5391eac069cf'),
  },
});
