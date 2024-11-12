'use server'

import { redirect } from 'next/navigation'
import prisma from './prismaClient'
import { createSession } from '@/utils/session'
import { cookies } from 'next/headers'

export async function login(formData) {
  try {
    const query = await prisma.user.findUnique({
      where: {
        email: formData.get('email'),
        password: formData.get('password'),
      },
    })
    if (!query) {
      throw new Error('Invalid username or password')
    }
    await createSession(query)
  } catch (error) {
    console.error(error)
  }
  redirect('/')
}

export async function register(formData) {
  try {
    await prisma.user.create({
      data: {
        name: formData.get('first_name') + ' ' + formData.get('last_name'),
        password: formData.get('password'),
        email: formData.get('email'),
      },
    })
  } catch (error) {
    console.error(error)
  }
  redirect('/login')
}

export async function logout() {
  cookies().delete('session')
  redirect('/')
}
