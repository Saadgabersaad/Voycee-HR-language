import { useContext } from 'react'
import { NewAreaContext } from '../context/new-area.context'

export const useNewAreas = () => useContext(NewAreaContext)