import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { Wrapper, Title } from '../components/styled';
import IssueList from './IssueList';
import { QUERY_ISSUE, QUERY_PR } from '../graphqls';
const MenuItem = Menu.Item;

const pathExp = /\/(\w+)$/;

class App extends Component {
  constructor(props) {
    super(props);
    const match = pathExp.exec(window.location.pathname);
    const currentTab = (match && match[1]) || 'issues';
    this.state = {
      currentTab
    }
  }

  setCurrentTab = (e) => {
    this.setState({ currentTab: e.key });
  }

  render() {
    const { currentTab } = this.state;

    return (
      <Wrapper>
        <header>
          <Title>
            <Icon type="github" style={{ marginRight: 10, fontSize: 36 }}/>
            Todos
          </Title>
          <Menu 
            mode="horizontal" 
            selectedKeys={[currentTab]}
            onClick={this.setCurrentTab}
          >
            <MenuItem key="issues">
              <Link to="/">
                <Icon type="exclamation-circle-o" />Issues
              </Link>
            </MenuItem>
            <MenuItem key="prs">
              <Link to="/prs">
                <Icon type="plus-circle-o" />Pull Requests
              </Link>
            </MenuItem>
          </Menu>
        </header>
        <Switch>
          <Route exact path="/" render={() => <IssueList query={QUERY_ISSUE}/>} />
          <Route exact path="/prs" render={() => <IssueList query={QUERY_PR}/>} />
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
