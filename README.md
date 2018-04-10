# github-todos

Remind you of open issues and pull requests need to be handled!

## Install

1. `git clone`
2. `cd github-todos`
3. Since github graphql api requires an OAuth token, you should generate yours following the [steps](https://help.github.com/articles/creating-an-access-token-for-command-line-use/).
4. Create an .env file under the root folder, add your token as `REACT_APP_GITHUB_ACCESS_TOKEN=xxxxx`, and your username as `REACT_APP_GITHUB_LOGIN=xxxxx`.
5. `yarn install & yarn start`