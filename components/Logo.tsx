import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const Logo = ({ width, height }: { width: number; height: number }) => {
  const [src, setSrc] = useState<string>(
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  )
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    switch (resolvedTheme) {
      case 'light':
        setSrc('/logos/logo_dark.png')
        break
      case 'dark':
        setSrc('/logos/logo_light.png')
        break
    }
  }, [resolvedTheme])

  return <Image src={src} width={width} height={height} alt="Hooks Icon" />
}
