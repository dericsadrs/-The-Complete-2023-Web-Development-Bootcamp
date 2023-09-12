function checkLeapYear(year ) {
    if( year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leap")
            }
            else {
                console.log("Not Leap")
            }
        }
        else{
            console.log("Leap")
        }
    }
    else {
        console.log("Not Leap")
    }
}

checkLeapYear(1989)