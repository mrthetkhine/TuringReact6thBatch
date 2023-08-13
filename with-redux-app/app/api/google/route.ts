import { redirect } from 'next/navigation'

export async function GET(request: Request) {
    redirect('https://www.google.com/')
}