import React from 'react'
import Typography from '@mui/material/Typography';
import { HeaderProps } from '../../interface_types/headerProps';

export default function Header({title, fontSize}: HeaderProps) {
    return (
        <Typography fontSize={fontSize} color={'GrayText'}>{title}</Typography>
    )
}
