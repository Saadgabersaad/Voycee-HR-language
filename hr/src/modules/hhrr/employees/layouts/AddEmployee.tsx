import * as React from 'react'
import { Dropzone } from '@/modules/hhrr/employees/components/Dropzone'
import { CreateEmployee } from '@/modules/hhrr/employees/shared/Employee'
import { FormDialog, FormActions, FormDialogContent } from '@/modules/core/components/FormDialog'
import { FormSelect } from '@/modules/core/components/FormSelect'
import { FormInput } from '@/modules/core/components/FormInput'
import Grid from '@mui/material/Grid2'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
// import { usePositions } from '@/modules/positions/hooks/use-positions'
import { useDepartments } from '@/modules/hhrr/departments/hooks/use-departments'
import { selectAdapter } from '@/modules/core/components/Select'

type Props = {
  open: boolean
  onClose(): void
}

export default function AddEmployeeFormDialog({
  open,
  onClose
}: Partial<Props>) {

  const onSubmit = (values: CreateEmployee) => {
    console.log(values)
  }

  return (
    <React.Fragment>
      <FormDialog
        open={open!}
        onClose={onClose!}
        onFinish={onSubmit}
        title='Add Employee'
      >
        <FormDialogContent>
          <Divider sx={{ mt: 1.5 }} />
          <Grid container columnSpacing={2} rowSpacing={.5} sx={{ mt: 1.5 }}>
            <Grid size={6}>
              <FormInput id="name" name="firstname" label='First Name' />
            </Grid>
            <Grid size={6}>
              <FormInput id="lastname" name="lastname" label='Last Name' />
            </Grid>
            <Grid size={6}>
              <FormInput id="email" type='email' name="email" label='Email address' />
            </Grid>
            {/*
                        <Grid size={6}>
              <FormInput id='phone' type='phone' name='phone' label='Phone' />
            </Grid>
            */}
            <Selectors />
          </Grid>
          <Typography fontWeight={600} pt={4}>
            Add a profile picture
          </Typography>
          <Dropzone />
        </FormDialogContent>
        <FormActions buttonText='Add Employee' onClose={onClose} />
      </FormDialog>
    </React.Fragment>
  )
}


const Selectors = () => {

  // const { data: positions } = usePositions()
  const { data: departments } = useDepartments()

  const [department, setDepartment] = React.useState<string>('')

  const handleChange = (value: string) => {
    setDepartment(value)
  }

  return <>
    <Grid size={6} mt={1}>
      <FormSelect
        name='department'
        label='Department'
        placeholder='Select a department'
        handleChange={handleChange}
        options={departments
          ?.data
          ?.map((d) => selectAdapter(d.name, d.id)) || []}
      />
    </Grid>
    <Grid size={6} mt={1}>
      <FormSelect
        name='position'
        label='Position'
        disabled={!Boolean(department.length)}
        placeholder='Select a department first'
        // options={positions
        //   ?.data
        //   ?.map((p) => selectAdapter(p.name, p.id)) || []}
      />
    </Grid>
  </>
}