// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#8c9af8',
            light: '#b3bbfb',
            dark: '#6678f6',
            contrastText: '#191a21',
        },
        text: {
            disabled: '#93959f',
            primary: '#fafafa',
            secondary: '#cecfd0',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#0f1014',
                },
            }
        },
    },
});
