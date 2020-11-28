import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'

export default function ReportResult({reportResult}) {
    return (
        <>
            <h1>Report Result</h1>
            <Grid container spacing={1}>
                <Grid item xs={5}>
                    <TextField id="outlined-basic" variant="outlined" type="number" label="Winner" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="outlined-basic" variant="outlined" type="number" label="Loser" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={reportResult} variant="contained" color="primary">
                        Report
                </Button>
                </Grid>
            </Grid>
        </>
    )
}
