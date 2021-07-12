import { PrismaClient } from '@prisma/client'
export const db = new PrismaClient()
console.log('db: called')
