import { Unbounded } from 'next/font/google'
import Link from 'next/link'

const unbounded = Unbounded({ subsets: ['latin'] })

export default function TopBar() {
    return(
        <div className="flex box-border place-content-center">
            <div>
                <div className="text-3xl place-items-center mt-4 mb-4">
                    <div className={unbounded.className}>
                        <Link href="/">kanmei</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}