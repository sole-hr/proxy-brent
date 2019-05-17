module.exports = {
  apps: [{
    name: 'proxy-ken',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-15-41-178.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/fec-hratx41.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nike-hratx41-fec/proxy-ken.git',
      path: '/home/ubuntu/proxy-ken',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}