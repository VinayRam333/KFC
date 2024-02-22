        function orderClick()
        {
            document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
            document.getElementById("lblMobile").innerHTML =document.getElementById("txtMobile").value;
            
            var mealName = "";
            var mealCost = 0;
            var adonName = "";
            var adonCost = 0;

            var optBurger = document.getElementById("optBurger");
            var optRoller = document.getElementById("optRoller");

            var optBucket = document.getElementById("optBucket");
            var optPepsi = document.getElementById("optPepsi");

            if(optBurger.checked)
            {
                mealName = optBurger.value;
                mealCost = 180;
            }
            if(optRoller.checked)
            {
                mealName = optRoller.value;
                mealCost = 150;
            }

            if(optBucket.checked)
            {
                adonName= optBucket.value +"<br>";
                adonCost = 300;
                mealCost = mealCost+adonCost;
            }
            if(optPepsi.checked)
            {
                adonName+= optPepsi.value + "<br>";
                adonCost = 130;
                mealCost = mealCost+adonCost;
            }

            document.getElementById("lblMeal").innerHTML = mealName;
            document.getElementById("lblAdon").innerHTML = adonName;
            document.getElementById("lblBill").innerHTML = "&#8377;"+ mealCost;
        }