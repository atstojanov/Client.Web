import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import configureStore from './store';
import './styles/index.css';
import { InvalidConfiguration } from './pages/InvalidConfiguration';

const graphQLEndpoint =
  process.env.NODE_ENV === 'production'
    ? '/graphql'
    : process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql';

const enableAuthentication = process.env.REACT_APP_AUTHENTICATION_ENABLE !== 'false';

const missingVariables = ['REACT_APP_AUTH_API_SCOPE', 'REACT_APP_AUTH_CLIENT_ID', 'REACT_APP_AUTH_TENANT_ID'].filter(
  variable => enableAuthentication && !process.env[variable]
);

console.log('GraphQL Endpoint: ', graphQLEndpoint);
console.log('Enable Authentication: ', enableAuthentication);

ReactDOM.render(
  <Provider store={configureStore()}>
    {missingVariables.length > 0 ? (
      <InvalidConfiguration missingVariables={missingVariables} />
    ) : (
      <AppContainer graphQLEndpoint={graphQLEndpoint} enableAuthentication={enableAuthentication} />
    )}
  </Provider>,
  document.getElementById('root')
);
