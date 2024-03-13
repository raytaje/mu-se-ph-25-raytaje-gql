const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        employees: [Employee]
        employee(id: ID!): Employee 
    }
    type Employee {
        id: ID
        name: String
        dob: String
        department: String
        title: String
        avatarUrl: String
    }
`;

module.exports = typeDefs;