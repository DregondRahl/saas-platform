import gql from 'graphql-tag'

export default gql`
  type Price {
    id: String!
    active: Boolean!
    product: Product!
    productId: String!
    description: String
    unitAmount: Int
    currency: String
    type: pricingType!
    interval: pricingInterval!
    intervalCount: Int
    trialPeriod: Int
    stripePriceId: String
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
    _count: PriceCountOutputType
  }

  type Query {
    findUniquePrice(where: PriceWhereUniqueInput!): Price
    findFirstPrice(
      where: PriceWhereInput
      orderBy: [PriceOrderByWithRelationInput]
      cursor: PriceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PriceScalarFieldEnum]
    ): Price
    findManyPrice(
      where: PriceWhereInput
      orderBy: [PriceOrderByWithRelationInput]
      cursor: PriceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PriceScalarFieldEnum]
    ): [Price!]
    findManyPriceCount(
      where: PriceWhereInput
      orderBy: [PriceOrderByWithRelationInput]
      cursor: PriceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PriceScalarFieldEnum]
    ): Int!
    aggregatePrice(
      where: PriceWhereInput
      orderBy: [PriceOrderByWithRelationInput]
      cursor: PriceWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePrice
  }

  type Mutation {
    createOnePrice(data: PriceCreateInput!): Price!
    updateOnePrice(
      data: PriceUpdateInput!
      where: PriceWhereUniqueInput!
    ): Price!
    deleteOnePrice(where: PriceWhereUniqueInput!): Price
    upsertOnePrice(
      where: PriceWhereUniqueInput!
      create: PriceCreateInput!
      update: PriceUpdateInput!
    ): Price
    deleteManyPrice(where: PriceWhereInput): BatchPayload
    updateManyPrice(
      data: PriceUpdateManyMutationInput!
      where: PriceWhereInput
    ): BatchPayload
  }
`
