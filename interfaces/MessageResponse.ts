import express, { Request, Response } from 'express';

export interface MessageResponse {
    success: boolean;
    message: string;
}

