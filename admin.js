let deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach(button => {

    button.addEventListener("click", function(){

        let row = this.closest("tr");

        if(row){
            row.remove();
            alert("Deleted Successfully");
        }

    });

});



let confirmButtons = document.querySelectorAll(".confirm");


confirmButtons.forEach(button => {

    button.addEventListener("click", function(){

        let row = this.closest("tr");

        let status = row.querySelector("span");


        if(status){

            status.innerHTML = "Confirmed";
            status.className = "confirmed";

        }


        this.remove();

    });

});