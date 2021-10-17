import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> }
  User?: User
  Tenant?: Tenant
  Customer?: Customer
  Product?: Product
  Price?: Price
  Subscription?: Subscription
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregateTenant?: AggregateTenant
  TenantGroupByOutputType?: TenantGroupByOutputType
  AggregateCustomer?: AggregateCustomer
  CustomerGroupByOutputType?: CustomerGroupByOutputType
  AggregateProduct?: AggregateProduct
  ProductGroupByOutputType?: ProductGroupByOutputType
  AggregatePrice?: AggregatePrice
  PriceGroupByOutputType?: PriceGroupByOutputType
  AggregateSubscription?: AggregateSubscription
  SubscriptionGroupByOutputType?: SubscriptionGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  TenantCountAggregateOutputType?: TenantCountAggregateOutputType
  TenantMinAggregateOutputType?: TenantMinAggregateOutputType
  TenantMaxAggregateOutputType?: TenantMaxAggregateOutputType
  CustomerCountOutputType?: CustomerCountOutputType
  CustomerCountAggregateOutputType?: CustomerCountAggregateOutputType
  CustomerMinAggregateOutputType?: CustomerMinAggregateOutputType
  CustomerMaxAggregateOutputType?: CustomerMaxAggregateOutputType
  ProductCountOutputType?: ProductCountOutputType
  ProductCountAggregateOutputType?: ProductCountAggregateOutputType
  ProductMinAggregateOutputType?: ProductMinAggregateOutputType
  ProductMaxAggregateOutputType?: ProductMaxAggregateOutputType
  PriceCountOutputType?: PriceCountOutputType
  PriceCountAggregateOutputType?: PriceCountAggregateOutputType
  PriceAvgAggregateOutputType?: PriceAvgAggregateOutputType
  PriceSumAggregateOutputType?: PriceSumAggregateOutputType
  PriceMinAggregateOutputType?: PriceMinAggregateOutputType
  PriceMaxAggregateOutputType?: PriceMaxAggregateOutputType
  SubscriptionCountAggregateOutputType?: SubscriptionCountAggregateOutputType
  SubscriptionAvgAggregateOutputType?: SubscriptionAvgAggregateOutputType
  SubscriptionSumAggregateOutputType?: SubscriptionSumAggregateOutputType
  SubscriptionMinAggregateOutputType?: SubscriptionMinAggregateOutputType
  SubscriptionMaxAggregateOutputType?: SubscriptionMaxAggregateOutputType
}

export interface User {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.User, {}, string>
  active?: Resolver<Client.User, {}, boolean>
  name?: Resolver<Client.User, {}, string | null>
  email?: Resolver<Client.User, {}, string>
  mobile?: Resolver<Client.User, {}, string | null>
  cognitoUserId?: Resolver<Client.User, {}, string | null>
  cognitoPoolId?: Resolver<Client.User, {}, string | null>
  role?: Resolver<Client.User, {}, Client.UserRole>
  createdAt?: Resolver<Client.User, {}, Date>
  updatedAt?: Resolver<Client.User, {}, Date>
}

export interface Tenant {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Tenant, {}, string>
  active?: Resolver<Client.Tenant, {}, boolean>
  customer?: Resolver<Client.Tenant, {}, Client.Customer | null>
  name?: Resolver<Client.Tenant, {}, string | null>
  metaData?: Resolver<Client.Tenant, {}, any | null>
  createdAt?: Resolver<Client.Tenant, {}, Date>
  updatedAt?: Resolver<Client.Tenant, {}, Date>
}

export interface Customer {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Customer, {}, string>
  active?: Resolver<Client.Customer, {}, boolean>
  tenant?: Resolver<Client.Customer, {}, Client.Tenant>
  tenantId?: Resolver<Client.Customer, {}, string>
  name?: Resolver<Client.Customer, {}, string | null>
  email?: Resolver<Client.Customer, {}, string>
  mobile?: Resolver<Client.Customer, {}, string | null>
  cognitoUserId?: Resolver<Client.Customer, {}, string | null>
  cognitoPoolId?: Resolver<Client.Customer, {}, string | null>
  stripeCustomerId?: Resolver<Client.Customer, {}, string | null>
  stripeBillingAddress?: Resolver<Client.Customer, {}, any | null>
  stripePaymentMethod?: Resolver<Client.Customer, {}, any | null>
  metaData?: Resolver<Client.Customer, {}, any | null>
  subscriptions?: Resolver<
    Client.Customer,
    CustomerSubscriptionsArgs,
    Client.Subscription[] | null
  >
  createdAt?: Resolver<Client.Customer, {}, Date>
  updatedAt?: Resolver<Client.Customer, {}, Date>
  _count?: Resolver<
    Client.Customer,
    {},
    Client.Prisma.CustomerCountOutputType | null
  >
}

export interface Product {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Product, {}, string>
  active?: Resolver<Client.Product, {}, boolean>
  name?: Resolver<Client.Product, {}, string | null>
  image?: Resolver<Client.Product, {}, string | null>
  description?: Resolver<Client.Product, {}, string | null>
  stripeProductId?: Resolver<Client.Product, {}, string | null>
  metaData?: Resolver<Client.Product, {}, any | null>
  prices?: Resolver<Client.Product, ProductPricesArgs, Client.Price[] | null>
  createdAt?: Resolver<Client.Product, {}, Date>
  updatedAt?: Resolver<Client.Product, {}, Date>
  _count?: Resolver<
    Client.Product,
    {},
    Client.Prisma.ProductCountOutputType | null
  >
}

export interface Price {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Price, {}, string>
  active?: Resolver<Client.Price, {}, boolean>
  product?: Resolver<Client.Price, {}, Client.Product>
  productId?: Resolver<Client.Price, {}, string>
  description?: Resolver<Client.Price, {}, string | null>
  unitAmount?: Resolver<Client.Price, {}, number | null>
  currency?: Resolver<Client.Price, {}, string | null>
  type?: Resolver<Client.Price, {}, Client.pricingType>
  interval?: Resolver<Client.Price, {}, Client.pricingInterval>
  intervalCount?: Resolver<Client.Price, {}, number | null>
  trialPeriod?: Resolver<Client.Price, {}, number | null>
  stripePriceId?: Resolver<Client.Price, {}, string | null>
  metaData?: Resolver<Client.Price, {}, any | null>
  subscriptions?: Resolver<
    Client.Price,
    PriceSubscriptionsArgs,
    Client.Subscription[] | null
  >
  createdAt?: Resolver<Client.Price, {}, Date>
  updatedAt?: Resolver<Client.Price, {}, Date>
  _count?: Resolver<Client.Price, {}, Client.Prisma.PriceCountOutputType | null>
}

export interface Subscription {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Subscription, {}, number>
  status?: Resolver<Client.Subscription, {}, Client.subscriptionStatus>
  customer?: Resolver<Client.Subscription, {}, Client.Customer>
  customerId?: Resolver<Client.Subscription, {}, string>
  price?: Resolver<Client.Subscription, {}, Client.Price>
  priceId?: Resolver<Client.Subscription, {}, string>
  quantity?: Resolver<Client.Subscription, {}, number>
  cancelAtPeriodEnd?: Resolver<Client.Subscription, {}, boolean>
  currentPeriodStartAt?: Resolver<Client.Subscription, {}, Date | null>
  currentPeriodEndAt?: Resolver<Client.Subscription, {}, Date | null>
  endedAt?: Resolver<Client.Subscription, {}, Date | null>
  cancelAt?: Resolver<Client.Subscription, {}, Date | null>
  canceledAat?: Resolver<Client.Subscription, {}, Date | null>
  trialStartAt?: Resolver<Client.Subscription, {}, Date | null>
  trialEndAt?: Resolver<Client.Subscription, {}, Date | null>
  stripeSubscriptionId?: Resolver<Client.Subscription, {}, string | null>
  metaData?: Resolver<Client.Subscription, {}, any | null>
  createdAt?: Resolver<Client.Subscription, {}, Date>
  updatedAt?: Resolver<Client.Subscription, {}, Date>
}

export interface Query {
  [key: string]: Resolver<any, any, any>
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findFirstTenant?: Resolver<{}, FindFirstTenantArgs, Client.Tenant | null>
  findManyTenant?: Resolver<{}, FindManyTenantArgs, Client.Tenant[]>
  findManyTenantCount?: Resolver<{}, FindManyTenantArgs, number>
  aggregateTenant?: Resolver<
    {},
    AggregateTenantArgs,
    Client.Prisma.GetTenantAggregateType<AggregateTenantArgs>
  >
  groupByTenant?: Resolver<
    {},
    GroupByTenantArgs,
    Client.Prisma.TenantGroupByOutputType[]
  >
  findUniqueTenant?: Resolver<{}, FindUniqueTenantArgs, Client.Tenant | null>
  findFirstCustomer?: Resolver<
    {},
    FindFirstCustomerArgs,
    Client.Customer | null
  >
  findManyCustomer?: Resolver<{}, FindManyCustomerArgs, Client.Customer[]>
  findManyCustomerCount?: Resolver<{}, FindManyCustomerArgs, number>
  aggregateCustomer?: Resolver<
    {},
    AggregateCustomerArgs,
    Client.Prisma.GetCustomerAggregateType<AggregateCustomerArgs>
  >
  groupByCustomer?: Resolver<
    {},
    GroupByCustomerArgs,
    Client.Prisma.CustomerGroupByOutputType[]
  >
  findUniqueCustomer?: Resolver<
    {},
    FindUniqueCustomerArgs,
    Client.Customer | null
  >
  findFirstProduct?: Resolver<{}, FindFirstProductArgs, Client.Product | null>
  findManyProduct?: Resolver<{}, FindManyProductArgs, Client.Product[]>
  findManyProductCount?: Resolver<{}, FindManyProductArgs, number>
  aggregateProduct?: Resolver<
    {},
    AggregateProductArgs,
    Client.Prisma.GetProductAggregateType<AggregateProductArgs>
  >
  groupByProduct?: Resolver<
    {},
    GroupByProductArgs,
    Client.Prisma.ProductGroupByOutputType[]
  >
  findUniqueProduct?: Resolver<{}, FindUniqueProductArgs, Client.Product | null>
  findFirstPrice?: Resolver<{}, FindFirstPriceArgs, Client.Price | null>
  findManyPrice?: Resolver<{}, FindManyPriceArgs, Client.Price[]>
  findManyPriceCount?: Resolver<{}, FindManyPriceArgs, number>
  aggregatePrice?: Resolver<
    {},
    AggregatePriceArgs,
    Client.Prisma.GetPriceAggregateType<AggregatePriceArgs>
  >
  groupByPrice?: Resolver<
    {},
    GroupByPriceArgs,
    Client.Prisma.PriceGroupByOutputType[]
  >
  findUniquePrice?: Resolver<{}, FindUniquePriceArgs, Client.Price | null>
  findFirstSubscription?: Resolver<
    {},
    FindFirstSubscriptionArgs,
    Client.Subscription | null
  >
  findManySubscription?: Resolver<
    {},
    FindManySubscriptionArgs,
    Client.Subscription[]
  >
  findManySubscriptionCount?: Resolver<{}, FindManySubscriptionArgs, number>
  aggregateSubscription?: Resolver<
    {},
    AggregateSubscriptionArgs,
    Client.Prisma.GetSubscriptionAggregateType<AggregateSubscriptionArgs>
  >
  groupBySubscription?: Resolver<
    {},
    GroupBySubscriptionArgs,
    Client.Prisma.SubscriptionGroupByOutputType[]
  >
  findUniqueSubscription?: Resolver<
    {},
    FindUniqueSubscriptionArgs,
    Client.Subscription | null
  >
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOneTenant?: Resolver<{}, CreateOneTenantArgs, Client.Tenant>
  upsertOneTenant?: Resolver<{}, UpsertOneTenantArgs, Client.Tenant>
  createManyTenant?: Resolver<
    {},
    CreateManyTenantArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneTenant?: Resolver<{}, DeleteOneTenantArgs, Client.Tenant | null>
  updateOneTenant?: Resolver<{}, UpdateOneTenantArgs, Client.Tenant | null>
  updateManyTenant?: Resolver<
    {},
    UpdateManyTenantArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyTenant?: Resolver<
    {},
    DeleteManyTenantArgs,
    Client.Prisma.BatchPayload
  >
  createOneCustomer?: Resolver<{}, CreateOneCustomerArgs, Client.Customer>
  upsertOneCustomer?: Resolver<{}, UpsertOneCustomerArgs, Client.Customer>
  createManyCustomer?: Resolver<
    {},
    CreateManyCustomerArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneCustomer?: Resolver<
    {},
    DeleteOneCustomerArgs,
    Client.Customer | null
  >
  updateOneCustomer?: Resolver<
    {},
    UpdateOneCustomerArgs,
    Client.Customer | null
  >
  updateManyCustomer?: Resolver<
    {},
    UpdateManyCustomerArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyCustomer?: Resolver<
    {},
    DeleteManyCustomerArgs,
    Client.Prisma.BatchPayload
  >
  createOneProduct?: Resolver<{}, CreateOneProductArgs, Client.Product>
  upsertOneProduct?: Resolver<{}, UpsertOneProductArgs, Client.Product>
  createManyProduct?: Resolver<
    {},
    CreateManyProductArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneProduct?: Resolver<{}, DeleteOneProductArgs, Client.Product | null>
  updateOneProduct?: Resolver<{}, UpdateOneProductArgs, Client.Product | null>
  updateManyProduct?: Resolver<
    {},
    UpdateManyProductArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyProduct?: Resolver<
    {},
    DeleteManyProductArgs,
    Client.Prisma.BatchPayload
  >
  createOnePrice?: Resolver<{}, CreateOnePriceArgs, Client.Price>
  upsertOnePrice?: Resolver<{}, UpsertOnePriceArgs, Client.Price>
  createManyPrice?: Resolver<
    {},
    CreateManyPriceArgs,
    Client.Prisma.BatchPayload
  >
  deleteOnePrice?: Resolver<{}, DeleteOnePriceArgs, Client.Price | null>
  updateOnePrice?: Resolver<{}, UpdateOnePriceArgs, Client.Price | null>
  updateManyPrice?: Resolver<
    {},
    UpdateManyPriceArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyPrice?: Resolver<
    {},
    DeleteManyPriceArgs,
    Client.Prisma.BatchPayload
  >
  createOneSubscription?: Resolver<
    {},
    CreateOneSubscriptionArgs,
    Client.Subscription
  >
  upsertOneSubscription?: Resolver<
    {},
    UpsertOneSubscriptionArgs,
    Client.Subscription
  >
  createManySubscription?: Resolver<
    {},
    CreateManySubscriptionArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneSubscription?: Resolver<
    {},
    DeleteOneSubscriptionArgs,
    Client.Subscription | null
  >
  updateOneSubscription?: Resolver<
    {},
    UpdateOneSubscriptionArgs,
    Client.Subscription | null
  >
  updateManySubscription?: Resolver<
    {},
    UpdateManySubscriptionArgs,
    Client.Prisma.BatchPayload
  >
  deleteManySubscription?: Resolver<
    {},
    DeleteManySubscriptionArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  active?: Resolver<Client.Prisma.UserGroupByOutputType, {}, boolean>
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  mobile?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  cognitoUserId?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    string | null
  >
  cognitoPoolId?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    string | null
  >
  role?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Client.UserRole>
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface AggregateTenant {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateTenant,
    {},
    Client.Prisma.TenantCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateTenant,
    {},
    Client.Prisma.TenantMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateTenant,
    {},
    Client.Prisma.TenantMaxAggregateOutputType | null
  >
}

export interface TenantGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TenantGroupByOutputType, {}, string>
  active?: Resolver<Client.Prisma.TenantGroupByOutputType, {}, boolean>
  name?: Resolver<Client.Prisma.TenantGroupByOutputType, {}, string | null>
  metaData?: Resolver<Client.Prisma.TenantGroupByOutputType, {}, any | null>
  createdAt?: Resolver<Client.Prisma.TenantGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.TenantGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.TenantGroupByOutputType,
    {},
    Client.Prisma.TenantCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.TenantGroupByOutputType,
    {},
    Client.Prisma.TenantMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.TenantGroupByOutputType,
    {},
    Client.Prisma.TenantMaxAggregateOutputType | null
  >
}

export interface AggregateCustomer {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateCustomer,
    {},
    Client.Prisma.CustomerCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateCustomer,
    {},
    Client.Prisma.CustomerMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateCustomer,
    {},
    Client.Prisma.CustomerMaxAggregateOutputType | null
  >
}

export interface CustomerGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CustomerGroupByOutputType, {}, string>
  active?: Resolver<Client.Prisma.CustomerGroupByOutputType, {}, boolean>
  tenantId?: Resolver<Client.Prisma.CustomerGroupByOutputType, {}, string>
  name?: Resolver<Client.Prisma.CustomerGroupByOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.CustomerGroupByOutputType, {}, string>
  mobile?: Resolver<Client.Prisma.CustomerGroupByOutputType, {}, string | null>
  cognitoUserId?: Resolver<
    Client.Prisma.CustomerGroupByOutputType,
    {},
    string | null
  >
  cognitoPoolId?: Resolver<
    Client.Prisma.CustomerGroupByOutputType,
    {},
    string | null
  >
  stripeCustomerId?: Resolver<
    Client.Prisma.CustomerGroupByOutputType,
    {},
    string | null
  >
  stripeBillingAddress?: Resolver<
    Client.Prisma.CustomerGroupByOutputType,
    {},
    any | null
  >
  stripePaymentMethod?: Resolver<
    Client.Prisma.CustomerGroupByOutputType,
    {},
    any | null
  >
  metaData?: Resolver<Client.Prisma.CustomerGroupByOutputType, {}, any | null>
  createdAt?: Resolver<Client.Prisma.CustomerGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.CustomerGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.CustomerGroupByOutputType,
    {},
    Client.Prisma.CustomerCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.CustomerGroupByOutputType,
    {},
    Client.Prisma.CustomerMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.CustomerGroupByOutputType,
    {},
    Client.Prisma.CustomerMaxAggregateOutputType | null
  >
}

export interface AggregateProduct {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateProduct,
    {},
    Client.Prisma.ProductMaxAggregateOutputType | null
  >
}

export interface ProductGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, string>
  active?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, boolean>
  name?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, string | null>
  image?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, string | null>
  description?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    string | null
  >
  stripeProductId?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    string | null
  >
  metaData?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, any | null>
  createdAt?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.ProductGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.ProductGroupByOutputType,
    {},
    Client.Prisma.ProductMaxAggregateOutputType | null
  >
}

export interface AggregatePrice {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregatePrice,
    {},
    Client.Prisma.PriceCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregatePrice,
    {},
    Client.Prisma.PriceAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregatePrice,
    {},
    Client.Prisma.PriceSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePrice,
    {},
    Client.Prisma.PriceMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePrice,
    {},
    Client.Prisma.PriceMaxAggregateOutputType | null
  >
}

export interface PriceGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PriceGroupByOutputType, {}, string>
  active?: Resolver<Client.Prisma.PriceGroupByOutputType, {}, boolean>
  productId?: Resolver<Client.Prisma.PriceGroupByOutputType, {}, string>
  description?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    string | null
  >
  unitAmount?: Resolver<Client.Prisma.PriceGroupByOutputType, {}, number | null>
  currency?: Resolver<Client.Prisma.PriceGroupByOutputType, {}, string | null>
  type?: Resolver<Client.Prisma.PriceGroupByOutputType, {}, Client.pricingType>
  interval?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    Client.pricingInterval
  >
  intervalCount?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    number | null
  >
  trialPeriod?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    number | null
  >
  stripePriceId?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    string | null
  >
  metaData?: Resolver<Client.Prisma.PriceGroupByOutputType, {}, any | null>
  createdAt?: Resolver<Client.Prisma.PriceGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.PriceGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    Client.Prisma.PriceCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    Client.Prisma.PriceAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    Client.Prisma.PriceSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    Client.Prisma.PriceMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PriceGroupByOutputType,
    {},
    Client.Prisma.PriceMaxAggregateOutputType | null
  >
}

export interface AggregateSubscription {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateSubscription,
    {},
    Client.Prisma.SubscriptionCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateSubscription,
    {},
    Client.Prisma.SubscriptionAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateSubscription,
    {},
    Client.Prisma.SubscriptionSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateSubscription,
    {},
    Client.Prisma.SubscriptionMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateSubscription,
    {},
    Client.Prisma.SubscriptionMaxAggregateOutputType | null
  >
}

export interface SubscriptionGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.SubscriptionGroupByOutputType, {}, number>
  status?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Client.subscriptionStatus
  >
  customerId?: Resolver<Client.Prisma.SubscriptionGroupByOutputType, {}, string>
  priceId?: Resolver<Client.Prisma.SubscriptionGroupByOutputType, {}, string>
  quantity?: Resolver<Client.Prisma.SubscriptionGroupByOutputType, {}, number>
  cancelAtPeriodEnd?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    boolean
  >
  currentPeriodStartAt?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Date | null
  >
  currentPeriodEndAt?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Date | null
  >
  endedAt?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Date | null
  >
  cancelAt?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Date | null
  >
  canceledAat?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Date | null
  >
  trialStartAt?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Date | null
  >
  trialEndAt?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Date | null
  >
  stripeSubscriptionId?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    string | null
  >
  metaData?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    any | null
  >
  createdAt?: Resolver<Client.Prisma.SubscriptionGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.SubscriptionGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Client.Prisma.SubscriptionCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Client.Prisma.SubscriptionAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Client.Prisma.SubscriptionSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Client.Prisma.SubscriptionMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.SubscriptionGroupByOutputType,
    {},
    Client.Prisma.SubscriptionMaxAggregateOutputType | null
  >
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  active?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  mobile?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  cognitoUserId?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number
  >
  cognitoPoolId?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number
  >
  role?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    boolean | null
  >
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  mobile?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  cognitoUserId?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  cognitoPoolId?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  role?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Client.UserRole | null
  >
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    boolean | null
  >
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  mobile?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  cognitoUserId?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  cognitoPoolId?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  role?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Client.UserRole | null
  >
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface TenantCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TenantCountAggregateOutputType, {}, number>
  active?: Resolver<Client.Prisma.TenantCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.TenantCountAggregateOutputType, {}, number>
  metaData?: Resolver<Client.Prisma.TenantCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.TenantCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.TenantCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.TenantCountAggregateOutputType, {}, number>
}

export interface TenantMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TenantMinAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.TenantMinAggregateOutputType,
    {},
    boolean | null
  >
  name?: Resolver<Client.Prisma.TenantMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.TenantMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.TenantMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface TenantMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TenantMaxAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.TenantMaxAggregateOutputType,
    {},
    boolean | null
  >
  name?: Resolver<Client.Prisma.TenantMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.TenantMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.TenantMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface CustomerCountOutputType {
  [key: string]: Resolver<any, any, any>
  subscriptions?: Resolver<Client.Prisma.CustomerCountOutputType, {}, number>
}

export interface CustomerCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CustomerCountAggregateOutputType, {}, number>
  active?: Resolver<Client.Prisma.CustomerCountAggregateOutputType, {}, number>
  tenantId?: Resolver<
    Client.Prisma.CustomerCountAggregateOutputType,
    {},
    number
  >
  name?: Resolver<Client.Prisma.CustomerCountAggregateOutputType, {}, number>
  email?: Resolver<Client.Prisma.CustomerCountAggregateOutputType, {}, number>
  mobile?: Resolver<Client.Prisma.CustomerCountAggregateOutputType, {}, number>
  cognitoUserId?: Resolver<
    Client.Prisma.CustomerCountAggregateOutputType,
    {},
    number
  >
  cognitoPoolId?: Resolver<
    Client.Prisma.CustomerCountAggregateOutputType,
    {},
    number
  >
  stripeCustomerId?: Resolver<
    Client.Prisma.CustomerCountAggregateOutputType,
    {},
    number
  >
  stripeBillingAddress?: Resolver<
    Client.Prisma.CustomerCountAggregateOutputType,
    {},
    number
  >
  stripePaymentMethod?: Resolver<
    Client.Prisma.CustomerCountAggregateOutputType,
    {},
    number
  >
  metaData?: Resolver<
    Client.Prisma.CustomerCountAggregateOutputType,
    {},
    number
  >
  createdAt?: Resolver<
    Client.Prisma.CustomerCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.CustomerCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.CustomerCountAggregateOutputType, {}, number>
}

export interface CustomerMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CustomerMinAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    boolean | null
  >
  tenantId?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    string | null
  >
  name?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    string | null
  >
  email?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    string | null
  >
  mobile?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    string | null
  >
  cognitoUserId?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    string | null
  >
  cognitoPoolId?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    string | null
  >
  stripeCustomerId?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CustomerMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface CustomerMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CustomerMaxAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    boolean | null
  >
  tenantId?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    string | null
  >
  name?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    string | null
  >
  email?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    string | null
  >
  mobile?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    string | null
  >
  cognitoUserId?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    string | null
  >
  cognitoPoolId?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    string | null
  >
  stripeCustomerId?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CustomerMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface ProductCountOutputType {
  [key: string]: Resolver<any, any, any>
  prices?: Resolver<Client.Prisma.ProductCountOutputType, {}, number>
}

export interface ProductCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>
  active?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>
  image?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>
  description?: Resolver<
    Client.Prisma.ProductCountAggregateOutputType,
    {},
    number
  >
  stripeProductId?: Resolver<
    Client.Prisma.ProductCountAggregateOutputType,
    {},
    number
  >
  metaData?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.ProductCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.ProductCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.ProductCountAggregateOutputType, {}, number>
}

export interface ProductMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductMinAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.ProductMinAggregateOutputType,
    {},
    boolean | null
  >
  name?: Resolver<
    Client.Prisma.ProductMinAggregateOutputType,
    {},
    string | null
  >
  image?: Resolver<
    Client.Prisma.ProductMinAggregateOutputType,
    {},
    string | null
  >
  description?: Resolver<
    Client.Prisma.ProductMinAggregateOutputType,
    {},
    string | null
  >
  stripeProductId?: Resolver<
    Client.Prisma.ProductMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.ProductMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.ProductMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface ProductMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ProductMaxAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.ProductMaxAggregateOutputType,
    {},
    boolean | null
  >
  name?: Resolver<
    Client.Prisma.ProductMaxAggregateOutputType,
    {},
    string | null
  >
  image?: Resolver<
    Client.Prisma.ProductMaxAggregateOutputType,
    {},
    string | null
  >
  description?: Resolver<
    Client.Prisma.ProductMaxAggregateOutputType,
    {},
    string | null
  >
  stripeProductId?: Resolver<
    Client.Prisma.ProductMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.ProductMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.ProductMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface PriceCountOutputType {
  [key: string]: Resolver<any, any, any>
  subscriptions?: Resolver<Client.Prisma.PriceCountOutputType, {}, number>
}

export interface PriceCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  active?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  productId?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  description?: Resolver<
    Client.Prisma.PriceCountAggregateOutputType,
    {},
    number
  >
  unitAmount?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  currency?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  type?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  interval?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  intervalCount?: Resolver<
    Client.Prisma.PriceCountAggregateOutputType,
    {},
    number
  >
  trialPeriod?: Resolver<
    Client.Prisma.PriceCountAggregateOutputType,
    {},
    number
  >
  stripePriceId?: Resolver<
    Client.Prisma.PriceCountAggregateOutputType,
    {},
    number
  >
  metaData?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.PriceCountAggregateOutputType, {}, number>
}

export interface PriceAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  unitAmount?: Resolver<
    Client.Prisma.PriceAvgAggregateOutputType,
    {},
    number | null
  >
  intervalCount?: Resolver<
    Client.Prisma.PriceAvgAggregateOutputType,
    {},
    number | null
  >
  trialPeriod?: Resolver<
    Client.Prisma.PriceAvgAggregateOutputType,
    {},
    number | null
  >
}

export interface PriceSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  unitAmount?: Resolver<
    Client.Prisma.PriceSumAggregateOutputType,
    {},
    number | null
  >
  intervalCount?: Resolver<
    Client.Prisma.PriceSumAggregateOutputType,
    {},
    number | null
  >
  trialPeriod?: Resolver<
    Client.Prisma.PriceSumAggregateOutputType,
    {},
    number | null
  >
}

export interface PriceMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PriceMinAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    boolean | null
  >
  productId?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    string | null
  >
  description?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    string | null
  >
  unitAmount?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    number | null
  >
  currency?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    string | null
  >
  type?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    Client.pricingType | null
  >
  interval?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    Client.pricingInterval | null
  >
  intervalCount?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    number | null
  >
  trialPeriod?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    number | null
  >
  stripePriceId?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PriceMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface PriceMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PriceMaxAggregateOutputType, {}, string | null>
  active?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    boolean | null
  >
  productId?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    string | null
  >
  description?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    string | null
  >
  unitAmount?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    number | null
  >
  currency?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    string | null
  >
  type?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    Client.pricingType | null
  >
  interval?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    Client.pricingInterval | null
  >
  intervalCount?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    number | null
  >
  trialPeriod?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    number | null
  >
  stripePriceId?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PriceMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface SubscriptionCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.SubscriptionCountAggregateOutputType, {}, number>
  status?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  customerId?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  priceId?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  quantity?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  cancelAtPeriodEnd?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  currentPeriodStartAt?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  currentPeriodEndAt?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  endedAt?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  cancelAt?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  canceledAat?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  trialStartAt?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  trialEndAt?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  stripeSubscriptionId?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  metaData?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  createdAt?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<
    Client.Prisma.SubscriptionCountAggregateOutputType,
    {},
    number
  >
}

export interface SubscriptionAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.SubscriptionAvgAggregateOutputType,
    {},
    number | null
  >
  quantity?: Resolver<
    Client.Prisma.SubscriptionAvgAggregateOutputType,
    {},
    number | null
  >
}

export interface SubscriptionSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.SubscriptionSumAggregateOutputType,
    {},
    number | null
  >
  quantity?: Resolver<
    Client.Prisma.SubscriptionSumAggregateOutputType,
    {},
    number | null
  >
}

export interface SubscriptionMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    number | null
  >
  status?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Client.subscriptionStatus | null
  >
  customerId?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    string | null
  >
  priceId?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    string | null
  >
  quantity?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    number | null
  >
  cancelAtPeriodEnd?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    boolean | null
  >
  currentPeriodStartAt?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Date | null
  >
  currentPeriodEndAt?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Date | null
  >
  endedAt?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Date | null
  >
  cancelAt?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Date | null
  >
  canceledAat?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Date | null
  >
  trialStartAt?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Date | null
  >
  trialEndAt?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Date | null
  >
  stripeSubscriptionId?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.SubscriptionMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface SubscriptionMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    number | null
  >
  status?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Client.subscriptionStatus | null
  >
  customerId?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    string | null
  >
  priceId?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    string | null
  >
  quantity?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    number | null
  >
  cancelAtPeriodEnd?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    boolean | null
  >
  currentPeriodStartAt?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Date | null
  >
  currentPeriodEndAt?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Date | null
  >
  endedAt?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Date | null
  >
  cancelAt?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Date | null
  >
  canceledAat?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Date | null
  >
  trialStartAt?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Date | null
  >
  trialEndAt?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Date | null
  >
  stripeSubscriptionId?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.SubscriptionMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface CustomerSubscriptionsArgs {
  where?: SubscriptionWhereInput | null
  orderBy?: SubscriptionOrderByWithRelationInput[] | null
  cursor?: SubscriptionWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: SubscriptionScalarFieldEnum[] | null
}

export interface ProductPricesArgs {
  where?: PriceWhereInput | null
  orderBy?: PriceOrderByWithRelationInput[] | null
  cursor?: PriceWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PriceScalarFieldEnum[] | null
}

export interface PriceSubscriptionsArgs {
  where?: SubscriptionWhereInput | null
  orderBy?: SubscriptionOrderByWithRelationInput[] | null
  cursor?: SubscriptionWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: SubscriptionScalarFieldEnum[] | null
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindManyUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export interface AggregateUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export interface GroupByUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindFirstTenantArgs {
  where?: TenantWhereInput | null
  orderBy?: TenantOrderByWithRelationInput[] | null
  cursor?: TenantWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: TenantScalarFieldEnum[] | null
}

export interface FindManyTenantArgs {
  where?: TenantWhereInput
  orderBy?: TenantOrderByWithRelationInput[]
  cursor?: TenantWhereUniqueInput
  take?: number
  skip?: number
  distinct?: TenantScalarFieldEnum[]
}

export interface AggregateTenantArgs {
  where?: TenantWhereInput
  orderBy?: TenantOrderByWithRelationInput[]
  cursor?: TenantWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.TenantCountAggregateInputType
  _min?: Client.Prisma.TenantMinAggregateInputType
  _max?: Client.Prisma.TenantMaxAggregateInputType
}

export interface GroupByTenantArgs {
  where?: TenantWhereInput
  orderBy?: TenantOrderByWithAggregationInput[]
  by: TenantScalarFieldEnum[]
  having?: TenantScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueTenantArgs {
  where: TenantWhereUniqueInput | null
}

export interface FindFirstCustomerArgs {
  where?: CustomerWhereInput | null
  orderBy?: CustomerOrderByWithRelationInput[] | null
  cursor?: CustomerWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CustomerScalarFieldEnum[] | null
}

export interface FindManyCustomerArgs {
  where?: CustomerWhereInput
  orderBy?: CustomerOrderByWithRelationInput[]
  cursor?: CustomerWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CustomerScalarFieldEnum[]
}

export interface AggregateCustomerArgs {
  where?: CustomerWhereInput
  orderBy?: CustomerOrderByWithRelationInput[]
  cursor?: CustomerWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.CustomerCountAggregateInputType
  _min?: Client.Prisma.CustomerMinAggregateInputType
  _max?: Client.Prisma.CustomerMaxAggregateInputType
}

export interface GroupByCustomerArgs {
  where?: CustomerWhereInput
  orderBy?: CustomerOrderByWithAggregationInput[]
  by: CustomerScalarFieldEnum[]
  having?: CustomerScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueCustomerArgs {
  where: CustomerWhereUniqueInput | null
}

export interface FindFirstProductArgs {
  where?: ProductWhereInput | null
  orderBy?: ProductOrderByWithRelationInput[] | null
  cursor?: ProductWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: ProductScalarFieldEnum[] | null
}

export interface FindManyProductArgs {
  where?: ProductWhereInput
  orderBy?: ProductOrderByWithRelationInput[]
  cursor?: ProductWhereUniqueInput
  take?: number
  skip?: number
  distinct?: ProductScalarFieldEnum[]
}

export interface AggregateProductArgs {
  where?: ProductWhereInput
  orderBy?: ProductOrderByWithRelationInput[]
  cursor?: ProductWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.ProductCountAggregateInputType
  _min?: Client.Prisma.ProductMinAggregateInputType
  _max?: Client.Prisma.ProductMaxAggregateInputType
}

export interface GroupByProductArgs {
  where?: ProductWhereInput
  orderBy?: ProductOrderByWithAggregationInput[]
  by: ProductScalarFieldEnum[]
  having?: ProductScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueProductArgs {
  where: ProductWhereUniqueInput | null
}

export interface FindFirstPriceArgs {
  where?: PriceWhereInput | null
  orderBy?: PriceOrderByWithRelationInput[] | null
  cursor?: PriceWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PriceScalarFieldEnum[] | null
}

export interface FindManyPriceArgs {
  where?: PriceWhereInput
  orderBy?: PriceOrderByWithRelationInput[]
  cursor?: PriceWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PriceScalarFieldEnum[]
}

export interface AggregatePriceArgs {
  where?: PriceWhereInput
  orderBy?: PriceOrderByWithRelationInput[]
  cursor?: PriceWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PriceCountAggregateInputType
  _avg?: Client.Prisma.PriceAvgAggregateInputType
  _sum?: Client.Prisma.PriceSumAggregateInputType
  _min?: Client.Prisma.PriceMinAggregateInputType
  _max?: Client.Prisma.PriceMaxAggregateInputType
}

export interface GroupByPriceArgs {
  where?: PriceWhereInput
  orderBy?: PriceOrderByWithAggregationInput[]
  by: PriceScalarFieldEnum[]
  having?: PriceScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniquePriceArgs {
  where: PriceWhereUniqueInput | null
}

export interface FindFirstSubscriptionArgs {
  where?: SubscriptionWhereInput | null
  orderBy?: SubscriptionOrderByWithRelationInput[] | null
  cursor?: SubscriptionWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: SubscriptionScalarFieldEnum[] | null
}

export interface FindManySubscriptionArgs {
  where?: SubscriptionWhereInput
  orderBy?: SubscriptionOrderByWithRelationInput[]
  cursor?: SubscriptionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: SubscriptionScalarFieldEnum[]
}

export interface AggregateSubscriptionArgs {
  where?: SubscriptionWhereInput
  orderBy?: SubscriptionOrderByWithRelationInput[]
  cursor?: SubscriptionWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.SubscriptionCountAggregateInputType
  _avg?: Client.Prisma.SubscriptionAvgAggregateInputType
  _sum?: Client.Prisma.SubscriptionSumAggregateInputType
  _min?: Client.Prisma.SubscriptionMinAggregateInputType
  _max?: Client.Prisma.SubscriptionMaxAggregateInputType
}

export interface GroupBySubscriptionArgs {
  where?: SubscriptionWhereInput
  orderBy?: SubscriptionOrderByWithAggregationInput[]
  by: SubscriptionScalarFieldEnum[]
  having?: SubscriptionScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueSubscriptionArgs {
  where: SubscriptionWhereUniqueInput | null
}

export interface CreateOneUserArgs {
  data: UserCreateInput
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export interface CreateManyUserArgs {
  data: UserCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null
  where: UserWhereUniqueInput | null
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput
}

export interface CreateOneTenantArgs {
  data: TenantCreateInput
}

export interface UpsertOneTenantArgs {
  where: TenantWhereUniqueInput
  create: TenantCreateInput
  update: TenantUpdateInput
}

export interface CreateManyTenantArgs {
  data: TenantCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneTenantArgs {
  where: TenantWhereUniqueInput | null
}

export interface UpdateOneTenantArgs {
  data: TenantUpdateInput | null
  where: TenantWhereUniqueInput | null
}

export interface UpdateManyTenantArgs {
  data: TenantUpdateManyMutationInput
  where?: TenantWhereInput
}

export interface DeleteManyTenantArgs {
  where?: TenantWhereInput
}

export interface CreateOneCustomerArgs {
  data: CustomerCreateInput
}

export interface UpsertOneCustomerArgs {
  where: CustomerWhereUniqueInput
  create: CustomerCreateInput
  update: CustomerUpdateInput
}

export interface CreateManyCustomerArgs {
  data: CustomerCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneCustomerArgs {
  where: CustomerWhereUniqueInput | null
}

export interface UpdateOneCustomerArgs {
  data: CustomerUpdateInput | null
  where: CustomerWhereUniqueInput | null
}

export interface UpdateManyCustomerArgs {
  data: CustomerUpdateManyMutationInput
  where?: CustomerWhereInput
}

export interface DeleteManyCustomerArgs {
  where?: CustomerWhereInput
}

export interface CreateOneProductArgs {
  data: ProductCreateInput
}

export interface UpsertOneProductArgs {
  where: ProductWhereUniqueInput
  create: ProductCreateInput
  update: ProductUpdateInput
}

export interface CreateManyProductArgs {
  data: ProductCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneProductArgs {
  where: ProductWhereUniqueInput | null
}

export interface UpdateOneProductArgs {
  data: ProductUpdateInput | null
  where: ProductWhereUniqueInput | null
}

export interface UpdateManyProductArgs {
  data: ProductUpdateManyMutationInput
  where?: ProductWhereInput
}

export interface DeleteManyProductArgs {
  where?: ProductWhereInput
}

export interface CreateOnePriceArgs {
  data: PriceCreateInput
}

export interface UpsertOnePriceArgs {
  where: PriceWhereUniqueInput
  create: PriceCreateInput
  update: PriceUpdateInput
}

export interface CreateManyPriceArgs {
  data: PriceCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOnePriceArgs {
  where: PriceWhereUniqueInput | null
}

export interface UpdateOnePriceArgs {
  data: PriceUpdateInput | null
  where: PriceWhereUniqueInput | null
}

export interface UpdateManyPriceArgs {
  data: PriceUpdateManyMutationInput
  where?: PriceWhereInput
}

export interface DeleteManyPriceArgs {
  where?: PriceWhereInput
}

export interface CreateOneSubscriptionArgs {
  data: SubscriptionCreateInput
}

export interface UpsertOneSubscriptionArgs {
  where: SubscriptionWhereUniqueInput
  create: SubscriptionCreateInput
  update: SubscriptionUpdateInput
}

export interface CreateManySubscriptionArgs {
  data: SubscriptionCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneSubscriptionArgs {
  where: SubscriptionWhereUniqueInput | null
}

export interface UpdateOneSubscriptionArgs {
  data: SubscriptionUpdateInput | null
  where: SubscriptionWhereUniqueInput | null
}

export interface UpdateManySubscriptionArgs {
  data: SubscriptionUpdateManyMutationInput
  where?: SubscriptionWhereInput
}

export interface DeleteManySubscriptionArgs {
  where?: SubscriptionWhereInput
}

export interface ExecuteRawArgs {
  query: string
  parameters?: any
}

export interface QueryRawArgs {
  query: string
  parameters?: any
}

export interface UserWhereInput {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: StringFilter
  active?: BoolFilter
  name?: StringNullableFilter | null
  email?: StringFilter
  mobile?: StringNullableFilter | null
  cognitoUserId?: StringNullableFilter | null
  cognitoPoolId?: StringNullableFilter | null
  role?: EnumUserRoleFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  role?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface UserWhereUniqueInput {
  id?: string
  email?: string
  cognitoUserId?: string
  cognitoPoolId?: string
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  role?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  active?: BoolWithAggregatesFilter
  name?: StringNullableWithAggregatesFilter | null
  email?: StringWithAggregatesFilter
  mobile?: StringNullableWithAggregatesFilter | null
  cognitoUserId?: StringNullableWithAggregatesFilter | null
  cognitoPoolId?: StringNullableWithAggregatesFilter | null
  role?: EnumUserRoleWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export interface TenantWhereInput {
  AND?: TenantWhereInput[]
  OR?: TenantWhereInput[]
  NOT?: TenantWhereInput[]
  id?: StringFilter
  active?: BoolFilter
  customer?: CustomerWhereInput | null
  name?: StringNullableFilter | null
  metaData?: JsonNullableFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface TenantOrderByWithRelationInput {
  id?: SortOrder
  active?: SortOrder
  customer?: CustomerOrderByWithRelationInput
  name?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface TenantWhereUniqueInput {
  id?: string
}

export interface TenantOrderByWithAggregationInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: TenantCountOrderByAggregateInput
  _max?: TenantMaxOrderByAggregateInput
  _min?: TenantMinOrderByAggregateInput
}

export interface TenantScalarWhereWithAggregatesInput {
  AND?: TenantScalarWhereWithAggregatesInput[]
  OR?: TenantScalarWhereWithAggregatesInput[]
  NOT?: TenantScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  active?: BoolWithAggregatesFilter
  name?: StringNullableWithAggregatesFilter | null
  metaData?: JsonNullableWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export interface CustomerWhereInput {
  AND?: CustomerWhereInput[]
  OR?: CustomerWhereInput[]
  NOT?: CustomerWhereInput[]
  id?: StringFilter
  active?: BoolFilter
  tenant?: TenantWhereInput
  tenantId?: StringFilter
  name?: StringNullableFilter | null
  email?: StringFilter
  mobile?: StringNullableFilter | null
  cognitoUserId?: StringNullableFilter | null
  cognitoPoolId?: StringNullableFilter | null
  stripeCustomerId?: StringNullableFilter | null
  stripeBillingAddress?: JsonNullableFilter
  stripePaymentMethod?: JsonNullableFilter
  metaData?: JsonNullableFilter
  subscriptions?: SubscriptionListRelationFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface CustomerOrderByWithRelationInput {
  id?: SortOrder
  active?: SortOrder
  tenant?: TenantOrderByWithRelationInput
  tenantId?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  stripeCustomerId?: SortOrder
  stripeBillingAddress?: SortOrder
  stripePaymentMethod?: SortOrder
  metaData?: SortOrder
  subscriptions?: SubscriptionOrderByRelationAggregateInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface CustomerWhereUniqueInput {
  id?: string
  tenantId?: string
  email?: string
  cognitoUserId?: string
  cognitoPoolId?: string
  stripeCustomerId?: string
}

export interface CustomerOrderByWithAggregationInput {
  id?: SortOrder
  active?: SortOrder
  tenantId?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  stripeCustomerId?: SortOrder
  stripeBillingAddress?: SortOrder
  stripePaymentMethod?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: CustomerCountOrderByAggregateInput
  _max?: CustomerMaxOrderByAggregateInput
  _min?: CustomerMinOrderByAggregateInput
}

export interface CustomerScalarWhereWithAggregatesInput {
  AND?: CustomerScalarWhereWithAggregatesInput[]
  OR?: CustomerScalarWhereWithAggregatesInput[]
  NOT?: CustomerScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  active?: BoolWithAggregatesFilter
  tenantId?: StringWithAggregatesFilter
  name?: StringNullableWithAggregatesFilter | null
  email?: StringWithAggregatesFilter
  mobile?: StringNullableWithAggregatesFilter | null
  cognitoUserId?: StringNullableWithAggregatesFilter | null
  cognitoPoolId?: StringNullableWithAggregatesFilter | null
  stripeCustomerId?: StringNullableWithAggregatesFilter | null
  stripeBillingAddress?: JsonNullableWithAggregatesFilter
  stripePaymentMethod?: JsonNullableWithAggregatesFilter
  metaData?: JsonNullableWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[]
  OR?: ProductWhereInput[]
  NOT?: ProductWhereInput[]
  id?: StringFilter
  active?: BoolFilter
  name?: StringNullableFilter | null
  image?: StringNullableFilter | null
  description?: StringNullableFilter | null
  stripeProductId?: StringNullableFilter | null
  metaData?: JsonNullableFilter
  prices?: PriceListRelationFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface ProductOrderByWithRelationInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  image?: SortOrder
  description?: SortOrder
  stripeProductId?: SortOrder
  metaData?: SortOrder
  prices?: PriceOrderByRelationAggregateInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface ProductWhereUniqueInput {
  id?: string
  stripeProductId?: string
}

export interface ProductOrderByWithAggregationInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  image?: SortOrder
  description?: SortOrder
  stripeProductId?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: ProductCountOrderByAggregateInput
  _max?: ProductMaxOrderByAggregateInput
  _min?: ProductMinOrderByAggregateInput
}

export interface ProductScalarWhereWithAggregatesInput {
  AND?: ProductScalarWhereWithAggregatesInput[]
  OR?: ProductScalarWhereWithAggregatesInput[]
  NOT?: ProductScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  active?: BoolWithAggregatesFilter
  name?: StringNullableWithAggregatesFilter | null
  image?: StringNullableWithAggregatesFilter | null
  description?: StringNullableWithAggregatesFilter | null
  stripeProductId?: StringNullableWithAggregatesFilter | null
  metaData?: JsonNullableWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export interface PriceWhereInput {
  AND?: PriceWhereInput[]
  OR?: PriceWhereInput[]
  NOT?: PriceWhereInput[]
  id?: StringFilter
  active?: BoolFilter
  product?: ProductWhereInput
  productId?: StringFilter
  description?: StringNullableFilter | null
  unitAmount?: IntNullableFilter | null
  currency?: StringNullableFilter | null
  type?: EnumpricingTypeFilter
  interval?: EnumpricingIntervalFilter
  intervalCount?: IntNullableFilter | null
  trialPeriod?: IntNullableFilter | null
  stripePriceId?: StringNullableFilter | null
  metaData?: JsonNullableFilter
  subscriptions?: SubscriptionListRelationFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface PriceOrderByWithRelationInput {
  id?: SortOrder
  active?: SortOrder
  product?: ProductOrderByWithRelationInput
  productId?: SortOrder
  description?: SortOrder
  unitAmount?: SortOrder
  currency?: SortOrder
  type?: SortOrder
  interval?: SortOrder
  intervalCount?: SortOrder
  trialPeriod?: SortOrder
  stripePriceId?: SortOrder
  metaData?: SortOrder
  subscriptions?: SubscriptionOrderByRelationAggregateInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PriceWhereUniqueInput {
  id?: string
  stripePriceId?: string
}

export interface PriceOrderByWithAggregationInput {
  id?: SortOrder
  active?: SortOrder
  productId?: SortOrder
  description?: SortOrder
  unitAmount?: SortOrder
  currency?: SortOrder
  type?: SortOrder
  interval?: SortOrder
  intervalCount?: SortOrder
  trialPeriod?: SortOrder
  stripePriceId?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: PriceCountOrderByAggregateInput
  _avg?: PriceAvgOrderByAggregateInput
  _max?: PriceMaxOrderByAggregateInput
  _min?: PriceMinOrderByAggregateInput
  _sum?: PriceSumOrderByAggregateInput
}

export interface PriceScalarWhereWithAggregatesInput {
  AND?: PriceScalarWhereWithAggregatesInput[]
  OR?: PriceScalarWhereWithAggregatesInput[]
  NOT?: PriceScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  active?: BoolWithAggregatesFilter
  productId?: StringWithAggregatesFilter
  description?: StringNullableWithAggregatesFilter | null
  unitAmount?: IntNullableWithAggregatesFilter | null
  currency?: StringNullableWithAggregatesFilter | null
  type?: EnumpricingTypeWithAggregatesFilter
  interval?: EnumpricingIntervalWithAggregatesFilter
  intervalCount?: IntNullableWithAggregatesFilter | null
  trialPeriod?: IntNullableWithAggregatesFilter | null
  stripePriceId?: StringNullableWithAggregatesFilter | null
  metaData?: JsonNullableWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export interface SubscriptionWhereInput {
  AND?: SubscriptionWhereInput[]
  OR?: SubscriptionWhereInput[]
  NOT?: SubscriptionWhereInput[]
  id?: IntFilter
  status?: EnumsubscriptionStatusFilter
  customer?: CustomerWhereInput
  customerId?: StringFilter
  price?: PriceWhereInput
  priceId?: StringFilter
  quantity?: IntFilter
  cancelAtPeriodEnd?: BoolFilter
  currentPeriodStartAt?: DateTimeNullableFilter | null
  currentPeriodEndAt?: DateTimeNullableFilter | null
  endedAt?: DateTimeNullableFilter | null
  cancelAt?: DateTimeNullableFilter | null
  canceledAat?: DateTimeNullableFilter | null
  trialStartAt?: DateTimeNullableFilter | null
  trialEndAt?: DateTimeNullableFilter | null
  stripeSubscriptionId?: StringNullableFilter | null
  metaData?: JsonNullableFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface SubscriptionOrderByWithRelationInput {
  id?: SortOrder
  status?: SortOrder
  customer?: CustomerOrderByWithRelationInput
  customerId?: SortOrder
  price?: PriceOrderByWithRelationInput
  priceId?: SortOrder
  quantity?: SortOrder
  cancelAtPeriodEnd?: SortOrder
  currentPeriodStartAt?: SortOrder
  currentPeriodEndAt?: SortOrder
  endedAt?: SortOrder
  cancelAt?: SortOrder
  canceledAat?: SortOrder
  trialStartAt?: SortOrder
  trialEndAt?: SortOrder
  stripeSubscriptionId?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface SubscriptionWhereUniqueInput {
  id?: number
  stripeSubscriptionId?: string
}

export interface SubscriptionOrderByWithAggregationInput {
  id?: SortOrder
  status?: SortOrder
  customerId?: SortOrder
  priceId?: SortOrder
  quantity?: SortOrder
  cancelAtPeriodEnd?: SortOrder
  currentPeriodStartAt?: SortOrder
  currentPeriodEndAt?: SortOrder
  endedAt?: SortOrder
  cancelAt?: SortOrder
  canceledAat?: SortOrder
  trialStartAt?: SortOrder
  trialEndAt?: SortOrder
  stripeSubscriptionId?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: SubscriptionCountOrderByAggregateInput
  _avg?: SubscriptionAvgOrderByAggregateInput
  _max?: SubscriptionMaxOrderByAggregateInput
  _min?: SubscriptionMinOrderByAggregateInput
  _sum?: SubscriptionSumOrderByAggregateInput
}

export interface SubscriptionScalarWhereWithAggregatesInput {
  AND?: SubscriptionScalarWhereWithAggregatesInput[]
  OR?: SubscriptionScalarWhereWithAggregatesInput[]
  NOT?: SubscriptionScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  status?: EnumsubscriptionStatusWithAggregatesFilter
  customerId?: StringWithAggregatesFilter
  priceId?: StringWithAggregatesFilter
  quantity?: IntWithAggregatesFilter
  cancelAtPeriodEnd?: BoolWithAggregatesFilter
  currentPeriodStartAt?: DateTimeNullableWithAggregatesFilter | null
  currentPeriodEndAt?: DateTimeNullableWithAggregatesFilter | null
  endedAt?: DateTimeNullableWithAggregatesFilter | null
  cancelAt?: DateTimeNullableWithAggregatesFilter | null
  canceledAat?: DateTimeNullableWithAggregatesFilter | null
  trialStartAt?: DateTimeNullableWithAggregatesFilter | null
  trialEndAt?: DateTimeNullableWithAggregatesFilter | null
  stripeSubscriptionId?: StringNullableWithAggregatesFilter | null
  metaData?: JsonNullableWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export interface UserCreateInput {
  id?: string
  active?: boolean
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  role?: UserRole
  createdAt?: Date
  updatedAt?: Date
}

export interface UserUncheckedCreateInput {
  id?: string
  active?: boolean
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  role?: UserRole
  createdAt?: Date
  updatedAt?: Date
}

export interface UserUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  role?: EnumUserRoleFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  role?: EnumUserRoleFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface UserCreateManyInput {
  id?: string
  active?: boolean
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  role?: UserRole
  createdAt?: Date
  updatedAt?: Date
}

export interface UserUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  role?: EnumUserRoleFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  role?: EnumUserRoleFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface TenantCreateInput {
  id?: string
  active?: boolean
  name?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  customer?: CustomerCreateNestedOneWithoutTenantInput
}

export interface TenantUncheckedCreateInput {
  id?: string
  active?: boolean
  name?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  customer?: CustomerUncheckedCreateNestedOneWithoutTenantInput
}

export interface TenantUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  customer?: CustomerUpdateOneWithoutTenantInput
}

export interface TenantUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  customer?: CustomerUncheckedUpdateOneWithoutTenantInput
}

export interface TenantCreateManyInput {
  id?: string
  active?: boolean
  name?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface TenantUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface TenantUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CustomerCreateInput {
  id?: string
  active?: boolean
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  stripeCustomerId?: string | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  tenant: TenantCreateNestedOneWithoutCustomerInput
  subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
}

export interface CustomerUncheckedCreateInput {
  id?: string
  active?: boolean
  tenantId: string
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  stripeCustomerId?: string | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
}

export interface CustomerUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  stripeCustomerId?: NullableStringFieldUpdateOperationsInput | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  tenant?: TenantUpdateOneRequiredWithoutCustomerInput
  subscriptions?: SubscriptionUpdateManyWithoutCustomerInput
}

export interface CustomerUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  tenantId?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  stripeCustomerId?: NullableStringFieldUpdateOperationsInput | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerInput
}

export interface CustomerCreateManyInput {
  id?: string
  active?: boolean
  tenantId: string
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  stripeCustomerId?: string | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface CustomerUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  stripeCustomerId?: NullableStringFieldUpdateOperationsInput | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CustomerUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  tenantId?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  stripeCustomerId?: NullableStringFieldUpdateOperationsInput | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface ProductCreateInput {
  id?: string
  active?: boolean
  name?: string | null
  image?: string | null
  description?: string | null
  stripeProductId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  prices?: PriceCreateNestedManyWithoutProductInput
}

export interface ProductUncheckedCreateInput {
  id?: string
  active?: boolean
  name?: string | null
  image?: string | null
  description?: string | null
  stripeProductId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  prices?: PriceUncheckedCreateNestedManyWithoutProductInput
}

export interface ProductUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  image?: NullableStringFieldUpdateOperationsInput | null
  description?: NullableStringFieldUpdateOperationsInput | null
  stripeProductId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  prices?: PriceUpdateManyWithoutProductInput
}

export interface ProductUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  image?: NullableStringFieldUpdateOperationsInput | null
  description?: NullableStringFieldUpdateOperationsInput | null
  stripeProductId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  prices?: PriceUncheckedUpdateManyWithoutProductInput
}

export interface ProductCreateManyInput {
  id?: string
  active?: boolean
  name?: string | null
  image?: string | null
  description?: string | null
  stripeProductId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface ProductUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  image?: NullableStringFieldUpdateOperationsInput | null
  description?: NullableStringFieldUpdateOperationsInput | null
  stripeProductId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface ProductUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  image?: NullableStringFieldUpdateOperationsInput | null
  description?: NullableStringFieldUpdateOperationsInput | null
  stripeProductId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PriceCreateInput {
  id?: string
  active?: boolean
  description?: string | null
  unitAmount?: number | null
  currency?: string | null
  type?: pricingType
  interval?: pricingInterval
  intervalCount?: number | null
  trialPeriod?: number | null
  stripePriceId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  product: ProductCreateNestedOneWithoutPricesInput
  subscriptions?: SubscriptionCreateNestedManyWithoutPriceInput
}

export interface PriceUncheckedCreateInput {
  id?: string
  active?: boolean
  productId: string
  description?: string | null
  unitAmount?: number | null
  currency?: string | null
  type?: pricingType
  interval?: pricingInterval
  intervalCount?: number | null
  trialPeriod?: number | null
  stripePriceId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPriceInput
}

export interface PriceUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  description?: NullableStringFieldUpdateOperationsInput | null
  unitAmount?: NullableIntFieldUpdateOperationsInput | null
  currency?: NullableStringFieldUpdateOperationsInput | null
  type?: EnumpricingTypeFieldUpdateOperationsInput
  interval?: EnumpricingIntervalFieldUpdateOperationsInput
  intervalCount?: NullableIntFieldUpdateOperationsInput | null
  trialPeriod?: NullableIntFieldUpdateOperationsInput | null
  stripePriceId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  product?: ProductUpdateOneRequiredWithoutPricesInput
  subscriptions?: SubscriptionUpdateManyWithoutPriceInput
}

export interface PriceUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  productId?: StringFieldUpdateOperationsInput
  description?: NullableStringFieldUpdateOperationsInput | null
  unitAmount?: NullableIntFieldUpdateOperationsInput | null
  currency?: NullableStringFieldUpdateOperationsInput | null
  type?: EnumpricingTypeFieldUpdateOperationsInput
  interval?: EnumpricingIntervalFieldUpdateOperationsInput
  intervalCount?: NullableIntFieldUpdateOperationsInput | null
  trialPeriod?: NullableIntFieldUpdateOperationsInput | null
  stripePriceId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  subscriptions?: SubscriptionUncheckedUpdateManyWithoutPriceInput
}

export interface PriceCreateManyInput {
  id?: string
  active?: boolean
  productId: string
  description?: string | null
  unitAmount?: number | null
  currency?: string | null
  type?: pricingType
  interval?: pricingInterval
  intervalCount?: number | null
  trialPeriod?: number | null
  stripePriceId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface PriceUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  description?: NullableStringFieldUpdateOperationsInput | null
  unitAmount?: NullableIntFieldUpdateOperationsInput | null
  currency?: NullableStringFieldUpdateOperationsInput | null
  type?: EnumpricingTypeFieldUpdateOperationsInput
  interval?: EnumpricingIntervalFieldUpdateOperationsInput
  intervalCount?: NullableIntFieldUpdateOperationsInput | null
  trialPeriod?: NullableIntFieldUpdateOperationsInput | null
  stripePriceId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PriceUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  productId?: StringFieldUpdateOperationsInput
  description?: NullableStringFieldUpdateOperationsInput | null
  unitAmount?: NullableIntFieldUpdateOperationsInput | null
  currency?: NullableStringFieldUpdateOperationsInput | null
  type?: EnumpricingTypeFieldUpdateOperationsInput
  interval?: EnumpricingIntervalFieldUpdateOperationsInput
  intervalCount?: NullableIntFieldUpdateOperationsInput | null
  trialPeriod?: NullableIntFieldUpdateOperationsInput | null
  stripePriceId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface SubscriptionCreateInput {
  status?: subscriptionStatus
  quantity?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodStartAt?: Date | null
  currentPeriodEndAt?: Date | null
  endedAt?: Date | null
  cancelAt?: Date | null
  canceledAat?: Date | null
  trialStartAt?: Date | null
  trialEndAt?: Date | null
  stripeSubscriptionId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  customer: CustomerCreateNestedOneWithoutSubscriptionsInput
  price: PriceCreateNestedOneWithoutSubscriptionsInput
}

export interface SubscriptionUncheckedCreateInput {
  id?: number
  status?: subscriptionStatus
  customerId: string
  priceId: string
  quantity?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodStartAt?: Date | null
  currentPeriodEndAt?: Date | null
  endedAt?: Date | null
  cancelAt?: Date | null
  canceledAat?: Date | null
  trialStartAt?: Date | null
  trialEndAt?: Date | null
  stripeSubscriptionId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface SubscriptionUpdateInput {
  status?: EnumsubscriptionStatusFieldUpdateOperationsInput
  quantity?: IntFieldUpdateOperationsInput
  cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput
  currentPeriodStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  currentPeriodEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  endedAt?: NullableDateTimeFieldUpdateOperationsInput | null
  cancelAt?: NullableDateTimeFieldUpdateOperationsInput | null
  canceledAat?: NullableDateTimeFieldUpdateOperationsInput | null
  trialStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  trialEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  customer?: CustomerUpdateOneRequiredWithoutSubscriptionsInput
  price?: PriceUpdateOneRequiredWithoutSubscriptionsInput
}

export interface SubscriptionUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  status?: EnumsubscriptionStatusFieldUpdateOperationsInput
  customerId?: StringFieldUpdateOperationsInput
  priceId?: StringFieldUpdateOperationsInput
  quantity?: IntFieldUpdateOperationsInput
  cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput
  currentPeriodStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  currentPeriodEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  endedAt?: NullableDateTimeFieldUpdateOperationsInput | null
  cancelAt?: NullableDateTimeFieldUpdateOperationsInput | null
  canceledAat?: NullableDateTimeFieldUpdateOperationsInput | null
  trialStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  trialEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface SubscriptionCreateManyInput {
  id?: number
  status?: subscriptionStatus
  customerId: string
  priceId: string
  quantity?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodStartAt?: Date | null
  currentPeriodEndAt?: Date | null
  endedAt?: Date | null
  cancelAt?: Date | null
  canceledAat?: Date | null
  trialStartAt?: Date | null
  trialEndAt?: Date | null
  stripeSubscriptionId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface SubscriptionUpdateManyMutationInput {
  status?: EnumsubscriptionStatusFieldUpdateOperationsInput
  quantity?: IntFieldUpdateOperationsInput
  cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput
  currentPeriodStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  currentPeriodEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  endedAt?: NullableDateTimeFieldUpdateOperationsInput | null
  cancelAt?: NullableDateTimeFieldUpdateOperationsInput | null
  canceledAat?: NullableDateTimeFieldUpdateOperationsInput | null
  trialStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  trialEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface SubscriptionUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  status?: EnumsubscriptionStatusFieldUpdateOperationsInput
  customerId?: StringFieldUpdateOperationsInput
  priceId?: StringFieldUpdateOperationsInput
  quantity?: IntFieldUpdateOperationsInput
  cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput
  currentPeriodStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  currentPeriodEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  endedAt?: NullableDateTimeFieldUpdateOperationsInput | null
  cancelAt?: NullableDateTimeFieldUpdateOperationsInput | null
  canceledAat?: NullableDateTimeFieldUpdateOperationsInput | null
  trialStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  trialEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface StringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringFilter
}

export interface BoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface StringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableFilter | null
}

export interface EnumUserRoleFilter {
  equals?: UserRole
  in?: UserRole[]
  notIn?: UserRole[]
  not?: NestedEnumUserRoleFilter
}

export interface DateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  role?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  role?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  role?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface StringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface BoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface EnumUserRoleWithAggregatesFilter {
  equals?: UserRole
  in?: UserRole[]
  notIn?: UserRole[]
  not?: NestedEnumUserRoleWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumUserRoleFilter
  _max?: NestedEnumUserRoleFilter
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface CustomerRelationFilter {
  is?: CustomerWhereInput | null
  isNot?: CustomerWhereInput | null
}

export interface JsonNullableFilter {
  equals?: JsonNullValueFilter
  not?: JsonNullValueFilter
}

export interface TenantCountOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface TenantMaxOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface TenantMinOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface JsonNullableWithAggregatesFilter {
  equals?: JsonNullValueFilter
  not?: JsonNullValueFilter
  _count?: NestedIntNullableFilter
  _min?: NestedJsonNullableFilter
  _max?: NestedJsonNullableFilter
}

export interface TenantRelationFilter {
  is?: TenantWhereInput
  isNot?: TenantWhereInput
}

export interface SubscriptionListRelationFilter {
  every?: SubscriptionWhereInput
  some?: SubscriptionWhereInput
  none?: SubscriptionWhereInput
}

export interface SubscriptionOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface CustomerCountOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  tenantId?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  stripeCustomerId?: SortOrder
  stripeBillingAddress?: SortOrder
  stripePaymentMethod?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface CustomerMaxOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  tenantId?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  stripeCustomerId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface CustomerMinOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  tenantId?: SortOrder
  name?: SortOrder
  email?: SortOrder
  mobile?: SortOrder
  cognitoUserId?: SortOrder
  cognitoPoolId?: SortOrder
  stripeCustomerId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PriceListRelationFilter {
  every?: PriceWhereInput
  some?: PriceWhereInput
  none?: PriceWhereInput
}

export interface PriceOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface ProductCountOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  image?: SortOrder
  description?: SortOrder
  stripeProductId?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface ProductMaxOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  image?: SortOrder
  description?: SortOrder
  stripeProductId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface ProductMinOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  name?: SortOrder
  image?: SortOrder
  description?: SortOrder
  stripeProductId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface ProductRelationFilter {
  is?: ProductWhereInput
  isNot?: ProductWhereInput
}

export interface IntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface EnumpricingTypeFilter {
  equals?: pricingType
  in?: pricingType[]
  notIn?: pricingType[]
  not?: NestedEnumpricingTypeFilter
}

export interface EnumpricingIntervalFilter {
  equals?: pricingInterval
  in?: pricingInterval[]
  notIn?: pricingInterval[]
  not?: NestedEnumpricingIntervalFilter
}

export interface PriceCountOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  productId?: SortOrder
  description?: SortOrder
  unitAmount?: SortOrder
  currency?: SortOrder
  type?: SortOrder
  interval?: SortOrder
  intervalCount?: SortOrder
  trialPeriod?: SortOrder
  stripePriceId?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PriceAvgOrderByAggregateInput {
  unitAmount?: SortOrder
  intervalCount?: SortOrder
  trialPeriod?: SortOrder
}

export interface PriceMaxOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  productId?: SortOrder
  description?: SortOrder
  unitAmount?: SortOrder
  currency?: SortOrder
  type?: SortOrder
  interval?: SortOrder
  intervalCount?: SortOrder
  trialPeriod?: SortOrder
  stripePriceId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PriceMinOrderByAggregateInput {
  id?: SortOrder
  active?: SortOrder
  productId?: SortOrder
  description?: SortOrder
  unitAmount?: SortOrder
  currency?: SortOrder
  type?: SortOrder
  interval?: SortOrder
  intervalCount?: SortOrder
  trialPeriod?: SortOrder
  stripePriceId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PriceSumOrderByAggregateInput {
  unitAmount?: SortOrder
  intervalCount?: SortOrder
  trialPeriod?: SortOrder
}

export interface IntNullableWithAggregatesFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _avg?: NestedFloatNullableFilter
  _sum?: NestedIntNullableFilter
  _min?: NestedIntNullableFilter
  _max?: NestedIntNullableFilter
}

export interface EnumpricingTypeWithAggregatesFilter {
  equals?: pricingType
  in?: pricingType[]
  notIn?: pricingType[]
  not?: NestedEnumpricingTypeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumpricingTypeFilter
  _max?: NestedEnumpricingTypeFilter
}

export interface EnumpricingIntervalWithAggregatesFilter {
  equals?: pricingInterval
  in?: pricingInterval[]
  notIn?: pricingInterval[]
  not?: NestedEnumpricingIntervalWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumpricingIntervalFilter
  _max?: NestedEnumpricingIntervalFilter
}

export interface IntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface EnumsubscriptionStatusFilter {
  equals?: subscriptionStatus
  in?: subscriptionStatus[]
  notIn?: subscriptionStatus[]
  not?: NestedEnumsubscriptionStatusFilter
}

export interface PriceRelationFilter {
  is?: PriceWhereInput
  isNot?: PriceWhereInput
}

export interface DateTimeNullableFilter {
  equals?: Date | null
  in?: Date[] | null
  notIn?: Date[] | null
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeNullableFilter | null
}

export interface SubscriptionCountOrderByAggregateInput {
  id?: SortOrder
  status?: SortOrder
  customerId?: SortOrder
  priceId?: SortOrder
  quantity?: SortOrder
  cancelAtPeriodEnd?: SortOrder
  currentPeriodStartAt?: SortOrder
  currentPeriodEndAt?: SortOrder
  endedAt?: SortOrder
  cancelAt?: SortOrder
  canceledAat?: SortOrder
  trialStartAt?: SortOrder
  trialEndAt?: SortOrder
  stripeSubscriptionId?: SortOrder
  metaData?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface SubscriptionAvgOrderByAggregateInput {
  id?: SortOrder
  quantity?: SortOrder
}

export interface SubscriptionMaxOrderByAggregateInput {
  id?: SortOrder
  status?: SortOrder
  customerId?: SortOrder
  priceId?: SortOrder
  quantity?: SortOrder
  cancelAtPeriodEnd?: SortOrder
  currentPeriodStartAt?: SortOrder
  currentPeriodEndAt?: SortOrder
  endedAt?: SortOrder
  cancelAt?: SortOrder
  canceledAat?: SortOrder
  trialStartAt?: SortOrder
  trialEndAt?: SortOrder
  stripeSubscriptionId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface SubscriptionMinOrderByAggregateInput {
  id?: SortOrder
  status?: SortOrder
  customerId?: SortOrder
  priceId?: SortOrder
  quantity?: SortOrder
  cancelAtPeriodEnd?: SortOrder
  currentPeriodStartAt?: SortOrder
  currentPeriodEndAt?: SortOrder
  endedAt?: SortOrder
  cancelAt?: SortOrder
  canceledAat?: SortOrder
  trialStartAt?: SortOrder
  trialEndAt?: SortOrder
  stripeSubscriptionId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface SubscriptionSumOrderByAggregateInput {
  id?: SortOrder
  quantity?: SortOrder
}

export interface IntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface EnumsubscriptionStatusWithAggregatesFilter {
  equals?: subscriptionStatus
  in?: subscriptionStatus[]
  notIn?: subscriptionStatus[]
  not?: NestedEnumsubscriptionStatusWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumsubscriptionStatusFilter
  _max?: NestedEnumsubscriptionStatusFilter
}

export interface DateTimeNullableWithAggregatesFilter {
  equals?: Date | null
  in?: Date[] | null
  notIn?: Date[] | null
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedDateTimeNullableFilter
  _max?: NestedDateTimeNullableFilter
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null
}

export interface EnumUserRoleFieldUpdateOperationsInput {
  set?: UserRole
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date
}

export interface CustomerCreateNestedOneWithoutTenantInput {
  create?: CustomerUncheckedCreateWithoutTenantInput
  connectOrCreate?: CustomerCreateOrConnectWithoutTenantInput
  connect?: CustomerWhereUniqueInput
}

export interface CustomerUncheckedCreateNestedOneWithoutTenantInput {
  create?: CustomerUncheckedCreateWithoutTenantInput
  connectOrCreate?: CustomerCreateOrConnectWithoutTenantInput
  connect?: CustomerWhereUniqueInput
}

export interface CustomerUpdateOneWithoutTenantInput {
  create?: CustomerUncheckedCreateWithoutTenantInput
  connectOrCreate?: CustomerCreateOrConnectWithoutTenantInput
  upsert?: CustomerUpsertWithoutTenantInput
  connect?: CustomerWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: CustomerUncheckedUpdateWithoutTenantInput
}

export interface CustomerUncheckedUpdateOneWithoutTenantInput {
  create?: CustomerUncheckedCreateWithoutTenantInput
  connectOrCreate?: CustomerCreateOrConnectWithoutTenantInput
  upsert?: CustomerUpsertWithoutTenantInput
  connect?: CustomerWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: CustomerUncheckedUpdateWithoutTenantInput
}

export interface TenantCreateNestedOneWithoutCustomerInput {
  create?: TenantUncheckedCreateWithoutCustomerInput
  connectOrCreate?: TenantCreateOrConnectWithoutCustomerInput
  connect?: TenantWhereUniqueInput
}

export interface SubscriptionCreateNestedManyWithoutCustomerInput {
  create?: SubscriptionCreateWithoutCustomerInput[]
  connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput[]
  createMany?: SubscriptionCreateManyCustomerInputEnvelope
  connect?: SubscriptionWhereUniqueInput[]
}

export interface SubscriptionUncheckedCreateNestedManyWithoutCustomerInput {
  create?: SubscriptionCreateWithoutCustomerInput[]
  connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput[]
  createMany?: SubscriptionCreateManyCustomerInputEnvelope
  connect?: SubscriptionWhereUniqueInput[]
}

export interface TenantUpdateOneRequiredWithoutCustomerInput {
  create?: TenantUncheckedCreateWithoutCustomerInput
  connectOrCreate?: TenantCreateOrConnectWithoutCustomerInput
  upsert?: TenantUpsertWithoutCustomerInput
  connect?: TenantWhereUniqueInput
  update?: TenantUncheckedUpdateWithoutCustomerInput
}

export interface SubscriptionUpdateManyWithoutCustomerInput {
  create?: SubscriptionCreateWithoutCustomerInput[]
  connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput[]
  upsert?: SubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
  createMany?: SubscriptionCreateManyCustomerInputEnvelope
  connect?: SubscriptionWhereUniqueInput[]
  set?: SubscriptionWhereUniqueInput[]
  disconnect?: SubscriptionWhereUniqueInput[]
  delete?: SubscriptionWhereUniqueInput[]
  update?: SubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
  updateMany?: SubscriptionUpdateManyWithWhereWithoutCustomerInput[]
  deleteMany?: SubscriptionScalarWhereInput[]
}

export interface SubscriptionUncheckedUpdateManyWithoutCustomerInput {
  create?: SubscriptionCreateWithoutCustomerInput[]
  connectOrCreate?: SubscriptionCreateOrConnectWithoutCustomerInput[]
  upsert?: SubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
  createMany?: SubscriptionCreateManyCustomerInputEnvelope
  connect?: SubscriptionWhereUniqueInput[]
  set?: SubscriptionWhereUniqueInput[]
  disconnect?: SubscriptionWhereUniqueInput[]
  delete?: SubscriptionWhereUniqueInput[]
  update?: SubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
  updateMany?: SubscriptionUpdateManyWithWhereWithoutCustomerInput[]
  deleteMany?: SubscriptionScalarWhereInput[]
}

export interface PriceCreateNestedManyWithoutProductInput {
  create?: PriceCreateWithoutProductInput[]
  connectOrCreate?: PriceCreateOrConnectWithoutProductInput[]
  createMany?: PriceCreateManyProductInputEnvelope
  connect?: PriceWhereUniqueInput[]
}

export interface PriceUncheckedCreateNestedManyWithoutProductInput {
  create?: PriceCreateWithoutProductInput[]
  connectOrCreate?: PriceCreateOrConnectWithoutProductInput[]
  createMany?: PriceCreateManyProductInputEnvelope
  connect?: PriceWhereUniqueInput[]
}

export interface PriceUpdateManyWithoutProductInput {
  create?: PriceCreateWithoutProductInput[]
  connectOrCreate?: PriceCreateOrConnectWithoutProductInput[]
  upsert?: PriceUpsertWithWhereUniqueWithoutProductInput[]
  createMany?: PriceCreateManyProductInputEnvelope
  connect?: PriceWhereUniqueInput[]
  set?: PriceWhereUniqueInput[]
  disconnect?: PriceWhereUniqueInput[]
  delete?: PriceWhereUniqueInput[]
  update?: PriceUpdateWithWhereUniqueWithoutProductInput[]
  updateMany?: PriceUpdateManyWithWhereWithoutProductInput[]
  deleteMany?: PriceScalarWhereInput[]
}

export interface PriceUncheckedUpdateManyWithoutProductInput {
  create?: PriceCreateWithoutProductInput[]
  connectOrCreate?: PriceCreateOrConnectWithoutProductInput[]
  upsert?: PriceUpsertWithWhereUniqueWithoutProductInput[]
  createMany?: PriceCreateManyProductInputEnvelope
  connect?: PriceWhereUniqueInput[]
  set?: PriceWhereUniqueInput[]
  disconnect?: PriceWhereUniqueInput[]
  delete?: PriceWhereUniqueInput[]
  update?: PriceUpdateWithWhereUniqueWithoutProductInput[]
  updateMany?: PriceUpdateManyWithWhereWithoutProductInput[]
  deleteMany?: PriceScalarWhereInput[]
}

export interface ProductCreateNestedOneWithoutPricesInput {
  create?: ProductUncheckedCreateWithoutPricesInput
  connectOrCreate?: ProductCreateOrConnectWithoutPricesInput
  connect?: ProductWhereUniqueInput
}

export interface SubscriptionCreateNestedManyWithoutPriceInput {
  create?: SubscriptionCreateWithoutPriceInput[]
  connectOrCreate?: SubscriptionCreateOrConnectWithoutPriceInput[]
  createMany?: SubscriptionCreateManyPriceInputEnvelope
  connect?: SubscriptionWhereUniqueInput[]
}

export interface SubscriptionUncheckedCreateNestedManyWithoutPriceInput {
  create?: SubscriptionCreateWithoutPriceInput[]
  connectOrCreate?: SubscriptionCreateOrConnectWithoutPriceInput[]
  createMany?: SubscriptionCreateManyPriceInputEnvelope
  connect?: SubscriptionWhereUniqueInput[]
}

export interface NullableIntFieldUpdateOperationsInput {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface EnumpricingTypeFieldUpdateOperationsInput {
  set?: pricingType
}

export interface EnumpricingIntervalFieldUpdateOperationsInput {
  set?: pricingInterval
}

export interface ProductUpdateOneRequiredWithoutPricesInput {
  create?: ProductUncheckedCreateWithoutPricesInput
  connectOrCreate?: ProductCreateOrConnectWithoutPricesInput
  upsert?: ProductUpsertWithoutPricesInput
  connect?: ProductWhereUniqueInput
  update?: ProductUncheckedUpdateWithoutPricesInput
}

export interface SubscriptionUpdateManyWithoutPriceInput {
  create?: SubscriptionCreateWithoutPriceInput[]
  connectOrCreate?: SubscriptionCreateOrConnectWithoutPriceInput[]
  upsert?: SubscriptionUpsertWithWhereUniqueWithoutPriceInput[]
  createMany?: SubscriptionCreateManyPriceInputEnvelope
  connect?: SubscriptionWhereUniqueInput[]
  set?: SubscriptionWhereUniqueInput[]
  disconnect?: SubscriptionWhereUniqueInput[]
  delete?: SubscriptionWhereUniqueInput[]
  update?: SubscriptionUpdateWithWhereUniqueWithoutPriceInput[]
  updateMany?: SubscriptionUpdateManyWithWhereWithoutPriceInput[]
  deleteMany?: SubscriptionScalarWhereInput[]
}

export interface SubscriptionUncheckedUpdateManyWithoutPriceInput {
  create?: SubscriptionCreateWithoutPriceInput[]
  connectOrCreate?: SubscriptionCreateOrConnectWithoutPriceInput[]
  upsert?: SubscriptionUpsertWithWhereUniqueWithoutPriceInput[]
  createMany?: SubscriptionCreateManyPriceInputEnvelope
  connect?: SubscriptionWhereUniqueInput[]
  set?: SubscriptionWhereUniqueInput[]
  disconnect?: SubscriptionWhereUniqueInput[]
  delete?: SubscriptionWhereUniqueInput[]
  update?: SubscriptionUpdateWithWhereUniqueWithoutPriceInput[]
  updateMany?: SubscriptionUpdateManyWithWhereWithoutPriceInput[]
  deleteMany?: SubscriptionScalarWhereInput[]
}

export interface CustomerCreateNestedOneWithoutSubscriptionsInput {
  create?: CustomerUncheckedCreateWithoutSubscriptionsInput
  connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
  connect?: CustomerWhereUniqueInput
}

export interface PriceCreateNestedOneWithoutSubscriptionsInput {
  create?: PriceUncheckedCreateWithoutSubscriptionsInput
  connectOrCreate?: PriceCreateOrConnectWithoutSubscriptionsInput
  connect?: PriceWhereUniqueInput
}

export interface EnumsubscriptionStatusFieldUpdateOperationsInput {
  set?: subscriptionStatus
}

export interface IntFieldUpdateOperationsInput {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: Date | null
}

export interface CustomerUpdateOneRequiredWithoutSubscriptionsInput {
  create?: CustomerUncheckedCreateWithoutSubscriptionsInput
  connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
  upsert?: CustomerUpsertWithoutSubscriptionsInput
  connect?: CustomerWhereUniqueInput
  update?: CustomerUncheckedUpdateWithoutSubscriptionsInput
}

export interface PriceUpdateOneRequiredWithoutSubscriptionsInput {
  create?: PriceUncheckedCreateWithoutSubscriptionsInput
  connectOrCreate?: PriceCreateOrConnectWithoutSubscriptionsInput
  upsert?: PriceUpsertWithoutSubscriptionsInput
  connect?: PriceWhereUniqueInput
  update?: PriceUncheckedUpdateWithoutSubscriptionsInput
}

export interface NestedStringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface NestedBoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface NestedStringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export interface NestedEnumUserRoleFilter {
  equals?: UserRole
  in?: UserRole[]
  notIn?: UserRole[]
  not?: NestedEnumUserRoleFilter
}

export interface NestedDateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface NestedStringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface NestedIntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface NestedIntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface NestedEnumUserRoleWithAggregatesFilter {
  equals?: UserRole
  in?: UserRole[]
  notIn?: UserRole[]
  not?: NestedEnumUserRoleWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumUserRoleFilter
  _max?: NestedEnumUserRoleFilter
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface NestedJsonNullableFilter {
  equals?: JsonNullValueFilter
  not?: JsonNullValueFilter
}

export interface NestedEnumpricingTypeFilter {
  equals?: pricingType
  in?: pricingType[]
  notIn?: pricingType[]
  not?: NestedEnumpricingTypeFilter
}

export interface NestedEnumpricingIntervalFilter {
  equals?: pricingInterval
  in?: pricingInterval[]
  notIn?: pricingInterval[]
  not?: NestedEnumpricingIntervalFilter
}

export interface NestedIntNullableWithAggregatesFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _avg?: NestedFloatNullableFilter
  _sum?: NestedIntNullableFilter
  _min?: NestedIntNullableFilter
  _max?: NestedIntNullableFilter
}

export interface NestedFloatNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatNullableFilter | null
}

export interface NestedEnumpricingTypeWithAggregatesFilter {
  equals?: pricingType
  in?: pricingType[]
  notIn?: pricingType[]
  not?: NestedEnumpricingTypeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumpricingTypeFilter
  _max?: NestedEnumpricingTypeFilter
}

export interface NestedEnumpricingIntervalWithAggregatesFilter {
  equals?: pricingInterval
  in?: pricingInterval[]
  notIn?: pricingInterval[]
  not?: NestedEnumpricingIntervalWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumpricingIntervalFilter
  _max?: NestedEnumpricingIntervalFilter
}

export interface NestedEnumsubscriptionStatusFilter {
  equals?: subscriptionStatus
  in?: subscriptionStatus[]
  notIn?: subscriptionStatus[]
  not?: NestedEnumsubscriptionStatusFilter
}

export interface NestedDateTimeNullableFilter {
  equals?: Date | null
  in?: Date[] | null
  notIn?: Date[] | null
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeNullableFilter | null
}

export interface NestedIntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface NestedFloatFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatFilter
}

export interface NestedEnumsubscriptionStatusWithAggregatesFilter {
  equals?: subscriptionStatus
  in?: subscriptionStatus[]
  notIn?: subscriptionStatus[]
  not?: NestedEnumsubscriptionStatusWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumsubscriptionStatusFilter
  _max?: NestedEnumsubscriptionStatusFilter
}

export interface NestedDateTimeNullableWithAggregatesFilter {
  equals?: Date | null
  in?: Date[] | null
  notIn?: Date[] | null
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedDateTimeNullableFilter
  _max?: NestedDateTimeNullableFilter
}

export interface CustomerCreateWithoutTenantInput {
  id?: string
  active?: boolean
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  stripeCustomerId?: string | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  subscriptions?: SubscriptionCreateNestedManyWithoutCustomerInput
}

export interface CustomerUncheckedCreateWithoutTenantInput {
  id?: string
  active?: boolean
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  stripeCustomerId?: string | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutCustomerInput
}

export interface CustomerCreateOrConnectWithoutTenantInput {
  where: CustomerWhereUniqueInput
  create: CustomerUncheckedCreateWithoutTenantInput
}

export interface CustomerUpsertWithoutTenantInput {
  update: CustomerUncheckedUpdateWithoutTenantInput
  create: CustomerUncheckedCreateWithoutTenantInput
}

export interface CustomerUpdateWithoutTenantInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  stripeCustomerId?: NullableStringFieldUpdateOperationsInput | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  subscriptions?: SubscriptionUpdateManyWithoutCustomerInput
}

export interface CustomerUncheckedUpdateWithoutTenantInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  stripeCustomerId?: NullableStringFieldUpdateOperationsInput | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  subscriptions?: SubscriptionUncheckedUpdateManyWithoutCustomerInput
}

export interface TenantCreateWithoutCustomerInput {
  id?: string
  active?: boolean
  name?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface TenantUncheckedCreateWithoutCustomerInput {
  id?: string
  active?: boolean
  name?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface TenantCreateOrConnectWithoutCustomerInput {
  where: TenantWhereUniqueInput
  create: TenantUncheckedCreateWithoutCustomerInput
}

export interface SubscriptionCreateWithoutCustomerInput {
  status?: subscriptionStatus
  quantity?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodStartAt?: Date | null
  currentPeriodEndAt?: Date | null
  endedAt?: Date | null
  cancelAt?: Date | null
  canceledAat?: Date | null
  trialStartAt?: Date | null
  trialEndAt?: Date | null
  stripeSubscriptionId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  price: PriceCreateNestedOneWithoutSubscriptionsInput
}

export interface SubscriptionUncheckedCreateWithoutCustomerInput {
  id?: number
  status?: subscriptionStatus
  priceId: string
  quantity?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodStartAt?: Date | null
  currentPeriodEndAt?: Date | null
  endedAt?: Date | null
  cancelAt?: Date | null
  canceledAat?: Date | null
  trialStartAt?: Date | null
  trialEndAt?: Date | null
  stripeSubscriptionId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface SubscriptionCreateOrConnectWithoutCustomerInput {
  where: SubscriptionWhereUniqueInput
  create: SubscriptionUncheckedCreateWithoutCustomerInput
}

export interface SubscriptionCreateManyCustomerInputEnvelope {
  data: SubscriptionCreateManyCustomerInput[]
  skipDuplicates?: boolean
}

export interface TenantUpsertWithoutCustomerInput {
  update: TenantUncheckedUpdateWithoutCustomerInput
  create: TenantUncheckedCreateWithoutCustomerInput
}

export interface TenantUpdateWithoutCustomerInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface TenantUncheckedUpdateWithoutCustomerInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface SubscriptionUpsertWithWhereUniqueWithoutCustomerInput {
  where: SubscriptionWhereUniqueInput
  update: SubscriptionUncheckedUpdateWithoutCustomerInput
  create: SubscriptionUncheckedCreateWithoutCustomerInput
}

export interface SubscriptionUpdateWithWhereUniqueWithoutCustomerInput {
  where: SubscriptionWhereUniqueInput
  data: SubscriptionUncheckedUpdateWithoutCustomerInput
}

export interface SubscriptionUpdateManyWithWhereWithoutCustomerInput {
  where: SubscriptionScalarWhereInput
  data: SubscriptionUncheckedUpdateManyWithoutSubscriptionsInput
}

export interface SubscriptionScalarWhereInput {
  AND?: SubscriptionScalarWhereInput[]
  OR?: SubscriptionScalarWhereInput[]
  NOT?: SubscriptionScalarWhereInput[]
  id?: IntFilter
  status?: EnumsubscriptionStatusFilter
  customerId?: StringFilter
  priceId?: StringFilter
  quantity?: IntFilter
  cancelAtPeriodEnd?: BoolFilter
  currentPeriodStartAt?: DateTimeNullableFilter | null
  currentPeriodEndAt?: DateTimeNullableFilter | null
  endedAt?: DateTimeNullableFilter | null
  cancelAt?: DateTimeNullableFilter | null
  canceledAat?: DateTimeNullableFilter | null
  trialStartAt?: DateTimeNullableFilter | null
  trialEndAt?: DateTimeNullableFilter | null
  stripeSubscriptionId?: StringNullableFilter | null
  metaData?: JsonNullableFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface PriceCreateWithoutProductInput {
  id?: string
  active?: boolean
  description?: string | null
  unitAmount?: number | null
  currency?: string | null
  type?: pricingType
  interval?: pricingInterval
  intervalCount?: number | null
  trialPeriod?: number | null
  stripePriceId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  subscriptions?: SubscriptionCreateNestedManyWithoutPriceInput
}

export interface PriceUncheckedCreateWithoutProductInput {
  id?: string
  active?: boolean
  description?: string | null
  unitAmount?: number | null
  currency?: string | null
  type?: pricingType
  interval?: pricingInterval
  intervalCount?: number | null
  trialPeriod?: number | null
  stripePriceId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPriceInput
}

export interface PriceCreateOrConnectWithoutProductInput {
  where: PriceWhereUniqueInput
  create: PriceUncheckedCreateWithoutProductInput
}

export interface PriceCreateManyProductInputEnvelope {
  data: PriceCreateManyProductInput[]
  skipDuplicates?: boolean
}

export interface PriceUpsertWithWhereUniqueWithoutProductInput {
  where: PriceWhereUniqueInput
  update: PriceUncheckedUpdateWithoutProductInput
  create: PriceUncheckedCreateWithoutProductInput
}

export interface PriceUpdateWithWhereUniqueWithoutProductInput {
  where: PriceWhereUniqueInput
  data: PriceUncheckedUpdateWithoutProductInput
}

export interface PriceUpdateManyWithWhereWithoutProductInput {
  where: PriceScalarWhereInput
  data: PriceUncheckedUpdateManyWithoutPricesInput
}

export interface PriceScalarWhereInput {
  AND?: PriceScalarWhereInput[]
  OR?: PriceScalarWhereInput[]
  NOT?: PriceScalarWhereInput[]
  id?: StringFilter
  active?: BoolFilter
  productId?: StringFilter
  description?: StringNullableFilter | null
  unitAmount?: IntNullableFilter | null
  currency?: StringNullableFilter | null
  type?: EnumpricingTypeFilter
  interval?: EnumpricingIntervalFilter
  intervalCount?: IntNullableFilter | null
  trialPeriod?: IntNullableFilter | null
  stripePriceId?: StringNullableFilter | null
  metaData?: JsonNullableFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface ProductCreateWithoutPricesInput {
  id?: string
  active?: boolean
  name?: string | null
  image?: string | null
  description?: string | null
  stripeProductId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface ProductUncheckedCreateWithoutPricesInput {
  id?: string
  active?: boolean
  name?: string | null
  image?: string | null
  description?: string | null
  stripeProductId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface ProductCreateOrConnectWithoutPricesInput {
  where: ProductWhereUniqueInput
  create: ProductUncheckedCreateWithoutPricesInput
}

export interface SubscriptionCreateWithoutPriceInput {
  status?: subscriptionStatus
  quantity?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodStartAt?: Date | null
  currentPeriodEndAt?: Date | null
  endedAt?: Date | null
  cancelAt?: Date | null
  canceledAat?: Date | null
  trialStartAt?: Date | null
  trialEndAt?: Date | null
  stripeSubscriptionId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  customer: CustomerCreateNestedOneWithoutSubscriptionsInput
}

export interface SubscriptionUncheckedCreateWithoutPriceInput {
  id?: number
  status?: subscriptionStatus
  customerId: string
  quantity?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodStartAt?: Date | null
  currentPeriodEndAt?: Date | null
  endedAt?: Date | null
  cancelAt?: Date | null
  canceledAat?: Date | null
  trialStartAt?: Date | null
  trialEndAt?: Date | null
  stripeSubscriptionId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface SubscriptionCreateOrConnectWithoutPriceInput {
  where: SubscriptionWhereUniqueInput
  create: SubscriptionUncheckedCreateWithoutPriceInput
}

export interface SubscriptionCreateManyPriceInputEnvelope {
  data: SubscriptionCreateManyPriceInput[]
  skipDuplicates?: boolean
}

export interface ProductUpsertWithoutPricesInput {
  update: ProductUncheckedUpdateWithoutPricesInput
  create: ProductUncheckedCreateWithoutPricesInput
}

export interface ProductUpdateWithoutPricesInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  image?: NullableStringFieldUpdateOperationsInput | null
  description?: NullableStringFieldUpdateOperationsInput | null
  stripeProductId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface ProductUncheckedUpdateWithoutPricesInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  image?: NullableStringFieldUpdateOperationsInput | null
  description?: NullableStringFieldUpdateOperationsInput | null
  stripeProductId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface SubscriptionUpsertWithWhereUniqueWithoutPriceInput {
  where: SubscriptionWhereUniqueInput
  update: SubscriptionUncheckedUpdateWithoutPriceInput
  create: SubscriptionUncheckedCreateWithoutPriceInput
}

export interface SubscriptionUpdateWithWhereUniqueWithoutPriceInput {
  where: SubscriptionWhereUniqueInput
  data: SubscriptionUncheckedUpdateWithoutPriceInput
}

export interface SubscriptionUpdateManyWithWhereWithoutPriceInput {
  where: SubscriptionScalarWhereInput
  data: SubscriptionUncheckedUpdateManyWithoutSubscriptionsInput
}

export interface CustomerCreateWithoutSubscriptionsInput {
  id?: string
  active?: boolean
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  stripeCustomerId?: string | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  tenant: TenantCreateNestedOneWithoutCustomerInput
}

export interface CustomerUncheckedCreateWithoutSubscriptionsInput {
  id?: string
  active?: boolean
  tenantId: string
  name?: string | null
  email: string
  mobile?: string | null
  cognitoUserId?: string | null
  cognitoPoolId?: string | null
  stripeCustomerId?: string | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface CustomerCreateOrConnectWithoutSubscriptionsInput {
  where: CustomerWhereUniqueInput
  create: CustomerUncheckedCreateWithoutSubscriptionsInput
}

export interface PriceCreateWithoutSubscriptionsInput {
  id?: string
  active?: boolean
  description?: string | null
  unitAmount?: number | null
  currency?: string | null
  type?: pricingType
  interval?: pricingInterval
  intervalCount?: number | null
  trialPeriod?: number | null
  stripePriceId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
  product: ProductCreateNestedOneWithoutPricesInput
}

export interface PriceUncheckedCreateWithoutSubscriptionsInput {
  id?: string
  active?: boolean
  productId: string
  description?: string | null
  unitAmount?: number | null
  currency?: string | null
  type?: pricingType
  interval?: pricingInterval
  intervalCount?: number | null
  trialPeriod?: number | null
  stripePriceId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface PriceCreateOrConnectWithoutSubscriptionsInput {
  where: PriceWhereUniqueInput
  create: PriceUncheckedCreateWithoutSubscriptionsInput
}

export interface CustomerUpsertWithoutSubscriptionsInput {
  update: CustomerUncheckedUpdateWithoutSubscriptionsInput
  create: CustomerUncheckedCreateWithoutSubscriptionsInput
}

export interface CustomerUpdateWithoutSubscriptionsInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  stripeCustomerId?: NullableStringFieldUpdateOperationsInput | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  tenant?: TenantUpdateOneRequiredWithoutCustomerInput
}

export interface CustomerUncheckedUpdateWithoutSubscriptionsInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  tenantId?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  email?: StringFieldUpdateOperationsInput
  mobile?: NullableStringFieldUpdateOperationsInput | null
  cognitoUserId?: NullableStringFieldUpdateOperationsInput | null
  cognitoPoolId?: NullableStringFieldUpdateOperationsInput | null
  stripeCustomerId?: NullableStringFieldUpdateOperationsInput | null
  stripeBillingAddress?: NullableJsonNullValueInput
  stripePaymentMethod?: NullableJsonNullValueInput
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PriceUpsertWithoutSubscriptionsInput {
  update: PriceUncheckedUpdateWithoutSubscriptionsInput
  create: PriceUncheckedCreateWithoutSubscriptionsInput
}

export interface PriceUpdateWithoutSubscriptionsInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  description?: NullableStringFieldUpdateOperationsInput | null
  unitAmount?: NullableIntFieldUpdateOperationsInput | null
  currency?: NullableStringFieldUpdateOperationsInput | null
  type?: EnumpricingTypeFieldUpdateOperationsInput
  interval?: EnumpricingIntervalFieldUpdateOperationsInput
  intervalCount?: NullableIntFieldUpdateOperationsInput | null
  trialPeriod?: NullableIntFieldUpdateOperationsInput | null
  stripePriceId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  product?: ProductUpdateOneRequiredWithoutPricesInput
}

export interface PriceUncheckedUpdateWithoutSubscriptionsInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  productId?: StringFieldUpdateOperationsInput
  description?: NullableStringFieldUpdateOperationsInput | null
  unitAmount?: NullableIntFieldUpdateOperationsInput | null
  currency?: NullableStringFieldUpdateOperationsInput | null
  type?: EnumpricingTypeFieldUpdateOperationsInput
  interval?: EnumpricingIntervalFieldUpdateOperationsInput
  intervalCount?: NullableIntFieldUpdateOperationsInput | null
  trialPeriod?: NullableIntFieldUpdateOperationsInput | null
  stripePriceId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface SubscriptionCreateManyCustomerInput {
  id?: number
  status?: subscriptionStatus
  priceId: string
  quantity?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodStartAt?: Date | null
  currentPeriodEndAt?: Date | null
  endedAt?: Date | null
  cancelAt?: Date | null
  canceledAat?: Date | null
  trialStartAt?: Date | null
  trialEndAt?: Date | null
  stripeSubscriptionId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface SubscriptionUpdateWithoutCustomerInput {
  status?: EnumsubscriptionStatusFieldUpdateOperationsInput
  quantity?: IntFieldUpdateOperationsInput
  cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput
  currentPeriodStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  currentPeriodEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  endedAt?: NullableDateTimeFieldUpdateOperationsInput | null
  cancelAt?: NullableDateTimeFieldUpdateOperationsInput | null
  canceledAat?: NullableDateTimeFieldUpdateOperationsInput | null
  trialStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  trialEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  price?: PriceUpdateOneRequiredWithoutSubscriptionsInput
}

export interface SubscriptionUncheckedUpdateWithoutCustomerInput {
  id?: IntFieldUpdateOperationsInput
  status?: EnumsubscriptionStatusFieldUpdateOperationsInput
  priceId?: StringFieldUpdateOperationsInput
  quantity?: IntFieldUpdateOperationsInput
  cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput
  currentPeriodStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  currentPeriodEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  endedAt?: NullableDateTimeFieldUpdateOperationsInput | null
  cancelAt?: NullableDateTimeFieldUpdateOperationsInput | null
  canceledAat?: NullableDateTimeFieldUpdateOperationsInput | null
  trialStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  trialEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface SubscriptionUncheckedUpdateManyWithoutSubscriptionsInput {
  id?: IntFieldUpdateOperationsInput
  status?: EnumsubscriptionStatusFieldUpdateOperationsInput
  priceId?: StringFieldUpdateOperationsInput
  quantity?: IntFieldUpdateOperationsInput
  cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput
  currentPeriodStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  currentPeriodEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  endedAt?: NullableDateTimeFieldUpdateOperationsInput | null
  cancelAt?: NullableDateTimeFieldUpdateOperationsInput | null
  canceledAat?: NullableDateTimeFieldUpdateOperationsInput | null
  trialStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  trialEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PriceCreateManyProductInput {
  id?: string
  active?: boolean
  description?: string | null
  unitAmount?: number | null
  currency?: string | null
  type?: pricingType
  interval?: pricingInterval
  intervalCount?: number | null
  trialPeriod?: number | null
  stripePriceId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface PriceUpdateWithoutProductInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  description?: NullableStringFieldUpdateOperationsInput | null
  unitAmount?: NullableIntFieldUpdateOperationsInput | null
  currency?: NullableStringFieldUpdateOperationsInput | null
  type?: EnumpricingTypeFieldUpdateOperationsInput
  interval?: EnumpricingIntervalFieldUpdateOperationsInput
  intervalCount?: NullableIntFieldUpdateOperationsInput | null
  trialPeriod?: NullableIntFieldUpdateOperationsInput | null
  stripePriceId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  subscriptions?: SubscriptionUpdateManyWithoutPriceInput
}

export interface PriceUncheckedUpdateWithoutProductInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  description?: NullableStringFieldUpdateOperationsInput | null
  unitAmount?: NullableIntFieldUpdateOperationsInput | null
  currency?: NullableStringFieldUpdateOperationsInput | null
  type?: EnumpricingTypeFieldUpdateOperationsInput
  interval?: EnumpricingIntervalFieldUpdateOperationsInput
  intervalCount?: NullableIntFieldUpdateOperationsInput | null
  trialPeriod?: NullableIntFieldUpdateOperationsInput | null
  stripePriceId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  subscriptions?: SubscriptionUncheckedUpdateManyWithoutPriceInput
}

export interface PriceUncheckedUpdateManyWithoutPricesInput {
  id?: StringFieldUpdateOperationsInput
  active?: BoolFieldUpdateOperationsInput
  description?: NullableStringFieldUpdateOperationsInput | null
  unitAmount?: NullableIntFieldUpdateOperationsInput | null
  currency?: NullableStringFieldUpdateOperationsInput | null
  type?: EnumpricingTypeFieldUpdateOperationsInput
  interval?: EnumpricingIntervalFieldUpdateOperationsInput
  intervalCount?: NullableIntFieldUpdateOperationsInput | null
  trialPeriod?: NullableIntFieldUpdateOperationsInput | null
  stripePriceId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface SubscriptionCreateManyPriceInput {
  id?: number
  status?: subscriptionStatus
  customerId: string
  quantity?: number
  cancelAtPeriodEnd?: boolean
  currentPeriodStartAt?: Date | null
  currentPeriodEndAt?: Date | null
  endedAt?: Date | null
  cancelAt?: Date | null
  canceledAat?: Date | null
  trialStartAt?: Date | null
  trialEndAt?: Date | null
  stripeSubscriptionId?: string | null
  metaData?: NullableJsonNullValueInput
  createdAt?: Date
  updatedAt?: Date
}

export interface SubscriptionUpdateWithoutPriceInput {
  status?: EnumsubscriptionStatusFieldUpdateOperationsInput
  quantity?: IntFieldUpdateOperationsInput
  cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput
  currentPeriodStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  currentPeriodEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  endedAt?: NullableDateTimeFieldUpdateOperationsInput | null
  cancelAt?: NullableDateTimeFieldUpdateOperationsInput | null
  canceledAat?: NullableDateTimeFieldUpdateOperationsInput | null
  trialStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  trialEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  customer?: CustomerUpdateOneRequiredWithoutSubscriptionsInput
}

export interface SubscriptionUncheckedUpdateWithoutPriceInput {
  id?: IntFieldUpdateOperationsInput
  status?: EnumsubscriptionStatusFieldUpdateOperationsInput
  customerId?: StringFieldUpdateOperationsInput
  quantity?: IntFieldUpdateOperationsInput
  cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput
  currentPeriodStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  currentPeriodEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  endedAt?: NullableDateTimeFieldUpdateOperationsInput | null
  cancelAt?: NullableDateTimeFieldUpdateOperationsInput | null
  canceledAat?: NullableDateTimeFieldUpdateOperationsInput | null
  trialStartAt?: NullableDateTimeFieldUpdateOperationsInput | null
  trialEndAt?: NullableDateTimeFieldUpdateOperationsInput | null
  stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | null
  metaData?: NullableJsonNullValueInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export enum UserScalarFieldEnum {
  id = 'id',
  active = 'active',
  name = 'name',
  email = 'email',
  mobile = 'mobile',
  cognitoUserId = 'cognitoUserId',
  cognitoPoolId = 'cognitoPoolId',
  role = 'role',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum TenantScalarFieldEnum {
  id = 'id',
  active = 'active',
  name = 'name',
  metaData = 'metaData',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum CustomerScalarFieldEnum {
  id = 'id',
  active = 'active',
  tenantId = 'tenantId',
  name = 'name',
  email = 'email',
  mobile = 'mobile',
  cognitoUserId = 'cognitoUserId',
  cognitoPoolId = 'cognitoPoolId',
  stripeCustomerId = 'stripeCustomerId',
  stripeBillingAddress = 'stripeBillingAddress',
  stripePaymentMethod = 'stripePaymentMethod',
  metaData = 'metaData',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum ProductScalarFieldEnum {
  id = 'id',
  active = 'active',
  name = 'name',
  image = 'image',
  description = 'description',
  stripeProductId = 'stripeProductId',
  metaData = 'metaData',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum PriceScalarFieldEnum {
  id = 'id',
  active = 'active',
  productId = 'productId',
  description = 'description',
  unitAmount = 'unitAmount',
  currency = 'currency',
  type = 'type',
  interval = 'interval',
  intervalCount = 'intervalCount',
  trialPeriod = 'trialPeriod',
  stripePriceId = 'stripePriceId',
  metaData = 'metaData',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum SubscriptionScalarFieldEnum {
  id = 'id',
  status = 'status',
  customerId = 'customerId',
  priceId = 'priceId',
  quantity = 'quantity',
  cancelAtPeriodEnd = 'cancelAtPeriodEnd',
  currentPeriodStartAt = 'currentPeriodStartAt',
  currentPeriodEndAt = 'currentPeriodEndAt',
  endedAt = 'endedAt',
  cancelAt = 'cancelAt',
  canceledAat = 'canceledAat',
  trialStartAt = 'trialStartAt',
  trialEndAt = 'trialEndAt',
  stripeSubscriptionId = 'stripeSubscriptionId',
  metaData = 'metaData',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum JsonNullValueFilter {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
  AnyNull = 'AnyNull',
}
export enum UserRole {
  ADMIN = 'ADMIN',
  ROOT = 'ROOT',
}
export enum pricingType {
  ONE_TIME = 'ONE_TIME',
  RECURRING = 'RECURRING',
}
export enum pricingInterval {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}
export enum subscriptionStatus {
  TRIALING = 'TRIALING',
  ACTIVE = 'ACTIVE',
  CANCLED = 'CANCLED',
  INCOMPLETE = 'INCOMPLETE',
  INCOMPLETE_EXPIRED = 'INCOMPLETE_EXPIRED',
  PAST_DUE = 'PAST_DUE',
  UNPAID = 'UNPAID',
}
