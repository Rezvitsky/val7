module.exports = {
  devServer: {
    proxy: {
      '^/graphql': {
        target: 'https://iyqao6d42zegfnz4oa3eynt3be.appsync-api.us-east-1.amazonaws.com/graphql',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
