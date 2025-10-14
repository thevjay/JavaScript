// Star Pattern
let n=5

for (let i=0;i<n;i++){
    let row = "";
    for(let j=0;j<n;j++){
        row = row + " *"
    }
    console.log(row)
}

// *
// **
// ***
// ****

for(let i=0;i<n;i++){
    let row = ""
    for(j=0;j<i+1;j++){
        row = row + "*"
    }
    console.log(row)
}


for (let i=1;i<n;i++){
    let row = "";
    for(let j=0;j<i;j++){
        row =row+(j+1)
    }
    console.log(row)
}

for(let i=0;i<n;i++){
    let row = ""
    for(let j=0;j<=i;j++){
        row=row+(i+1)
    }
    console.log(row)
}

for(let i=0;i<n;i++){

    let row = "";
    let toggle = 1;
    for(let j=0;j<i+1;j++){
        row = row + toggle;

        // Switch the toggle
        if(toggle == 1) toggle = 0;
        else toggle = 1;
    }
    console.log(row)
}