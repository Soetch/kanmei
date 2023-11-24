import { Unbounded } from 'next/font/google'
import Link from 'next/link'

const unbounded = Unbounded({ subsets: ['latin'] })

export default function Tabs() {
    return(
        <div className="flex place-content-center gap-8">
            <div className="">
                <div className="text-2xl mt-1 mb-4">
                    <div className={unbounded.className}>
                        <Link href="/learn" className="mr-1">learn</Link> <Link href="/learned">learned</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}