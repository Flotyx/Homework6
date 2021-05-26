import React, {useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import moment from 'moment'

const useStyles = makeStyles((theme) => ({
container: {    
display: 'flex',
flexWrap: 'wrap',  
},  
textField: {    
marginLeft: theme.spacing(1),    
marginRight: theme.spacing(1),    
width: 200,  
},
}));

function DatePicker(){
    const classes = useStyles();
    const [date,setDate]=useState("民國110年05月26號")

    function TWdate(obj){
        return `民國${(obj.slice(0,4))-1911}年${obj.slice(5,7)}月${obj.slice(8,10)}號`;
    // const year = moment(event.target.value).format("YYYY")
    // const month = moment(event.target.value).format("MM")
    // const day = moment(event.target.value).format("DD")
    //`民國${year-1911}年${month}月${day}號`
    }

    return(      
        <form className={classes.container} noValidate>
            <TextField
                id="chdate"
                // type="date"
                label="啊公店開店日選擇"
                className={classes.textField}
                value={date}
            />
            <TextField
                id="date"
                label="啊公店開店日選擇"
                type="date"
                defaultValue="2021-05-26"
                onChange={ (event) => {
                    setDate(TWdate(event.target.value));
                }}
                className={classes.textField}
                format="YYYY MM DD"
                InputLabelProps={{
                    shrink: true,
                }}
            /> 
        </form>
    );
}

export default DatePicker;
