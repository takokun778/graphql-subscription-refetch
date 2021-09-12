import gql from 'graphql-tag';

export const EVENT_SUBSCRIPTION = gql`
    subscription OnEvent {
    onEvent(id: "id", hogeId: "hogeId") {
        id
    }
}`;
