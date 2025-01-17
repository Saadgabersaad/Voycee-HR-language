
export interface CreatePosition {
    position: string
    departmentId: string
}
export interface ChangePositionName {
    name:string,
    description: string,
    departmentId: string,
    id: string

}

export interface AssignPosition {
    positionName: string
    description: string
    departmentId: string
}