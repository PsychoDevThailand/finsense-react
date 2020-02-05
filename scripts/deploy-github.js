const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/PsychoDevThailand/finsense-react',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
