'use server'

import prisma from './prismaClient'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const getReports = async () => {
  try {
    const query = await prisma.report.findMany({
      include: {
        author: true,
      },
    })
    return query
  } catch (error) {
    console.error(error)
  } finally {
    prisma.$disconnect()
  }
}

export const createReport = async (formData) => {
  try {
    const queryCreate = await prisma.report.create({
      data: {
        title: formData.get('title'),
        content: formData.get('content'),
        authorId: cookies().get('userId').value,
      },
    })
    return queryCreate
  } catch (error) {
    console.error(error)
  } finally {
    prisma.$disconnect()
    redirect('/laporan')
  }
}

export const editReport = async (formData) => {
  const data = {
    id: formData.get('id'),
    title: formData.get('title'),
    content: formData.get('content'),
  }
  try {
    const query = await prisma.report.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        content: data.content,
        authorId: cookies().get('userId').value,
      },
    })
    return query
  } catch (error) {
    console.error(error)
  } finally {
    prisma.$disconnect()
    redirect('/laporan')
  }
}

export const deleteReport = async (id) => {
  try {
    await prisma.report.delete({
      where: {
        id: id,
      },
    })
  } catch (error) {
    console.error(error)
  }
}
