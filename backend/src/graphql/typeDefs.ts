import Subscription from './Subscription/typeDefs'
import Price from './Price/typeDefs'
import Product from './Product/typeDefs'
import Customer from './Customer/typeDefs'
import Tenant from './Tenant/typeDefs'
import User from './User/typeDefs'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { sdlInputs } from '@paljs/plugins'

const Json = /* GraphQL */ `
  scalar Json
`

export default mergeTypeDefs([
  sdlInputs(),
  Json,
  User,
  Tenant,
  Customer,
  Product,
  Price,
  Subscription,
])
