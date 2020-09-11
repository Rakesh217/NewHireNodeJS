const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    allEmployees: [Employees!]!
  }
  type Mutation {
    addEmployee(Employee: Employee!): Employees!
  }
  type Employees {
    _id: ID
    firstName: String!
    lastName: String!
    emailId: String!
    skills: String!
    rate: Int!
    city: String!
    State: String!
    zip: Int!
  }
  input Employee {
    _id: ID
    firstName: String!
    lastName: String!
    emailId: String!
    skills: String!
    rate: Int!
    city: String!
    State: String!
    zip: Int!
  }
`;
