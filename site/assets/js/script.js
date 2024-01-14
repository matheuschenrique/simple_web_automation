document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    const nextBtn1 = document.getElementById('nextBtn1');
    const prevBtn2 = document.getElementById('prevBtn2');
    const nextBtn2 = document.getElementById('nextBtn2');
    const sendBtn = document.getElementById('sendBtn');
    const prevBtn3 = document.getElementById('prevBtn3');

    const bullet = document.querySelectorAll(".step .bullet");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");

    let currentPage = 0;

    nextBtn1.addEventListener('click', function () {
        if (validatePage1()) {
            currentPage++;
            showPage(currentPage);
            bullet[currentPage - 1].classList.add("active");
            progressCheck[currentPage - 1].classList.add("active");
            progressText[currentPage - 1].classList.add("active");
        }
    });

    prevBtn2.addEventListener('click', function () {
        currentPage--;
        showPage(currentPage);
    });

    nextBtn2.addEventListener('click', function () {
        if (validatePage2()) {
            currentPage++;
            showPage(currentPage);
            displayReview();
            bullet[currentPage - 1].classList.add("active");
            progressCheck[currentPage - 1].classList.add("active");
            progressText[currentPage - 1].classList.add("active");
        }
    });

    prevBtn3.addEventListener('click', function() {
        currentPage--;
        showPage(currentPage);
    })

    sendBtn.addEventListener('click', function() {
        console.log('enviando...');
        bullet[currentPage - 1].classList.add("active");
        progressCheck[currentPage - 1].classList.add("active");
        progressText[currentPage - 1].classList.add("active");
        location.reload()
    })

    function displayReview() {
        const nameElement = document.getElementById('reviewName');
        const priceElement = document.getElementById('reviewPrice');
        const quantityElement = document.getElementById('reviewQuantity');
        const codeElement = document.getElementById('reviewCode');
        const descriptionElement = document.getElementById('reviewDescription');
        const typeElement = document.getElementById('reviewType');
    
        if (nameElement && priceElement && quantityElement && codeElement && descriptionElement && typeElement) {
            const name = document.getElementById('name').value;
            const price = document.getElementById('price').value;
            const quantity = document.getElementById('quantity').value;
            const code = document.getElementById('code').value;
            const description = document.getElementById('description').value;
    
            const typeInputs = document.querySelectorAll('input[name="type"]');
            let typeSelected = '';
    
            for (const typeInput of typeInputs) {
                if (typeInput.checked) {
                    typeSelected = typeInput.getAttribute('id') || typeInput.getAttribute('name');
                    break;
                }
            }
    
            nameElement.innerText = `Product Name: ${name}`;
            priceElement.innerText = `Product Price: ${price}`;
            quantityElement.innerText = `Quantity: ${quantity}`;
            codeElement.innerText = `Product Code: ${code}`;
            descriptionElement.innerText = `Description: ${description}`;
            typeElement.innerText = `Type: ${typeSelected}`;

        } else {
            console.error('One or more review elements not found.');
        }
    }

    function validatePage1() {
        const name = document.getElementById('name');
        const price = document.getElementById('price');
        const quantity = document.getElementById('quantity');
        const code = document.getElementById('code');
        clearErrorMessages();

        let isValid = true;

        if (name.value.trim() === '') {
            displayErrorMessage(name, 'Please fill in this field');
            isValid = false;
        }

        if (price.value.trim() === '') {
            displayErrorMessage(price, 'Please fill in this field');
            isValid = false;
        }

        if (quantity.value.trim() === '') {
            displayErrorMessage(quantity, 'Please fill in this field');
            isValid = false;
        }

        if (code.value.trim() === '') {
            displayErrorMessage(code, 'Please fill in this field');
            isValid = false;
        }

        return isValid;
    }

    function validatePage2() {
        const description = document.getElementById('description');
        const typeInputs = document.querySelectorAll('input[name=type]');
        let typeSelected = false;
        clearErrorMessages();

        let isValid = true;

        if (description.value.trim() === '') {
            displayErrorMessage(description, 'Please fill in this field');
            isValid = false;
        }

        for (const typeInput of typeInputs) {
            if (typeInput.checked) {
                typeSelected = true;
                break;
            }
        }
        
        if (!typeSelected) {
            // Adicione mensagem de erro para o grupo de tipo (type-group)
            const typeGroupError = document.getElementById('errorTypeGroup');
            typeGroupError.innerText = 'Please select a type';
            isValid = false;
        }

        return isValid;
    }

    function displayErrorMessage(inputElement, errorMessage) {
        const errorElement = inputElement.nextElementSibling; // Mensagem de erro está ao lado do input
        errorElement.innerText = errorMessage;
    }

    function clearErrorMessages() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach((errorElement) => {
            errorElement.innerText = '';
        });

        // Limpar mensagem de erro do grupo de tipo (type-group)
        const typeGroupError = document.getElementById('errorTypeGroup');
        if (typeGroupError) {
            typeGroupError.innerText = '';
        }
    }

    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }
});
