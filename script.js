const dob = document.getElementById("dob");
    const calculate = document.getElementById("calculate");
    const result = document.getElementById("result");
    const years = document.getElementById("years");
    const months = document.getElementById("months");
    const days = document.getElementById("days");

    calculate.addEventListener("click", function () {
      const dateOfBirth = new Date(dob.value);

      if (isNaN(dateOfBirth.getTime())) {
        alert("Please enter a valid date");
      } else {
        const today = new Date();
        const ageDiff = today - dateOfBirth; 
        const ageDiffDate = new Date(ageDiff); 
        const year = ageDiffDate.getUTCFullYear() - 1970; 
        const month = ageDiffDate.getUTCMonth(); 
        const day = ageDiffDate.getUTCDate() - 1; 

        years.textContent = year + " years";
        months.textContent = month + " months";
        days.textContent = day + " days";
        result.hidden = false;
      }
    });