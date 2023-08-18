function plusMinusCount(product, isPlus, unitPrice){
    const plusOrMinus = isPlus == true ? "plus" : "minus";
    document.getElementById(product + '-' + plusOrMinus).addEventListener('click', function(){
        // update count
        const count = document.getElementById(product + '-count');
        let countNumber = parseInt(count.value);
        if(plusOrMinus == 'plus') {
            countNumber++;
        }
        else if(countNumber > 0){
            countNumber--;
        }
        count.value = countNumber;

        //update the product price
        let productPriceNumber = unitPrice * countNumber;
        console.log(productPriceNumber);
        document.getElementById(product + '-price').innerText = productPriceNumber;

        // update total price 
        const phonePrice = document.getElementById('phone-price');
        const casePirice = document.getElementById('case-price');
        const subtotalPrice = document.getElementById('subtotal-price');
        subtotalPrice.innerText = parseInt(phonePrice.innerText) + parseInt(casePirice.innerText);
        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = parseInt(phonePrice.innerText) + parseInt(casePirice.innerText);
        

    })
}
plusMinusCount('phone', true, 1219);
plusMinusCount('phone', false, 1219);

plusMinusCount('case', true, 59);
plusMinusCount('case', false, 59);
