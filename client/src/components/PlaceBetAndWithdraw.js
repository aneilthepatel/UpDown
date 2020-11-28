import React from 'react'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'

export default function PlaceBetAndWithdraw({placeBet, withdrawGain}) {
    return (
        <>
            <h1> Up Down Place Bet Withdraw</h1>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Button onClick={placeBet} variant="contained" color="primary">
                        Up
                </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={placeBet} variant="contained" color="primary">
                        Down
                </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={withdrawGain} variant="contained" color="primary">
                        Withdraw Gain
                </Button>
                </Grid>

            </Grid>
        </>
    )
}
