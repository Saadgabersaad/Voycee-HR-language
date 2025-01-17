import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getDepartment } from '../services/departments'
import { useParams } from 'next/navigation'

export default function useDepartment(department?: string) {
  const params = useParams()
  const departmentId = department ? department : params.id as string

  const { data } = useQuery({
    queryKey: ['department', departmentId],
    queryFn: async () => {
      return getDepartment(departmentId)
    }
  })

  return { data: data, departmentId }
}
