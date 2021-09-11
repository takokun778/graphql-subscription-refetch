import gql from 'graphql-tag';

export const HOGE_LIST = gql`
  {
    hoge {
      id
      foo
      bar
    }
  }
`;

// export const CREATE_HOGE = gql`
//   mutation Hoge($foo: String!, $bar: String!) {
//     createHoge(foo: $foo, bar: $bar) {
//       　id
//       　foo
//       　bar
//     }
//   }
// `;

export const SUBSCRIPTION = gql`
    subscription OnHoge {
    onHoge {
        id
        # foo
        # bar
    }
}
`;