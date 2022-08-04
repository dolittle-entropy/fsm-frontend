// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

import { Theme } from './Styling/Theme';

type ToggleContext = {};

type ToggleEvent =
    | { type: 'TOGGLE' }
;

type ToggleState =
    | {
        value: 'inactive',
        context: ToggleContext,
    }
    | {
        value: 'active',
        context: ToggleContext,
    }
;

const toggleMachine = createMachine<ToggleContext, ToggleEvent, ToggleState>({
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: {
            on: { TOGGLE: 'active' }
        },
        active: {
            on: { TOGGLE: 'inactive' }
        }
    }
});

export const App = () => {
    const [state, send] = useMachine(toggleMachine);

    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Button variant='contained' onClick={() => send('TOGGLE')}>
                {
                    state.matches('inactive')
                        ? 'Click to activate'
                        : 'Active! Click to deactivate'
                }
            </Button>
        </ThemeProvider>
    )
};
