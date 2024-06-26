"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export default function EnquiryForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        city: '',
        enquiryType: '',
        enquiry: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert("Form submitted successfully");
    };

    return (
        <div className="bg-white h-full lg:h-screen flex justify-center items-center">
            <div className="w-full max-w-[90%] lg:max-w-[50%] p-6 bg-white rounded-lg">
                <h1 className="text-4xl font-bold text-center text-black mb-2 font-rufina">Enquiry Form</h1>
                <h2 className="text-xl font-semibold text-center text-black mb-6 font-dmsans">Get in touch with our Technical Experts</h2>
                <form className="space-y-7 pt-5 font-dmsans" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8">
                        <TextField id="standard-basic" label="Name" variant="standard" required fullWidth name="name"
                            value={formData.name}
                            InputLabelProps={{ className: 'font-dmsans text-lg ml-2' }}
                            onChange={handleChange} />
                        <TextField id="standard-basic" label="Email" variant="standard" required fullWidth name="email"
                            value={formData.email}
                            InputLabelProps={{ className: 'font-dmsans' }}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8">
                        <FormControl variant="standard" fullWidth required>
                            <InputLabel htmlFor="standard-adornment-amount" className='font-dmsans'>Mobile Number</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                startAdornment={<InputAdornment position="start">+91</InputAdornment>}
                                label="Mobile Number"
                                variant="standard"
                                placeholder='Mobile Number'
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}

                            />
                        </FormControl>
                        <FormControl variant="standard" fullWidth required>
                            <InputLabel id="city-label" className='font-dmsans'>Location</InputLabel>
                            <Select
                                labelId="city-label"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                label="Location"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Ambala">Ambala</MenuItem>
                                <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                                <MenuItem value="Dehradun">Dehradun</MenuItem>
                                <MenuItem value="Karnal">Karnal</MenuItem>
                                <MenuItem value="Saharanpur">Saharanpur</MenuItem>
                                <MenuItem value="Delhi - NCR">Delhi - NCR</MenuItem>
                                <MenuItem value="Indore">Indore</MenuItem>
                                <MenuItem value="Meerut">Meerut</MenuItem>
                                <MenuItem value="Muzaffarnagar">Muzaffarnagar</MenuItem>
                                <MenuItem value="Roorkee">Roorkee</MenuItem>
                                <MenuItem value="Yamunanagar">Yamunanagar</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <FormControl variant="standard" fullWidth required>
                        <InputLabel id="enquiry-type-label" className='font-dmsans'>Enquiry Type</InputLabel>
                        <Select
                            labelId="enquiry-type-label"
                            id="enquiry-type"
                            name="enquiryType"
                            value={formData.enquiryType}
                            onChange={handleChange}
                            label="Enquiry Type"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Construction Request">Construction Request</MenuItem>
                            <MenuItem value="Maintenance Request">Maintenance Request</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="enquiry"
                        label="Enquiry"
                        multiline
                        rows={2}
                        variant="standard"
                        required
                        fullWidth
                        name="enquiry"
                        value={formData.enquiry}
                        onChange={handleChange}
                        InputLabelProps={{ className: 'font-dmsans text-lg' }}
                    />
                    <div className="text-center mt-4">
                        <Button variant="contained" className=' bg-black text-yellow-400 px-16 py-3 text-xl rounded-full' type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
