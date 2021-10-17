import gql from 'graphql-tag'

export default gql`
  type Subscription {
    id: Int!
    status: subscriptionStatus!
    customer: Customer!
    customerId: String!
    price: Price!
    priceId: String!
    quantity: Int!
    cancelAtPeriodEnd: Boolean!
    currentPeriodStartAt: DateTime
    currentPeriodEndAt: DateTime
    endedAt: DateTime
    cancelAt: DateTime
    canceledAat: DateTime
    trialStartAt: DateTime
    trialEndAt: DateTime
    stripeSubscriptionId: String
    metaData: Json
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    findUniqueSubscription(where: SubscriptionWhereUniqueInput!): Subscription
    findFirstSubscription(
      where: SubscriptionWhereInput
      orderBy: [SubscriptionOrderByWithRelationInput]
      cursor: SubscriptionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SubscriptionScalarFieldEnum]
    ): Subscription
    findManySubscription(
      where: SubscriptionWhereInput
      orderBy: [SubscriptionOrderByWithRelationInput]
      cursor: SubscriptionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SubscriptionScalarFieldEnum]
    ): [Subscription!]
    findManySubscriptionCount(
      where: SubscriptionWhereInput
      orderBy: [SubscriptionOrderByWithRelationInput]
      cursor: SubscriptionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [SubscriptionScalarFieldEnum]
    ): Int!
    aggregateSubscription(
      where: SubscriptionWhereInput
      orderBy: [SubscriptionOrderByWithRelationInput]
      cursor: SubscriptionWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateSubscription
  }

  type Mutation {
    createOneSubscription(data: SubscriptionCreateInput!): Subscription!
    updateOneSubscription(
      data: SubscriptionUpdateInput!
      where: SubscriptionWhereUniqueInput!
    ): Subscription!
    deleteOneSubscription(where: SubscriptionWhereUniqueInput!): Subscription
    upsertOneSubscription(
      where: SubscriptionWhereUniqueInput!
      create: SubscriptionCreateInput!
      update: SubscriptionUpdateInput!
    ): Subscription
    deleteManySubscription(where: SubscriptionWhereInput): BatchPayload
    updateManySubscription(
      data: SubscriptionUpdateManyMutationInput!
      where: SubscriptionWhereInput
    ): BatchPayload
  }
`
