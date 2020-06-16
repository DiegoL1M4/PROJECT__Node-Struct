module.exports = {
  dialect: 'postgres',
  host: '192.168.99.101',
  port: '5433',
  username: 'postgres',
  password: 'docker',
  database: 'teste',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
