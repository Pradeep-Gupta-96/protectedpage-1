import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import {
    ButtonGroup, Typography, Paper, Grid, Button, Dialog, DialogContent, DialogTitle, Slide, Table, TableRow,
    TableHead, TableBody, TableCell, TableContainer, InputLabel, MenuItem, FormControl, Select
} from '@mui/material';
import Dialogfordata from './Dialogfordata';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Searchbar from './Searchbar';
import { toast } from 'react-toastify'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
    const [open, setOpen] = useState(false);
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const totalexceldata = () => {
        navigate('/totalexceldata')
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])

    const sendemail = async () => {
        try {
            const res = await fetch("http://localhost:4000/notice/sendemail", {
                method: "post",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
            const result = await res.json()
            if (result.message === "Saved") {
                toast("email sent successfull!", {
                    position: "top-center",
                    autoClose: 1000,
                    type: "success"
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Navbar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                    <DrawerHeader />
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                                <Item>
                                    <Typography variant="subtitle1" gutterBottom>Hellow User!</Typography>
                                    <Typography variant="h4" gutterBottom>Welcome to {`${JSON.parse(localStorage.getItem("comapny"))}`}</Typography>
                                </Item>
                            </Grid>

                            {/*================ Dialog ============== */}
                            <Grid item xs={2}>
                                <Item>
                                    <UploadFileIcon color="secondary" /> <br />
                                    <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                                        Bulk Upload
                                    </Button>
                                    <Dialog
                                        open={open}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle>{"Bulk Upload File!"}</DialogTitle>
                                        <DialogContent>
                                            <Dialogfordata />
                                        </DialogContent>
                                    </Dialog>
                                </Item>
                            </Grid>

                            {/*================ Searchbar ============== */}
                            <Grid item xs={12} >
                                <Searchbar />
                            </Grid>

                            {/*================ Table ============== */}
                            <Grid item xs={12}>
                                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                    <TableContainer sx={{ maxHeight: 440 }}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead >
                                                <TableRow>
                                                    <TableCell>S. No.</TableCell>
                                                    <TableCell>File Name</TableCell>
                                                    <TableCell>Records Count</TableCell>
                                                    <TableCell>Notice Type</TableCell>
                                                    <TableCell>Email ID</TableCell>
                                                    <TableCell>Actions</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow hover role="checkbox" tabIndex={-1}>
                                                    <TableCell >11 </TableCell>
                                                    <TableCell onClick={totalexceldata} sx={{ cursor: 'pointer' }} >BNG-SMS23032302 <br /> 23-Mar-2023 </TableCell>
                                                    <TableCell >434 </TableCell>
                                                    <TableCell >Notice/23032023/typefix </TableCell>
                                                    <TableCell >
                                                        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                                            <InputLabel id="demo-simple-select-label">Select email</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={age}
                                                                label="Select email"
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value=''><em>none</em></MenuItem>
                                                                <MenuItem value={10}>Ten</MenuItem>
                                                                <MenuItem value={20}>Twenty</MenuItem>
                                                                <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </TableCell>
                                                    <TableCell>
                                                        <ButtonGroup variant="contained">
                                                            <Button variant='contained' sx={{ backgroundColor: "#24D555" }} onClick={sendemail}>Sent email</Button>
                                                            <Button><VisibilityIcon /></Button>
                                                            <Button><AccessTimeIcon /></Button>
                                                            <Button><FileDownloadIcon /></Button>
                                                        </ButtonGroup>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Home