import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core'

export default function StartGame({startGame}) {
    return (
        <>
            <h1>Start Game</h1>
            <Grid container spacing={1}>
                <Grid item xs={5}>
                    <TextField id="outlined-basic" label="Time in Seconds" variant="outlined" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={startGame} variant="contained" color="primary">
                        Start Game
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
