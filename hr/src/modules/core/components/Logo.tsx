import Link from 'next/link'
import Image from 'next/image'

type LogoProps = {
    width?: number
    height?: number
}

export const Logo: React.FC<LogoProps> = ({
                                              width = 125,
                                              height = 26
                                          }) => {
    return (
        <Link href='/' style={{ display: 'flex' }}>
            <Image
                width={width}
                height={height}
                src='/logo.png'
                alt='VoyceLink Application Logo'
                priority
            />
        </Link>
    )
}
