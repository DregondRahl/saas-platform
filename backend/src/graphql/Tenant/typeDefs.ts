import gql from 'graphql-tag'

export default gql`
  type Tenant {
    id: String!
    active: Boolean!
    customer: Customer
    name: String
    metaData: Json
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    findUniqueTenant(where: TenantWhereUniqueInput!): Tenant
    findFirstTenant(
      where: TenantWhereInput
      orderBy: [TenantOrderByWithRelationInput]
      cursor: TenantWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TenantScalarFieldEnum]
    ): Tenant
    findManyTenant(
      where: TenantWhereInput
      orderBy: [TenantOrderByWithRelationInput]
      cursor: TenantWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TenantScalarFieldEnum]
    ): [Tenant!]
    findManyTenantCount(
      where: TenantWhereInput
      orderBy: [TenantOrderByWithRelationInput]
      cursor: TenantWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TenantScalarFieldEnum]
    ): Int!
    aggregateTenant(
      where: TenantWhereInput
      orderBy: [TenantOrderByWithRelationInput]
      cursor: TenantWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateTenant
  }

  type Mutation {
    createOneTenant(data: TenantCreateInput!): Tenant!
    updateOneTenant(
      data: TenantUpdateInput!
      where: TenantWhereUniqueInput!
    ): Tenant!
    deleteOneTenant(where: TenantWhereUniqueInput!): Tenant
    upsertOneTenant(
      where: TenantWhereUniqueInput!
      create: TenantCreateInput!
      update: TenantUpdateInput!
    ): Tenant
    deleteManyTenant(where: TenantWhereInput): BatchPayload
    updateManyTenant(
      data: TenantUpdateManyMutationInput!
      where: TenantWhereInput
    ): BatchPayload
  }
`
