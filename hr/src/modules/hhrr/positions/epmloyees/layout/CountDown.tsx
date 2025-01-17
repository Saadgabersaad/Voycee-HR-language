import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, Typography } from "@mui/material";
import { Flex } from "@/modules/core/components/flex";
import { FormActions } from "@/modules/core/components/FormDialog";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';type CountdownModalProps = {
    open: boolean;
    onClose: () => void;
    onFinish: () => void;
};

export const CountdownModal = ({ open, onClose, onFinish, }: CountdownModalProps) => {
    const [countdown, setCountdown] = useState<number>(10);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Track if the button is disabled

    useEffect(() => {
        if (open) {
            setCountdown(10); // Reset the countdown when the modal opens
            setIsButtonDisabled(true); // Disable the button when the modal opens
        }
    }, [open]);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (open && countdown > 0) {
            timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
        } else if (countdown === 0) {
            setIsButtonDisabled(false);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [open, countdown]);

    const handleButtonClick = () => {
        onFinish();
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogContent sx={{ flexGrow: 1, borderBottom: "1px solid lightgray", margin: "1rem" }}>

              <Flex alignItems="center" gap ={2}>
                <ErrorOutlineOutlinedIcon color="error" />
                <Typography fontWeight={700} fontSize={28}>

                    Delete Position?
                </Typography>
              </Flex>
            </DialogContent>

            <DialogContent sx={{ flexGrow: 1, margin: "1rem" }}>
                <Typography fontWeight={700} fontSize={22} color={"error"}>
                    Are you sure you would like to delete this Position?
                </Typography>
                <Typography fontWeight={700} fontSize={22} color={"error"}>
                    This action cannot be undone.
                </Typography>
            </DialogContent>

            <DialogContent
                sx={{
                    textAlign: "center",
                    py: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Flex width={107} height={107} borderRadius={50} bgcolor={"#fef3f2"} justifyContent={"center"} alignItems={"center"}>
                    <Flex width={95} height={95} borderRadius={50} bgcolor={"#fee4e2"} justifyContent={"center"} alignItems={"center"}>
                        <Typography fontWeight={700} fontSize={24} color="error">
                            {countdown}
                        </Typography>
                    </Flex>
                </Flex>
            </DialogContent>

            <DialogContent
                sx={{
                    textAlign: "center",
                    py: 4,
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                    flexDirection: "column",
                }}
            >
                <FormActions
                    onClose={onClose}
                    buttonText="Delete"
                    bgcolor="red"
                    disabled={isButtonDisabled}
                    openModal={handleButtonClick}

                />
            </DialogContent>
        </Dialog>
    );
};
