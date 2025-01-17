import React, {useState, useCallback, useMemo, JSX} from 'react';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type OptionItem = {
    label: string;
    icon: JSX.Element;
    action?: () => void;
    disabled?: boolean;
    hidden?: boolean;
};
type DottedMenuProps = {
    mainModal?: React.ReactNode;
    NameModal?: React.ReactNode;
    options: OptionItem[];
    name?: string;
};
enum ModalType {
    Main = 'mainModalOpen',
    Name = 'nameModalOpen',
}
const ITEM_HEIGHT = 48;
const PositionDottedMenu: React.FC<DottedMenuProps> = ({
                                                   mainModal,
                                                   NameModal,
                                                   options,
                                                   name = '',
                                               }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [modalState, setModalState] = useState<Record<ModalType, boolean>>({
        [ModalType.Main]: false,
        [ModalType.Name]: false,
    });
    const router = useRouter();

    const handleNavigate = useCallback(() => {
        const query = new URLSearchParams({name}).toString();
        router.push(`/hhrr/positions/employee?${query}`);
    }, [name, router]);

    const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleOptionClick = useCallback(
        (option: OptionItem) => {
            if (option.disabled) return;
            switch (option.label) {
                case 'Delete User':
                    setModalState((prev) => ({ ...prev, [ModalType.Main]: true }));
                    break;
                case 'View Position':
                    handleNavigate();
                    break;
                case 'Change Position Name':
                    setModalState((prev) => ({ ...prev, [ModalType.Name]: true }));
                    break;
                default:
                    option.action?.();
                    handleClose();
            }
        },
        [handleNavigate]
    );

    const renderedOptions = useMemo(
        () =>
            options
                .filter((option) => !option.hidden)
                .map((option) => (
                    <MenuItem
                        key={option.label}
                        onClick={() => handleOptionClick(option)}
                        disabled={option.disabled}
                        sx={{ paddingX: '16px', paddingY: '12px' }}
                    >
                        {option.icon}
                        <span style={{ marginLeft: '10px' }}>{option.label}</span>
                    </MenuItem>
                )),
        [options, handleOptionClick]
    );

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
                {renderedOptions}
            </Menu>

            {modalState[ModalType.Main] &&
                mainModal &&
                React.cloneElement(mainModal as React.ReactElement, {
                    open: modalState[ModalType.Main],
                    onClose: () =>
                        setModalState((prev) => ({ ...prev, [ModalType.Main]: false })),
                })}
            {modalState[ModalType.Name] &&
                NameModal &&
                React.cloneElement(NameModal as React.ReactElement, {
                    open: modalState[ModalType.Name],
                    onClose: () =>
                        setModalState((prev) => ({ ...prev, [ModalType.Name]: false })),
                })}
        </div>
    );
};

export default PositionDottedMenu;