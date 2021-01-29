const withImages = require('next-images')
const path = require('path')

module.exports = withImages({
  
      webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')
        config.resolve.alias['hooks'] = path.join(__dirname, 'hooks')
  
        return config
    },

})