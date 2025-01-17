export interface Position {
  id: string;
  name: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  description: string;
  departmentId: string;
  employeeCount: number;
}

export interface PositionEmployee {
 id:string;
  name: string;
  email: string;
  department: string;

}
export interface CreatePosition {
  name: string;
  description?: string;
  departmentId: string;
}
