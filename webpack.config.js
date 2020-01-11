module.exports = {
  devServer: {
    contentBase: './dist',
    proxy: {
      '/stream': 'http://icevision-aig1.ru:8080'
    }
  }
};
