let total= 0;


let iceCakeCount = 0;
document.getElementById('ice-cake-count++').addEventListener('click', function(e){
    iceCakeCount++;
    if(iceCakeCount>0){
        document.getElementById('ice-cake-count').innerHTML=iceCakeCount;
        document.getElementById('ice-cake-title').style.color='red'
        let price=50;
    total=total+price;
    document.getElementById('total').innerHTML=total;
    }
    e.preventDefault();
    
})
document.getElementById('ice-cake-count--').addEventListener('click', function(e){
    if(iceCakeCount>0){
        iceCakeCount--;
        document.getElementById('ice-cake-count').innerHTML=iceCakeCount;
        let price=50;
    total=total-price;
    document.getElementById('total').innerHTML=total;
        if(iceCakeCount===0){
            document.getElementById('ice-cake-title').style.color='black';
        }}
e.preventDefault();
});
// ------------------------------------------------------------------------------------------------------
let nonVegMealsCount = 0;
document.getElementById('non-veg-meals++').addEventListener('click', function(e){
    nonVegMealsCount++;
    if(nonVegMealsCount>0){
        document.getElementById('non-veg-meals-count').innerHTML=nonVegMealsCount;
        document.getElementById('non-veg-meals-title').style.color='red'
        let price=180;
    total=total+price;
    document.getElementById('total').innerHTML=total;
    }
    e.preventDefault();
})
document.getElementById('non-veg-meals--').addEventListener('click', function(e){
    if(nonVegMealsCount>0){
        nonVegMealsCount--;
        document.getElementById('non-veg-meals-count').innerHTML=nonVegMealsCount;
        let price=180;
    total=total-price;
    document.getElementById('total').innerHTML=total;
        if(nonVegMealsCount===0){
            document.getElementById('non-veg-meals-title').style.color='black';
        }}
        e.preventDefault();
});
// -----------------------------------------------------------------------------------------------
let burgerCount=0;
document.getElementById('burger++').addEventListener('click', function(e){
    burgerCount++;
    if(burgerCount>0){
        document.getElementById('burger-count').innerHTML=burgerCount;
        document.getElementById('burger-title').style.color='red'
        let price=250;
    total=total+price;
    document.getElementById('total').innerHTML=total;
    }
    e.preventDefault();
})
document.getElementById('burger--').addEventListener('click', function(e){
    if(burgerCount>0){
        burgerCount--;
        document.getElementById('burger-count').innerHTML=burgerCount;
        let price=250;
    total=total-price;
    document.getElementById('total').innerHTML=total;
        if(burgerCount===0){
            document.getElementById('burger-title').style.color='black';
        }}
        e.preventDefault();
});
// ---------------------------------------------------------------------------------------------------------
let milkshakeCount= 0;
document.getElementById('milkshake++').addEventListener('click', function(e){
    milkshakeCount++;
    if(milkshakeCount>0){
        document.getElementById('milkshake-count').innerHTML=milkshakeCount;
        document.getElementById('milkshake-title').style.color='red'
        let price=100;
    total=total+price;
    document.getElementById('total').innerHTML=total;
    }
    e.preventDefault();
})
document.getElementById('milkshake--').addEventListener('click', function(e){
    if(milkshakeCount>0){
        milkshakeCount--;
        document.getElementById('milkshake-count').innerHTML=milkshakeCount;
        let price=100;
    total=total-price;
    document.getElementById('total').innerHTML=total;
        if(milkshakeCount===0){
            document.getElementById('milkshake-title').style.color='black';
        }}
        e.preventDefault();
});
// -----------------------------------------------------------------------------------------------
let vegfriesCount= 0;
document.getElementById('vegfries++').addEventListener('click', function(e){
    vegfriesCount++;
    if(vegfriesCount>0){
        document.getElementById('vegfries-count').innerHTML=vegfriesCount;
        document.getElementById('vegfries-title').style.color='red'
        let price=80;
    total=total+price;
    document.getElementById('total').innerHTML=total;
    }
    e.preventDefault();
})
document.getElementById('vegfries--').addEventListener('click', function(e){
    if(vegfriesCount>0){
        vegfriesCount--;
        document.getElementById('vegfries-count').innerHTML=vegfriesCount;
        let price=80;
    total=total-price;
    document.getElementById('total').innerHTML=total;
        if(vegfriesCount===0){
            document.getElementById('vegfries-title').style.color='black';
        }}
        e.preventDefault();
});
// ------------------------------------------------------------------------------------------------------
let pizzaCount= 0;
document.getElementById('pizza++').addEventListener('click', function(e){
    pizzaCount++;
    if(pizzaCount>0){
        document.getElementById('pizza-count').innerHTML=pizzaCount;
        document.getElementById('pizza-title').style.color='red'
        let price=350;
    total=total+price;
    document.getElementById('total').innerHTML=total;
    }
    e.preventDefault();
})
document.getElementById('pizza--').addEventListener('click', function(e){
    if(pizzaCount>0){
        pizzaCount--;
        document.getElementById('pizza-count').innerHTML=pizzaCount;
        let price=350;
    total=total-price;
    document.getElementById('total').innerHTML=total;
        if(pizzaCount===0){
            document.getElementById('pizza-title').style.color='black';
        }}
        e.preventDefault();
});
// ----------------------------------------------------------------------------------------------------
let chacolavaCount= 0;
document.getElementById('chacolava++').addEventListener('click', function(e){
    chacolavaCount++;
    if(chacolavaCount>0){
        document.getElementById('chacolava-count').innerHTML=chacolavaCount;
        document.getElementById('chacolava-title').style.color='red'
        let price=150;
    total=total+price;
    document.getElementById('total').innerHTML=total;
    }
    e.preventDefault();
})
document.getElementById('chacolava--').addEventListener('click', function(e){
    if(chacolavaCount>0){
        chacolavaCount--;
        document.getElementById('chacolava-count').innerHTML=chacolavaCount;
        let price=150;
    total=total-price;
    document.getElementById('total').innerHTML=total;
        if(chacolavaCount===0){
            document.getElementById('chacolava-title').style.color='black';
        }}
        e.preventDefault();
});
// ------------------------------------------------------------------------------------------------------
let dosaCount= 0;
document.getElementById('dosa++').addEventListener('click', function(e){
    dosaCount++;
    if(dosaCount>0){
        document.getElementById('dosa-count').innerHTML=dosaCount;
        document.getElementById('dosa-title').style.color='red'
        let price=50;
    total=total+price;
    document.getElementById('total').innerHTML=total;
    }
    e.preventDefault();
})
document.getElementById('dosa--').addEventListener('click', function(e){
    if(dosaCount>0){
        dosaCount--;
        document.getElementById('dosa-count').innerHTML=dosaCount;
        let price=50;
    total=total-price;
    document.getElementById('total').innerHTML=total;
        if(dosaCount===0){
            document.getElementById('dosa-title').style.color='black';
        }}
        e.preventDefault();
});
// ------------------------------------------------------------------------------------------------------------------/
let vegmealsCount= 0;
document.getElementById('vegmeals++').addEventListener('click', function(e){
    vegmealsCount++;
    if(vegmealsCount>0){
        document.getElementById('vegmeals-count').innerHTML=vegmealsCount;
        document.getElementById('vegmeals-title').style.color='red'
        let price=110;
    total=total+price;
    document.getElementById('total').innerHTML=total;
    }
    e.preventDefault();
})
document.getElementById('vegmeals--').addEventListener('click', function(e){
    if(vegmealsCount>0){
        vegmealsCount--;
        document.getElementById('vegmeals-count').innerHTML=vegmealsCount;
        let price=110;
    total=total-price;
    document.getElementById('total').innerHTML=total;
        if(vegmealsCount===0){
            document.getElementById('vegmeals-title').style.color='black';
        }}
        e.preventDefault();
});
// ---------------------------------------------------------------------------------------------------------------

let proceed=document.getElementById('proceed');
proceed.addEventListener('click', function(e){
    let table=document.getElementById('table')
    table.innerHTML="";

    if(total>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Item Name';
        let cell2=row.insertCell();
        cell2.innerHTML='Quantity';
        let cell3=row.insertCell();
        cell3.innerHTML='Unit Price';
        let cell4=row.insertCell();
        cell4.innerHTML= 'Amount';
    }else{
        alert('Please choose any food product');
    }
    if(iceCakeCount>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Ice Cake';
        let cell2=row.insertCell();
        cell2.innerHTML=iceCakeCount;
        let cell3=row.insertCell();
        cell3.innerHTML=50;
        let cell4=row.insertCell();
        cell4.innerHTML= (iceCakeCount*50);
    }
    if(nonVegMealsCount>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='non-Veg Meals';
        let cell2=row.insertCell();
        cell2.innerHTML=nonVegMealsCount;
        let cell3=row.insertCell();
        cell3.innerHTML=180;
        let cell4=row.insertCell();
        cell4.innerHTML= (nonVegMealsCount*180);
    }
    if(burgerCount>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Burger';
        let cell2=row.insertCell();
        cell2.innerHTML=burgerCount;
        let cell3=row.insertCell();
        cell3.innerHTML=250;
        let cell4=row.insertCell();
        cell4.innerHTML= (burgerCount*250);
    }
    if(milkshakeCount>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Milk Shake';
        let cell2=row.insertCell();
        cell2.innerHTML=milkshakeCount;
        let cell3=row.insertCell();
        cell3.innerHTML=100;
        let cell4=row.insertCell();
        cell4.innerHTML= (milkshakeCount*100);
    }
    if(vegfriesCount>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Veg Fries';
        let cell2=row.insertCell();
        cell2.innerHTML=vegfriesCount;
        let cell3=row.insertCell();
        cell3.innerHTML=80;
        let cell4=row.insertCell();
        cell4.innerHTML= (vegfriesCount*80);
    }
    if(pizzaCount>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Pizza';
        let cell2=row.insertCell();
        cell2.innerHTML=pizzaCount;
        let cell3=row.insertCell();
        cell3.innerHTML=350;
        let cell4=row.insertCell();
        cell4.innerHTML= (pizzaCount*350);
    }
    if(chacolavaCount>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Chaco lava';
        let cell2=row.insertCell();
        cell2.innerHTML=chacolavaCount;
        let cell3=row.insertCell();
        cell3.innerHTML=150;
        let cell4=row.insertCell();
        cell4.innerHTML= (chacolavaCount*150);
    }
    if(dosaCount>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Dosa';
        let cell2=row.insertCell();
        cell2.innerHTML=dosaCount;
        let cell3=row.insertCell();
        cell3.innerHTML=50;
        let cell4=row.insertCell();
        cell4.innerHTML= (dosaCount*50);
    }
    if(vegmealsCount>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Veg-Meals';
        let cell2=row.insertCell();
        cell2.innerHTML=vegmealsCount;
        let cell3=row.insertCell();
        cell3.innerHTML=110;
        let cell4=row.insertCell();
        cell4.innerHTML= (vegmealsCount*110);
    }
    if(total>0){
        let row=table.insertRow();
        let cell1=row.insertCell();
        cell1.innerHTML='Total';
        let cell2=row.insertCell();
        cell2.innerHTML='';
        let cell3=row.insertCell();
        cell3.innerHTML='';
        let cell4=row.insertCell();
        cell4.innerHTML= total;
    }
    let div=document.getElementById('pay')
    div.innerHTML='';
    let button=document.createElement('button');
    button.setAttribute('id','pay')
    button.style.background='green';
    button.style.width='100%';
    button.style.height='50px';
    button.style.color='white';
    button.style.border='none';
    let txt = document.createTextNode('click when the list of items are correct and proceed to PAYMENT');
    button.appendChild(txt);
    div.appendChild(button);
    button.addEventListener('click', function(e){
        alert('Order is placed successfully')
    })
    
})