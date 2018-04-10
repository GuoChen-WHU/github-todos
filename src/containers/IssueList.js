import React from 'react';
import { Query } from 'react-apollo';
import { Modal } from 'antd';
import { Wrapper, Prompt } from '../components/styled';
import { PAGE_SIZE } from '../constants';
import IssueItem from '../components/IssueItem';
import FetchMore from '../components/FetchMore';

const IssueList = ({ query }) => (
  <Query query={query} variables={{ first: PAGE_SIZE }} notifyOnNetworkStatusChange>
    {({ loading, error, data = {}, fetchMore }) => {
      if (error) {
        Modal.error({ content: error.message });
        return null;
      }
      const { search = {} } = data;
      const { issueCount = 0, nodes = [], pageInfo = {} } = search;

      const issues = nodes.map(({ 
        repository,
        title,
        url,
        author,
        publishedAt
      }) => 
        <IssueItem 
          key={publishedAt}
          repository={repository}
          title={title}
          url={url}
          author={author}
          publishedAt={publishedAt}
        />
      );

      const onFetchMore = () => fetchMore({
        query,
        variables: {
          after: pageInfo.endCursor,
          first: PAGE_SIZE
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newNodes = fetchMoreResult.search.nodes;
          const pageInfo = fetchMoreResult.search.pageInfo;

          return newNodes.length
            ? {
                search: {
                  __typename: previousResult.search.__typename,
                  issueCount: fetchMoreResult.search.issueCount,
                  nodes: [...previousResult.search.nodes, ...newNodes],
                  pageInfo
                }
              }
            : previousResult;
        }
      });

      return (
        <Wrapper>
          <Prompt>{issueCount} items need to be handled.</Prompt>
          {issues}
          <FetchMore 
            loading={loading} 
            hasMore={pageInfo.hasNextPage}
            onFetchMore={onFetchMore}
          />
        </Wrapper>
      );
    }}
  </Query>
);

export default IssueList;