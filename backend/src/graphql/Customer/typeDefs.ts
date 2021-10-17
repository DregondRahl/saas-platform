import gql from 'graphql-tag'

export default gql`
  type Customer {
    id: String!
    active: Boolean!
    tenant: Tenant!
    tenantId: String!
    name: String
    email: String!
    mobile: String
    cognitoUserId: String
    cognitoPoolId: String
    stripeCustomerId: String
    stripeBillingAddress: Json
    stripePaymentMethod: Json
    metaData: Json
    subscriptions(
      where: SubscriptionWhereInput
      orderBy: SubscriptionOrderByWithRelationInput
      cursor: SubscriptionWhereUniqueInput
      take: Int
      skip: Int
      distinct: SubscriptionScalarFieldEnum
    ): [Subscription!]!
    createdAt: DateTime!
    updatedAt: DateTime!
    _count: CustomerCountOutputType
  }

  type Query {
    findUniqueCustomer(where: CustomerWhereUniqueInput!): Customer
    findFirstCustomer(
      where: CustomerWhereInput
      orderBy: [CustomerOrderByWithRelationInput]
      cursor: CustomerWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CustomerScalarFieldEnum]
    ): Customer
    findManyCustomer(
      where: CustomerWhereInput
      orderBy: [CustomerOrderByWithRelationInput]
      cursor: CustomerWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CustomerScalarFieldEnum]
    ): [Customer!]
    findManyCustomerCount(
      where: CustomerWhereInput
      orderBy: [CustomerOrderByWithRelationInput]
      cursor: CustomerWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CustomerScalarFieldEnum]
    ): Int!
    aggregateCustomer(
      where: CustomerWhereInput
      orderBy: [CustomerOrderByWithRelationInput]
      cursor: CustomerWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCustomer
  }

  type Mutation {
    createOneCustomer(data: CustomerCreateInput!): Customer!
    updateOneCustomer(
      data: CustomerUpdateInput!
      where: CustomerWhereUniqueInput!
    ): Customer!
    deleteOneCustomer(where: CustomerWhereUniqueInput!): Customer
    upsertOneCustomer(
      where: CustomerWhereUniqueInput!
      create: CustomerCreateInput!
      update: CustomerUpdateInput!
    ): Customer
    deleteManyCustomer(where: CustomerWhereInput): BatchPayload
    updateManyCustomer(
      data: CustomerUpdateManyMutationInput!
      where: CustomerWhereInput
    ): BatchPayload
  }
`
