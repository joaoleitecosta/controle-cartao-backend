require('dotenv');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialectOptions: {
    ssl: true,
  },
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
};
