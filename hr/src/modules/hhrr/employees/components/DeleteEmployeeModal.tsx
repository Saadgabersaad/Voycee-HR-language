import { InfoOutlined } from '@mui/icons-material'
import { Dialog, Typography } from '@mui/material'
import { DialogProps, FormActions, FormDialogContent, FormHeading } from '@/modules/core/components/FormDialog'
import { deleteEmployee } from '@/modules/hhrr/departments/services/employee'
import React, { use } from 'react'
import { useBoolean } from '@/modules/core/hooks/use-boolean'
import { Flex } from '@/modules/core/components/flex'
import { useQueryClient } from '@tanstack/react-query'
import Countdown from "@/modules/core/components/CountDown";

type Props = DialogProps & {
  employeeId: string
  invalidateQueryKey: string
}

export default function DeleteEmployeeModal({
  employeeId,
  invalidateQueryKey,
  onClose
}: Props) {
  const queryClient = useQueryClient()
  const [disabled, _, setNotDisabled] = useBoolean(true)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await deleteEmployee(employeeId)
    await queryClient.invalidateQueries({ queryKey: [invalidateQueryKey] })
    onClose!()
  }

  const onCountdownEnd = () => {
    setNotDisabled()
  }

  return (
    <Dialog
      open
      PaperProps={{
        component: 'form',
        onSubmit
      }}
    >
      <FormHeading>
        <Flex alignItems='center' gap={1}>
          <InfoOutlined /> Delete Employee ?
        </Flex>
      </FormHeading>
      <FormDialogContent>
        <Typography mt={1}>
          This User will be removed
        </Typography>
        <Typography color='error' mt={1}>
          Are you sure you would like to delete this Employee ?
          This action cannot be undone.
        </Typography>
        <Flex justifyContent='center' py={1}>
          <Countdown initialSeconds={5} onCountdownEnd={onCountdownEnd} />
        </Flex>
      </FormDialogContent>
      <FormActions
        buttonText='Delete'
        onClose={onClose}
        disabled={disabled}
        deleteButton
      />
    </Dialog>
  )
}
