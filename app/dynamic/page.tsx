import Link from "next/link";
import Form from "../../components/Form";
import fs from 'fs/promises'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Dynamic() {
  let data = '{}';
  try {
    data = await fs.readFile('./body.json', 'utf-8')
  } catch{}
  data = JSON.parse(data)
  return (
    <>
    <Form data={data} />
    <Link href="/">Home</Link>
  </>
  )
}
