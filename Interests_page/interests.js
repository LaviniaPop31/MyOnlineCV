// verify checkbox from dancing part
let dancingCheckbox = document.getElementById('toggle');

dancingCheckbox.onchange = function () {
    console.log(dancingCheckbox.checked)
    if (dancingCheckbox.checked) {
    document.getElementById('otherInterests').style.visibility = 'hidden'
    } else if((dancingCheckbox.checked === false) && (readingCheckbox.checked === false)){
        document.getElementById('otherInterests').style.visibility = 'visible';
    }
}

// verify checkbox from reading part
let readingCheckbox = document.getElementById('expanded');

readingCheckbox.onchange = function () {
    if (readingCheckbox.checked) {
        document.getElementById('otherInterests').style.visibility = 'hidden'
        } else if((dancingCheckbox.checked === false) && (readingCheckbox.checked === false)){
            document.getElementById('otherInterests').style.visibility = 'visible';
        }
}