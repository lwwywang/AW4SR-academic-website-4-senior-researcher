import fs from 'fs'
import path from 'path'

export async function getMDXContent(slug: string) {
  const filePath = path.join(process.cwd(), 'content', 'pages', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  return { source }
}
