import React, { useState, useEffect } from "react";
import { DialogProps, FormActions, FormDialog, FormDialogContent } from "@/modules/core/components/FormDialog";
import { Typography } from "@mui/material";
import { DeletePositionTable } from "@/modules/hhrr/positions/epmloyees/components/DeleteEmployee";
import { CountdownModal } from "./CountDown";
import { useEmployeesPosition } from "@/modules/hhrr/positions/epmloyees/hooks/use-employeesPosition";
import { PRIMARY } from "@/modules/core/consts/theme";
import { usePositionContext } from "../context/PositionSelectedId";
import {PositionEmployees} from "@/modules/hhrr/positions/epmloyees/shared/positionEmployees";


export type DeletePositionModalProps = DialogProps & {
    count: number;
    positionName: string;
    positions:PositionEmployees[]|any;
};

export function DeletePosition({open, onClose, count, positionName, positions}: DeletePositionModalProps) {

    const [isCountdownModalOpen, setCountdownModalOpen] = useState(false);
    const [isPositionEmpty, setIsPositionEmpty] = useState(true);
    const {id} = usePositionContext();
    const {data, isLoading, onDeletePosition} = useEmployeesPosition();


    const hasEmployees = data?.data && data.data.length > 0;


    useEffect(() => {
        if (data && data?.data?.length === 0) {
            setIsPositionEmpty(true);
        } else {
            setIsPositionEmpty(false);
        }
    }, [data]);

    const handleDeleteClick = () => {
        if (hasEmployees) {
            setIsPositionEmpty(false);
        } else {
            setCountdownModalOpen(true);
        }
    };

    const handleCountdownFinish = async () => {
        if (id && isPositionEmpty) {
            try {
                await onDeletePosition(id);
            } catch (error) {
                console.error("Error deleting position:", error);
            }
        }
        setCountdownModalOpen(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
     {/*@ts-ignore*/}
            <FormDialog  title="Delete Position" open={open!} onClose={onClose!}>
                <FormDialogContent>
                    <Typography fontSize={20} fontWeight={700} mt={2} mb={0.5}>
                        Position <span style={{ color: PRIMARY }}>{positionName}  </span> is assigned to
                        <span style={{ color: PRIMARY }}> {count} </span> employees in the department.
                    </Typography>
                    <Typography fontSize={20} fontWeight={700} mb={2}>
                        Please assign employees to a new position before proceeding.
                    </Typography>
                    <DeletePositionTable rows={data.data} loading={isLoading} positions={positions} />


                    {!isPositionEmpty && (
                        <Typography fontSize={16} fontWeight={500} color="error" mt={2}>
                            You cannot delete this position because there are still employees assigned to it.
                        </Typography>
                    )}

                    <FormActions
                        onClose={onClose}
                        buttonText="Delete Position"
                        deleteButton
                        openModal={handleDeleteClick}
                        disabled={!isPositionEmpty}
                    />
                </FormDialogContent>
            <CountdownModal
                open={isCountdownModalOpen}
                onClose={() => setCountdownModalOpen(false)}
                onFinish={handleCountdownFinish}
            />
            </FormDialog>
        </>
    );
}
