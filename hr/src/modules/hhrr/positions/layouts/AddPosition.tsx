import { DialogProps, FormActions, FormDialog, FormDialogContent } from 'modules/core/components/FormDialog';
import { Grid2, TextField, Typography } from '@mui/material';
import { FormSelect } from 'modules/core/components/FormSelect';
import { Button } from 'modules/core/components/button';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useDepartments} from "modules/hhrr/departments/hooks/use-departments";
import { CreatePosition } from '../shared/Position';
import {FormInput} from "modules/core/components/FormInput";

type AddPositionModalProps = DialogProps & {
    create(position: CreatePosition): Promise<void>;
};



export function AddPosition({
                                open,
                                create,
                                onClose,
                            }: AddPositionModalProps) {

    const {data: departments } = useDepartments()


    const [positions, setPositions] = useState([{ id: Date.now(), name: '' }]);
    const [isAddClicked, setIsAddClicked] = useState(false);

    const handleAddPosition = () => {
        const lastPosition = positions[positions.length - 1];

        if (lastPosition.name.trim() === '') {
            setIsAddClicked(true);
            return;
        }
        setPositions([...positions, { id: Date.now(), name: '' }]);
        setIsAddClicked(false); // Reset flag after adding a new position
    };

    const handleInputChange = (id: number, value: string) => {
        setPositions((prevPositions) =>
            prevPositions.map((position) =>
                position.id === id ? { ...position, name: value } : position
            )
        );
    };

    const handleDeletePosition = (id: number) => {
        setPositions((prevPositions) =>
            prevPositions.filter((position) => position.id !== id)
        );
    };

    return (
        <FormDialog
            title="Add New Position"
            open={open!}
            onClose={onClose!}
            onFinish={create}
        >
            <FormDialogContent>
                <Typography fontWeight={700} mt={2} mb={0.5}>
                    Select Department
                </Typography>
                <Grid container columnSpacing={2} rowSpacing={0.5} sx={{ mt: 1.5, bgcolor: "#fafafa" }} mb={2}>
                    <Grid size={6} mt={1}>
                        <FormSelect
                            name="departmentId"
                            label="Department"
                            placeholder="Select a department first"
                            options={departments?.data?.map((department) => (
                                {label: department.name, value: department.id}
                            )) }
                        />
                    </Grid>
                </Grid>
            </FormDialogContent>

            <FormDialogContent >
                <Typography fontWeight={700} mt={2} mb={1}>
                    Create positions related to{" "}
                    <span style={{ color: '#1976d2' }}>Sales</span> department
                </Typography>
                {positions.map((position, index) => (
                    <Grid
                        key={position.id}
                        container
                        spacing={1}
                        alignItems="center"
                        sx={{ mb: 1,display: "flex",alignItems: "center" }}
                    >
                        <Grid>
                            <FormInput
                                size={"small"}
                                id={`position-${position.id}`}
                                name={`name${position.name}`}
                                label={index === 0 ? "Main Position Name" : `Position ${index} `}
                                value={position.name}
                                onChange={(e) =>
                                    handleInputChange(position.id, e.target.value)
                                }
                                disabled={index !== positions.length - 1}
                                required={isAddClicked && position.name.trim() === ''}
                                error={isAddClicked && position.name.trim() === ''}
                            />
                        </Grid >
                        {index !== positions.length - 1 && (
                            <Grid >
                                <IconButton color={'success'}>
                                    <CheckCircleIcon/>
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDeletePosition(position.id)}
                                    disabled={positions.length === 1}
                                    color="success">
                                    <DeleteForeverIcon color={'success'} />
                                </IconButton>
                            </Grid>
                        )}

                        {index === positions.length - 1 && (
                            <Grid >
                                <Button
                                    sx={{ boxShadow: 1, px: 2 }}
                                    variant="contained"
                                    onClick={handleAddPosition}
                                >
                                    Add Position +
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                ))}
            </FormDialogContent>

            <FormActions buttonText="Add Position" onClose={onClose} />
        </FormDialog>
    );
}
