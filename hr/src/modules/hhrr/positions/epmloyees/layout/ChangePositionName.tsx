import React, { useState } from "react";
import { DialogProps, FormActions, FormDialog, FormDialogContent } from "@/modules/core/components/FormDialog";
import { Box, TextField } from "@mui/material";
import { PositionEmployees } from "../shared/positionEmployees";

type ChangePositionNameProps = DialogProps & {
    create(values: { name: string; departmentId: string }): void;
    id: string | null;
    positions: PositionEmployees[] | any;
    departmentId: string ;
};

export function ChangePositionName({ open, create, onClose, departmentId }: ChangePositionNameProps) {
    const [newName, setNewName] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value);
    };

    // Submit the payload
    const handleSubmit = () => {
        if (newName.trim() && departmentId) {
            create({
                name: newName.trim(),
                departmentId: departmentId,
            });
        } else {
            console.error("Invalid input or missing departmentId.");
        }
    };

    return (
        <FormDialog
            title="Change Position Name"
            open={open!}
            onClose={onClose!}
            onFinish={handleSubmit}
        >
            <FormDialogContent>
                <Box sx={{ m: 1, width: "35ch" }}>
                    <TextField
                        id="position-name-input"
                        label="New Position Name"
                        variant="outlined"
                        value={newName}
                        onChange={handleNameChange}
                        fullWidth
                        margin="normal"
                    />
                </Box>
                <FormActions
                    onClose={onClose}
                    buttonText="Change Name"
                    openModal={handleSubmit}
                    bgcolor={undefined}
                />
            </FormDialogContent>
        </FormDialog>
    );
}
