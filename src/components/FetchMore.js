import React from 'react';
import { Spin, Button } from 'antd';
import { Prompt } from './styled';

const FetchMore = ({ loading, hasMore, onFetchMore }) => 
  loading 
    ? <Spin /> 
    : (hasMore 
        ? <Button onClick={onFetchMore}>More...</Button>
        : <Prompt>No more data.</Prompt>
      );

export default FetchMore;