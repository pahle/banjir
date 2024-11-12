import { cookies } from 'next/headers'

export async function createSession(user) {
  const expiresAt = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)

  cookies().set('session', user.name, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })

  cookies().set('userId', user.id, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
  })
}
