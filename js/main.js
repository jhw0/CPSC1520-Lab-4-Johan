

(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.


    // Add your code here
    let  form = document.querySelector('.new-user-form');
    form.addEventListener('submit', function(event) 
    {
        event.preventDefault();
        let usernameElement = event.target.elements.username;
        let cityElement = event.target.elements.city;
        let provinceElement = event.target.elements.province;
        
        let username = usernameElement.value;
        let city = cityElement.value;
        let province = provinceElement.value;
        
        console.log('usernameElement :', usernameElement);
        console.log('cityElement :', cityElement);
        console.log('provinceElement :', provinceElement);
        
        let isFormValid = true;
        
        if (!hasWhiteSpace(username) && isValueNotEmpty(username)) {
            usernameElement.classList.remove('is-invalid');
        }
        else {
            usernameElement.classList.add('is-invalid');
            isFormValid = false;
        }
        
        if (isValueNotEmpty(city)) {
            cityElement.classList.remove('is-invalid');
        }
        else {
            cityElement.classList.add('is-invalid');
            isFormValid = false;
        }
        
        if (isValueNotEmpty(province)) {
            provinceElement.classList.remove('is-invalid');
        }
        else {
            provinceElement.classList.add('is-invalid');
            isFormValid = false;
        }
        
        if (isFormValid) {
            addUser(username, city, province);
            usernameElement.value = '';
            cityElement.value = '';
            provinceElement.value = '';
        }
        
        
    });

    // the isValueNotEmpty function: 
    
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();