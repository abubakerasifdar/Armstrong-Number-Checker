
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
              let input = document.getElementById('input').value;
            let result = "";
            let number =0;
            let singleNumber = (input).split('');
            let singleNumberlen = singleNumber.length;
            for (let i = 0; i < singleNumberlen; i++) {
                number += singleNumber[i]**3;
                console.log(number, "Number during the Loop iteration");
            }
             if (input == number) {
                result = `Your Entered ${input} Number which is Armstrong Number `
                document.getElementById("output").style.background = "Green"
            }
            else {
                result = `Your Entered ${input} Number which is not an Armstrong Number `
                document.getElementById("output").style.background = "red"
            }
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
        }   
    