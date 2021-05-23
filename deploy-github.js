const ghpages = require('gh-pages')

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/iris1114/iris1114.github.io.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
)
