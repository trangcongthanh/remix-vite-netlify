import { createReader } from '@keystatic/core/reader'
import config from './config'

export const reader = createReader(process.cwd(), config)

const resolveLinkedFiles = true

export function getSettings() {
  return reader.singletons.settings.read({ resolveLinkedFiles })
}

export type Settings = Awaited<ReturnType<typeof getSettings>>

export async function getPosts() {
  const posts = await reader.collections.posts.all({ resolveLinkedFiles })
  return posts.reverse()
}

export type Posts = Awaited<ReturnType<typeof getPosts>>

export function getPostBySlug(slug: string) {
  return reader.collections.posts.read(slug, { resolveLinkedFiles })
}

export type Post = Awaited<ReturnType<typeof getPostBySlug>>
