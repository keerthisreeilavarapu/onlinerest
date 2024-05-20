// increase button
for(var i=0;i<11;i++)
    {
        document.querySelectorAll(".increase")[i].addEventListener("click",increasequantity);
    }
function increasequantity()
{
    switch(this.getAttribute("name"))
    {
        case "0":
        var quantity=parseInt(document.querySelectorAll(".span")[0].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[0].innerHTML=quantity;
        break;

        case "1":
        var quantity=parseInt(document.querySelectorAll(".span")[1].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[1].innerHTML=quantity;
        break;

        case "2":
        var quantity=parseInt(document.querySelectorAll(".span")[2].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[2].innerHTML=quantity;
        break;

        case "3":
        var quantity=parseInt(document.querySelectorAll(".span")[3].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[3].innerHTML=quantity;
        break;

        case "4":
        var quantity=parseInt(document.querySelectorAll(".span")[4].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[4].innerHTML=quantity;
        break;

        case "5":
        var quantity=parseInt(document.querySelectorAll(".span")[5].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[5].innerHTML=quantity;
        break;

        case "6":
        var quantity=parseInt(document.querySelectorAll(".span")[6].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[6].innerHTML=quantity;
        break;

        case "7":
        var quantity=parseInt(document.querySelectorAll(".span")[7].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[7].innerHTML=quantity;
        break;

        case "8":
        var quantity=parseInt(document.querySelectorAll(".span")[8].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[8].innerHTML=quantity;
        break;

        case "9":
        var quantity=parseInt(document.querySelectorAll(".span")[9].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[9].innerHTML=quantity;
        break;

        case "10":
        var quantity=parseInt(document.querySelectorAll(".span")[10].innerHTML);
        quantity=quantity+1;
        document.querySelectorAll(".span")[10].innerHTML=quantity;
        break;
    }

    var totalitems=0; 
    for(j=0;j<11;j++)
        {
            totalitems=totalitems+parseInt(document.querySelectorAll(".span")[j].innerHTML);
        }
    document.querySelector(".items").innerHTML=totalitems;

    var totalcost=0; 
    for(k=0;k<11;k++)
        {
            var no_of_items=parseInt(document.querySelectorAll(".span")[k].innerHTML);
            var price=parseInt(document.querySelectorAll(".price")[k].innerHTML);
            var priceperitem=no_of_items*price;
            totalcost=totalcost+priceperitem;
        }
    document.querySelector(".total").innerHTML=totalcost;
}

// decrease button
for(var i=0;i<11;i++)
    {
        document.querySelectorAll(".decrease")[i].addEventListener("click",decreasequantity);
    }
function decreasequantity()
{
    switch(this.getAttribute("name"))
    {
        case "0":
        var quantity=parseInt(document.querySelectorAll(".span")[0].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[0].innerHTML=quantity;
            }
        break;

        case "1":
        var quantity=parseInt(document.querySelectorAll(".span")[1].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[1].innerHTML=quantity;
            }  
        break;

        case "2":
        var quantity=parseInt(document.querySelectorAll(".span")[2].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[2].innerHTML=quantity;
            }
        break;

        case "3":
        var quantity=parseInt(document.querySelectorAll(".span")[3].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[3].innerHTML=quantity;
            }
        break;

        case "4":
        var quantity=parseInt(document.querySelectorAll(".span")[4].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[4].innerHTML=quantity;
            }
        break;

        case "5":
        var quantity=parseInt(document.querySelectorAll(".span")[5].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[5].innerHTML=quantity;
            }
        break;

        case "6":
        var quantity=parseInt(document.querySelectorAll(".span")[6].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[6].innerHTML=quantity;
            }
        break;

        case "7":
        var quantity=parseInt(document.querySelectorAll(".span")[7].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[7].innerHTML=quantity;
            }
        break;

        case "8":
        var quantity=parseInt(document.querySelectorAll(".span")[8].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[8].innerHTML=quantity;
            }
        break;

        case "9":
        var quantity=parseInt(document.querySelectorAll(".span")[9].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[9].innerHTML=quantity;
            }
        break;

        case "10":
        var quantity=parseInt(document.querySelectorAll(".span")[10].innerHTML);
        if(quantity>0)
            {
                quantity=quantity-1;
                document.querySelectorAll(".span")[10].innerHTML=quantity;
            }
        break;
    }
    var totalitems=0; 
    for(j=0;j<11;j++)
        {
            totalitems=totalitems+parseInt(document.querySelectorAll(".span")[j].innerHTML);
        }
    document.querySelector(".items").innerHTML=totalitems;

    var totalcost=0;
    for(k=0;k<11;k++)
        {
            var no_of_items=parseInt(document.querySelectorAll(".span")[k].innerHTML);
            var price=parseInt(document.querySelectorAll(".price")[k].innerHTML);
            var priceperitem=no_of_items*price;
            totalcost=totalcost+priceperitem;
        }
    document.querySelector(".total").innerHTML=totalcost;
}