import { Add, Download } from '@mui/icons-material'
import { Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddEmployeeFormDialog from '../layouts/AddEmployee';
import { useBoolean } from '@/modules/core/hooks/use-boolean';
import { Flex } from '@/modules/core/components/flex';

export const Actions = () => {
    const [openForm, onOpenForm, onClose] = useBoolean()

    return (
        <Flex alignItems='start' gap={1.5} >
            <Button startIcon={<Download />} variant='text'
                sx={{
                    fontSize: '16px',
                    padding: '10px 18px',
                    textTransform: 'capitalize', color: 'black', boxShadow: '0px 1px 3px 0px #0000001F'
                }}>
                Download
            </Button>
            <Button startIcon={<CloudUploadIcon />} variant='text' sx={{
                fontSize: '16px',
                padding: '10px 18px',
                textTransform: 'capitalize', color: 'black', boxShadow: '0px 1px 3px 0px #0000001F'
            }}>
                Import
            </Button>
            <Button startIcon={<Add />} variant='contained' sx={{
                fontSize: '16px',
                padding: '10px 18px',
                textTransform: 'capitalize'
            }} onClick={onOpenForm}>
                Add Customer
            </Button>
            {openForm && (
                <AddEmployeeFormDialog
                    open={openForm}
                    onClose={onClose}
                />
            )}
        </Flex>
    )
}
