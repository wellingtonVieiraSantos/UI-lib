import { createContext, useContext } from 'react'
import { DrawerContentProps } from '.'

const DrawerContext = createContext<DrawerContentProps | null>(null)

const useDrawer = () => {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

export { useDrawer, DrawerContext }
