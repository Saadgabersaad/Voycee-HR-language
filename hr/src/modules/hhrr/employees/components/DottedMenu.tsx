import React, { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useBoolean } from '@/modules/core/hooks/use-boolean';
import { Employee } from '../shared/Employee';
import useDepartment from '@/modules/hhrr/departments/hooks/use-department';
import { DialogProps } from '@/modules/core/components/FormDialog';
import { EMPLOYEES } from '../consts/queryKeys';
import DeleteEmployeeModal from './DeleteEmployeeModal';

type OptionItem = {
    label: string;
    icon: JSX.Element;
    action?: () => void;
    disabled?: boolean;
    hidden?: boolean;
}

enum ModalType {
    Main = 'mainModalOpen',
    Name = 'nameModalOpen',
}
const ITEM_HEIGHT = 48;


type Props = {
    employee: Employee
}

export default function DottedMenu({ employee }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();

    const [moveEmployeePosModal, openMoveEmployeePos, closeMoveEmployeePos] = useBoolean()
    const [deleteEmployeeModal, openDeleteModal, closeDeleteModal] = useBoolean()

    const options = [
        { label: 'View Profile Info', icon: <PersonIcon color="primary" />, },
        { label: 'Change User Position', icon: <WorkIcon color="primary" />, onClick: openMoveEmployeePos },
        { label: 'Change User Dept', icon: <ApartmentIcon color="primary" />, onClick: openMoveEmployeePos },
        { label: 'Edit User', icon: <EditIcon color="primary" /> },
        { label: 'Delete User', icon: <DeleteIcon sx={{ color: 'red' }} />, onClick: openDeleteModal },
    ];


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={anchorEl ? 'long-menu' : undefined}
                aria-expanded={anchorEl ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                sx={{
                    paper: {
                        maxHeight: ITEM_HEIGHT * 5.5,
                        width: '23ch',
                        border: '1px solid green',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.label}
                        onClick={option.onClick}
                        sx={{ paddingX: '16px', paddingY: '12px' }}
                    >
                        {option.icon}
                        <span style={{ marginLeft: '10px' }}>{option.label}</span>
                    </MenuItem>
                ))}
            </Menu>
            {moveEmployeePosModal && <PositionModal
                employee={employee}
                onClose={closeMoveEmployeePos}
            />}
            {deleteEmployeeModal && <DeleteEmployeeModal
                employeeId={employee.id}
                onClose={closeDeleteModal}
                invalidateQueryKey={EMPLOYEES}
                
            />}
        </div>
    );
}


const PositionModal = ({ employee, onClose }: Props & DialogProps) => {
    const { data } = useDepartment(employee?.position?.departmentId)
    if (!data) return

    return (
        <ChangeEmployeePosModal
            employee={employee}
            onClose={onClose}
            department={data?.data}
            invalidateKey={EMPLOYEES}
        />
    )
}
