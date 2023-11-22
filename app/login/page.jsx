"use client"
import React from "react";
import { Button, Card, CardContent, Typography, Container } from "@mui/material";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
    const {data:session,status,update} = useSession();
    console.log(session)
    return (
        <Container >
            <Card sx={{ minWidth: 300, width: '80%', textAlign: 'center' }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Welcome to Your App! Please Login  in to continue.
                    </Typography>
                    <Button

                        onClick={() => signIn("google")}
                        variant="contained"
                        color="primary"
                    >
                        Login with Google
                    </Button>
                   
                </CardContent>
            </Card>
        </Container>
    );
}

