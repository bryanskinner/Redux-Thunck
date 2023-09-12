import React from 'react'
import CustomTable from './Table'
import { Button } from '@mui/material'

const Import = (props) => {
    // fill out this component


    return (
        <>
        <Button varient="contained" onClick={props.fetchMakes}>Import</Button>
        <CustomTable rows={props.makes} columns={[`id`, `Make`, `Actions`]} />
        </>
    )
}

export default Import