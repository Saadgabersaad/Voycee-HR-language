import { Position } from 'modules/hhrr/departments/shared/Position'

export type CreateEmployee = {
  name: string
  lastname: string
  email: string
  department: number
  picture?: string
  positionId: string
}

export interface Employee {
  id: string; // Employee unique identifier
  name: string; // First name
  lastName: string; // Last name
  email: string; // Email address
  status: "Active" | "Inactive"; // Enum-like string literal for status
  position: Position; // Associated position identifier
  createdAt: string; // ISO date-time string for creation time
  updatedAt: string; // ISO date-time string for last update
}
