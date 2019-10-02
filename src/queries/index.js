import { GET_LIST } from 'react-admin';
import gql from 'graphql-tag';

export default {
  Organisation: {
    [GET_LIST]: gql`
      fragment organisation on Organisation {
        id
        name
        label
      }
    `
  },
  // Order: {
  //   [GET_LIST]: gql`
  //     fragment order on Order {
  //       id
  //       totalPrice
  //       owner {
  //         id
  //         firstName
  //       }
  //       lineItems {
  //         id
  //         quantity
  //         variant {
  //           id
  //           available
  //           price
  //           product {
  //             id
  //             name
  //           }
  //           selectedOptions {
  //             id
  //             value {
  //               name
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // },
  // Brand: {
  //   [GET_LIST]: gql`
  //     fragment brand on Brand {
  //       id
  //       name
  //       category {
  //         id
  //         name
  //       }
  //       shop {
  //         id
  //         name
  //       }
  //     }
  //   `
  // },
  // Category: {
  //   [GET_LIST]: gql`
  //     fragment category on Category {
  //       id
  //       name
  //       shop {
  //         id
  //         name
  //       }
  //     }
  //   `
  // },
  // Attribute: {
  //   [GET_LIST]: gql`
  //     fragment attribute on Attribute {
  //       id
  //       value
  //       category {
  //         id
  //         name
  //       }
  //       shop {
  //         id
  //         name
  //       }
  //     }
  //   `
  // },
  // Option: {
  //   [GET_LIST]: gql`
  //     fragment option on Option {
  //       id
  //       name
  //       values {
  //         name
  //       }
  //       shop {
  //         id
  //         name
  //       }
  //     }
  //   `
  // }
};
