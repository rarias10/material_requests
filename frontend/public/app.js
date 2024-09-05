document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.getElementById('itemsContainer');
    const addItemButton = document.getElementById('addItemButton');
    const submitRequestForm = document.getElementById('submitRequestForm');
    let itemCount = 1;  // Starting with the first item

    // Add event listener to the "Add Another Item" button
    addItemButton.addEventListener('click', function() {
        itemCount++;
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <label for="itemName${itemCount}">Item Name:</label>
            <input type="text" id="itemName${itemCount}" name="itemName">

            <label for="quantity${itemCount}">Quantity:</label>
            <input type="number" id="quantity${itemCount}" name="quantity">

            <label for="category${itemCount}">Category:</label>
            <select id="category${itemCount}" name="category">
                <option value="stationery">Stationery</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
            </select>

            <button type="button" class="deleteItemButton">Delete</button>
        `;
        itemsContainer.appendChild(newItem);

        // Add delete functionality to the delete button
        const deleteButton = newItem.querySelector('.deleteItemButton');
        deleteButton.addEventListener('click', function() {
            newItem.remove();
        });
    });

    // Handle form submission
    submitRequestForm.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent the form from submitting the default way

        // Collect form data
        const formData = new FormData(submitRequestForm);
        const items = [];

        // Loop through the items in the form
        for (let i = 1; i <= itemCount; i++) {
            const itemName = formData.get(`itemName${i}`);
            const quantity = formData.get(`quantity${i}`);
            const category = formData.get(`category${i}`);

            // Only push the item if it's filled (ignore empty optional items)
            if (itemName || quantity || category) {
                items.push({
                    name: itemName || "N/A",
                    quantity: quantity || "N/A",
                    category: category || "N/A"
                });
            }
        }

        // Collect additional notes
        const notes = formData.get('notes');

        // Construct the data object to send
        const requestData = {
            items: items,
            notes: notes
        };

        // Send the data to the server using fetch (example endpoint)
        fetch('/submit-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle success
            alert('Request submitted successfully!');
            console.log('Success:', data);
        })
        .catch((error) => {
            // Handle error
            alert('There was an error submitting your request.');
            console.error('Error:', error);
        });
    });
});
