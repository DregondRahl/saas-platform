import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueTenant: (_parent, args, { prisma }) => {
      return prisma.tenant.findUnique(args)
    },
    findFirstTenant: (_parent, args, { prisma }) => {
      return prisma.tenant.findFirst(args)
    },
    findManyTenant: (_parent, args, { prisma }) => {
      return prisma.tenant.findMany(args)
    },
    findManyTenantCount: (_parent, args, { prisma }) => {
      return prisma.tenant.count(args)
    },
    aggregateTenant: (_parent, args, { prisma }) => {
      return prisma.tenant.aggregate(args)
    },
  },
  Mutation: {
    createOneTenant: (_parent, args, { prisma }) => {
      return prisma.tenant.create(args)
    },
    updateOneTenant: (_parent, args, { prisma }) => {
      return prisma.tenant.update(args)
    },
    deleteOneTenant: async (_parent, args, { prisma }) => {
      return prisma.tenant.delete(args)
    },
    upsertOneTenant: async (_parent, args, { prisma }) => {
      return prisma.tenant.upsert(args)
    },
    deleteManyTenant: async (_parent, args, { prisma }) => {
      return prisma.tenant.deleteMany(args)
    },
    updateManyTenant: (_parent, args, { prisma }) => {
      return prisma.tenant.updateMany(args)
    },
  },
}
export default resolvers
