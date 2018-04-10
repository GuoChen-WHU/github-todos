import React from 'react';
import styled from 'styled-components';

const IssueItem = ({
  repository: {
    nameWithOwner,
    url: repoUrl
  },
  title,
  url,
  author: {
    login,
    url: authorUrl,
    avatarUrl
  },
  publishedAt
}) => {
  const Wrapper = styled.li`
    margin: 10px 0;
    color: #586069;
    list-style: none;
  `;
  const Repo = styled.a`
    display: inline-block;
    margin-right: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #586069;
    text-decoration: none;
  `;
  const Title = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: #24292e;
    text-decoration: none;
  `;
  const Avatar = styled.img`
    width: 16px;
  `;

  return (
    <Wrapper>
      <Repo href={repoUrl}>{nameWithOwner}</Repo>
      <Title href={url}>{title}</Title>
      <div>
        opened on {publishedAt} by
        <Avatar src={avatarUrl} alt="avatar" /> 
        <a href={authorUrl}>{login}</a>
      </div>
    </Wrapper>
  )
};

export default IssueItem;