import * as React from 'react';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import { MoreVertOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Link from 'next/link';

interface DropdownMenuProps {
    children: (props: { onClose: () => void }) => React.ReactNode;
}

export default function DropdownMenu({ children }: DropdownMenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertOutlined />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {children({ onClose: handleClose })}
            </Menu>
        </div>
    );
}
