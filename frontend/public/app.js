document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.getElementById('itemsContainer');
    const addItemButton = document.getElementById('addItemButton');
    let itemCount = 1;

    // Add event listener to the "Add Another Item" button
    addItemButton.addEventListener('click', function() {
        itemCount++;
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <label for="itemName${itemCount}">Item Name:</label>
            <input type="text" id="itemName${itemCount}" name="itemName" required>

            <label for="quantity${itemCount}">Quantity:</label>
            <input type="number" id="quantity${itemCount}" name="quantity" required>

            <label for="category${itemCount}">Category:</label>
            <select id="category${itemCount}" name="category" required>
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
});
