let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');
    let height_status=false, weight_status=false;

    let errorMessages = '';

    if(height === null || isNaN(parseInt(height)) || (parseInt(height) <= 0)){
        errorMessages += 'Please provide a valid height\n';
    }else{
        height_status=true;
    }

    if(weight === null || isNaN(parseInt(weight)) || (parseInt(weight) <= 0)){
        errorMessages += 'Please provide a valid weight\n';
    }else{
        weight_status=true;
    }


    if(errorMessages !== ''){
        alert(errorMessages);
    }
    
    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerText = 'Under weight : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerText = 'Normal : ' + bmi;
        }else{
            result.innerText = 'Over weight : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerText = '';
    }
});
