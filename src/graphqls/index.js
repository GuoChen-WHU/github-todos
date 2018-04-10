import gql from 'graphql-tag';

export const QUERY_ISSUE = gql`
  query queryIssue($first: Int, $after: String) { 
    search(query: "user:${process.env.REACT_APP_GITHUB_LOGIN} is:issue state:open", type: ISSUE, first: $first, after: $after) {
      issueCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        ... on Issue {
          repository {
            nameWithOwner
            url
          }
          title
          url
          author {
            login
            url
            avatarUrl
          }
          publishedAt
        }
      }
    }
  }
`

// TODO: only two words diff from QUERY_ISSUE, can they be merged?
export const QUERY_PR = gql`
  query queryPR($first: Int, $after: String) {
    search(query: "user:${process.env.REACT_APP_GITHUB_LOGIN} is:pr state:open", type: ISSUE, first: $first, after: $after) {
      issueCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        ... on PullRequest {
          repository {
            nameWithOwner
            url
          }
          title
          url
          author {
            login
            url
            avatarUrl
          }
          publishedAt
        }
      }
    }
  }
`