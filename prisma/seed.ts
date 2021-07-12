import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function seed(): Promise<void> {
  const users = [
    { name: 'test_001', email: 'test_001@ts_express_boilerplate.example' },
    { name: 'test_002', email: 'test_002@ts_express_boilerplate.example' },
    { name: 'test_003', email: 'test_003@ts_express_boilerplate.example' },
  ]
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        name: user.name,
      },
    })
  }
  await prisma.$disconnect()
}
