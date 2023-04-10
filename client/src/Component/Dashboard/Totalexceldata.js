import React,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system'
import Navbar from '../Navbar/Navbar'
import { Button, ButtonGroup, Grid, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Totalexceldata = () => {
    const navigate=useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
        navigate('/')
    }
  }, [])
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Navbar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                    <DrawerHeader />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Item>
                                <List>
                                    <ListItem>
                                        <ListItemText >File Name <br /><strong>BNG-SMS23032302</strong> </ListItemText>
                                        <ListItemText >Created Date <br /> <strong> 23-Mar-2023</strong></ListItemText>
                                        <ListItemText >Created Time <br /> <strong>18:32:56</strong></ListItemText>
                                        <ListItemText >Records Uploaded <br /><strong> 112</strong></ListItemText>
                                        <ListItemText >Uploaded By <br /> <strong>John Doe</strong></ListItemText>
                                        <ListItemText >Email ID <br /><strong> cc@areness.com</strong></ListItemText>
                                        <ListItemText >Status <br /><strong> Sent</strong></ListItemText>
                                        <ListItemText >File Uploaded <br /><strong>----</strong></ListItemText>
                                    </ListItem>
                                </List>
                            </Item>
                        </Grid>
                        <Grid sx={{ marginLeft: "auto", justifyContent: "space-between" }}>
                            <Item >
                                <ButtonGroup>
                                    <Button variant='contained' sx={{ backgroundColor: "#24D555" }}>Re-Send SMS</Button>
                                    <Button variant='contained' sx={{ backgroundColor: "#00AEC6" }}>Re-Send Email</Button>
                                </ButtonGroup>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                <TableContainer sx={{ maxHeight: 440 }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead >
                                            <TableRow  >
                                                <TableCell><strong> S. No.</strong></TableCell>
                                                <TableCell><strong> Applicant Name</strong> </TableCell>
                                                <TableCell><strong>Email ID</strong></TableCell>
                                                <TableCell><strong>Phone Number</strong></TableCell>
                                                <TableCell><strong>Due Amount</strong></TableCell>
                                                <TableCell><strong>Actions</strong></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow hover role="checkbox" tabIndex={-1}>
                                                <TableCell >11 </TableCell>
                                                <TableCell sx={{ cursor: 'pointer' }} >BNG-SMS23032302 <br /> 23-Mar-2023 </TableCell>
                                                <TableCell >434 </TableCell>
                                                <TableCell >Notice/23032023/typefix </TableCell>
                                                <TableCell >984465 </TableCell>
                                                <TableCell >
                                                    <ButtonGroup>
                                                        <Button variant='contained' sx={{ backgroundColor: "#24D555" }}>Re-Send SMS</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "#00AEC6" }}>Re-Send Email</Button>
                                                    </ButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow hover role="checkbox" tabIndex={-1}>
                                                <TableCell >11 </TableCell>
                                                <TableCell sx={{ cursor: 'pointer' }} >BNG-SMS23032302 <br /> 23-Mar-2023 </TableCell>
                                                <TableCell >434 </TableCell>
                                                <TableCell >Notice/23032023/typefix </TableCell>
                                                <TableCell >984465 </TableCell>
                                                <TableCell >
                                                    <ButtonGroup>
                                                        <Button variant='contained' sx={{ backgroundColor: "#24D555" }}>Re-Send SMS</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "#00AEC6" }}>Re-Send Email</Button>
                                                    </ButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow hover role="checkbox" tabIndex={-1}>
                                                <TableCell >11 </TableCell>
                                                <TableCell sx={{ cursor: 'pointer' }} >BNG-SMS23032302 <br /> 23-Mar-2023 </TableCell>
                                                <TableCell >434 </TableCell>
                                                <TableCell >Notice/23032023/typefix </TableCell>
                                                <TableCell >984465 </TableCell>
                                                <TableCell >
                                                    <ButtonGroup>
                                                        <Button variant='contained' sx={{ backgroundColor: "#24D555" }}>Re-Send SMS</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "#00AEC6" }}>Re-Send Email</Button>
                                                    </ButtonGroup>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow hover role="checkbox" tabIndex={-1}>
                                                <TableCell >11 </TableCell>
                                                <TableCell >BNG-SMS23032302 <br /> 23-Mar-2023 </TableCell>
                                                <TableCell >434 </TableCell>
                                                <TableCell >Notice/23032023/typefix </TableCell>
                                                <TableCell >984465 </TableCell>
                                                <TableCell >
                                                    <ButtonGroup>
                                                        <Button variant='contained' sx={{ backgroundColor: "#24D555" }}>Re-Send SMS</Button>
                                                        <Button variant='contained' sx={{ backgroundColor: "#00AEC6" }}>Re-Send Email</Button>
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
        </>

    )

}

export default Totalexceldata 