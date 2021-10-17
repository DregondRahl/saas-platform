import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueCustomer: (_parent, args, { prisma }) => {
      return prisma.customer.findUnique(args)
    },
    findFirstCustomer: (_parent, args, { prisma }) => {
      return prisma.customer.findFirst(args)
    },
    findManyCustomer: (_parent, args, { prisma }) => {
      return prisma.customer.findMany(args)
    },
    findManyCustomerCount: (_parent, args, { prisma }) => {
      return prisma.customer.count(args)
    },
    aggregateCustomer: (_parent, args, { prisma }) => {
      return prisma.customer.aggregate(args)
    },
  },
  Mutation: {
    createOneCustomer: (_parent, args, { prisma }) => {
      return prisma.customer.create(args)
    },
    updateOneCustomer: (_parent, args, { prisma }) => {
      return prisma.customer.update(args)
    },
    deleteOneCustomer: async (_parent, args, { prisma }) => {
      return prisma.customer.delete(args)
    },
    upsertOneCustomer: async (_parent, args, { prisma }) => {
      return prisma.customer.upsert(args)
    },
    deleteManyCustomer: async (_parent, args, { prisma }) => {
      return prisma.customer.deleteMany(args)
    },
    updateManyCustomer: (_parent, args, { prisma }) => {
      return prisma.customer.updateMany(args)
    },
  },
}
export default resolvers
