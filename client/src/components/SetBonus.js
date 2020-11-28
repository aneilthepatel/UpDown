import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'

export default function SetBonus({setBonus}) {
    return (
        <>
        <h1>Set Bonus</h1>
            <Grid container spacing={1}>
                <Grid item xs={5}>
                <TextField id="outlined-basic" variant="outlined" label="Bonus in percent" type="number" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={setBonus} variant="contained" color="primary">
                        Set
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
