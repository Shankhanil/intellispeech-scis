import { React, useContext, useState } from "react";

import { LanguageContext } from "../../context/LanguageContext";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			display: 'flex',
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	formElement: {
		margin: theme.spacing(1),
	}
}));


const WelcomePage = () => {
	let language = useContext(LanguageContext);
	const classes = useStyles();
	const [value, setValue] = useState('female');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<h1>
				Unique identifier ID
            </h1>
			<form className={classes.root} noValidate autoComplete="off">
				{/* Gender */}
				<FormControl className={classes.formElement}>
					<FormLabel >Your Gender</FormLabel>
					<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
						<FormControlLabel value="female" control={<Radio />} label="Female" />
						<FormControlLabel value="male" control={<Radio />} label="Male" />
					</RadioGroup>
				</FormControl>

				{/* Age */}
				<FormControl
					className={classes.formElement}>

					<FormLabel>
						Your Age
					</FormLabel>
					<TextField
						id="standard-number"
						label="Number"
						type="number"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</FormControl>

			</form>
		</div>
	);
}

export default WelcomePage;