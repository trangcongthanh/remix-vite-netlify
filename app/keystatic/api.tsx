import type { ActionFunction, LoaderFunction } from '@remix-run/cloudflare'
import { handleLoader } from '@keystatic/remix/api'
import config from './config'

export const loader: LoaderFunction = (args) => handleLoader({ config }, args)
export const action: ActionFunction = (args) => handleLoader({ config }, args)
