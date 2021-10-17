import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueSubscription: (_parent, args, { prisma }) => {
      return prisma.subscription.findUnique(args)
    },
    findFirstSubscription: (_parent, args, { prisma }) => {
      return prisma.subscription.findFirst(args)
    },
    findManySubscription: (_parent, args, { prisma }) => {
      return prisma.subscription.findMany(args)
    },
    findManySubscriptionCount: (_parent, args, { prisma }) => {
      return prisma.subscription.count(args)
    },
    aggregateSubscription: (_parent, args, { prisma }) => {
      return prisma.subscription.aggregate(args)
    },
  },
  Mutation: {
    createOneSubscription: (_parent, args, { prisma }) => {
      return prisma.subscription.create(args)
    },
    updateOneSubscription: (_parent, args, { prisma }) => {
      return prisma.subscription.update(args)
    },
    deleteOneSubscription: async (_parent, args, { prisma }) => {
      return prisma.subscription.delete(args)
    },
    upsertOneSubscription: async (_parent, args, { prisma }) => {
      return prisma.subscription.upsert(args)
    },
    deleteManySubscription: async (_parent, args, { prisma }) => {
      return prisma.subscription.deleteMany(args)
    },
    updateManySubscription: (_parent, args, { prisma }) => {
      return prisma.subscription.updateMany(args)
    },
  },
}
export default resolvers
