import { Tab, Table, TableCell } from '@mui/material';
import { EnhancedTable } from '@/modules/core/components/tables/EnhancedTable'


const rows = [
  { id: '1', name: 'Software Engineer', department: 'Engineering', assigned: 5 },
  { id: '2', name: 'Product Manager', department: 'Product', assigned: 3 },
  { id: '3', name: 'HR Specialist', department: 'Human Resources', assigned: 2 },
  { id: '4', name: 'Marketing Analyst', department: 'Marketing', assigned: 4 },
  { id: '5', name: 'Sales Executive', department: 'Sales', assigned: 6 },
  { id: '6', name: 'Data Scientist', department: 'Data Analytics', assigned: 3 },
  { id: '7', name: 'Customer Support Lead', department: 'Customer Support', assigned: 8 },
  { id: '8', name: 'UX Designer', department: 'Design', assigned: 2 },
  { id: '9', name: 'DevOps Engineer', department: 'Infrastructure', assigned: 4 },
  { id: '10', name: 'Finance Analyst', department: 'Finance', assigned: 1 },
];

export const PositionsTable = () => {

  const handleChange = (newPage: number) => {
    console.log(newPage)
  }

  return (
    <EnhancedTable
      rowsPerPageCount={10}
      rows={rows as any[]}
      showCheckBox={true}
      headCells={[
        { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
        { id: 'department', numeric: false, disablePadding: true, label: 'Related Department' },
        { id: 'assigned', numeric: false, disablePadding: true, label: 'Number of employees assigned' },
      ]}
      onPageChange={handleChange}
      render={(row) => (
        <>
          <TableCell>
            {row.id}
          </TableCell>
          <TableCell>
            {row.name}
          </TableCell>
          <TableCell>
            {row.department}
          </TableCell>
          <TableCell>
            {row.assigned}
          </TableCell>
        </>
      )} loading={false}    />
  )
}
