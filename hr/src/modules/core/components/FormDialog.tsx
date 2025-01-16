'use client'

import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { DefaultValues, FieldValues, FormProvider, useForm } from 'react-hook-form'
import { Button } from './button'
import { LoadingButton } from '@mui/lab';

type FormProps<T> = {
    title?: string
    children: React.ReactNode
    open: boolean
    defaultValues?: Partial<T>
    onFinish(values: T): void
    onClose(): void
}

export type DialogProps = Partial<{
    open: boolean
    create(values: any): void
    onClose(): void
}>

// FORM DIALOG WITH REACT HOOK FORM
export const FormDialog = <T extends FieldValues>({
                                                      open,
                                                      title,
                                                      onClose,
                                                      children,
                                                      onFinish,
                                                      defaultValues,
                                                  }: FormProps<T>) => {
    const methods = useForm<T>(defaultValues ? {
        defaultValues: defaultValues as DefaultValues<T>
    } : {})

    const { handleSubmit, reset } = methods

    const onSubmit = async (data: T) => {
        onFinish && onFinish(data)
        reset()
        onClose()
    }

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'md'}
            open={open}
            onClose={onClose}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit(onSubmit)
            }}
        >
            {title && (
                <FormHeading>
                    {title}
                </FormHeading>
            )}
            <FormProvider {...methods}>
                {children}
            </FormProvider>
        </Dialog>
    )
}

export const FormDialogContent = ({ children }: React.PropsWithChildren) => (
    <DialogContent sx={{ bgcolor: "#fafafa", my: 3 }}>
        {children}
    </DialogContent>
)

export const FormHeading = ({ children }: React.PropsWithChildren) => {
    return (
        <DialogTitle sx={{ fontWeight: '700', pb: 0, fontSize: 28 }}>
            {children}
        </DialogTitle>
    )
}
export const FormActions = ({
                                onClose = () => { },
                                loading = false,
                                isDisabled = false,
                                deleteButton = false,
                                buttonText = '',
                                bgcolor = '',
                                openModal = () => { },
                                disabled = false,
                            }) => {
    return (
        <DialogActions sx={{ paddingY: '1.5rem', paddingInline: '1.5rem', gap: 1 }}>
            <Button onClick={onClose} sx={{ boxShadow: 1, px: 2, color: 'currentColor' }}>
                Cancel
            </Button>
            <LoadingButton
                loading={loading}
                onClick={() => openModal && openModal()}
                variant='contained'
                type='submit'
                sx={{
                    bgcolor: disabled ? 'gray' : bgcolor,
                    color: 'white',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                }}
                {...deleteButton && { color: 'error' }}
                disabled={disabled}  // Disable the button based on the prop
            >
                {buttonText}
            </LoadingButton>
        </DialogActions>
    )
}

