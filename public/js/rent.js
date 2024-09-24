document.getElementById('rentForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get the rent date from the form input
    const rentDate = document.getElementById('rentDate').value;

    // Ensure the rent date is not empty
    if (!rentDate) {
        alert('Please select a rent date.');
        return;
    }

    const listingId = document.getElementById('rentForm').action.split('/').pop(); // Extract listing ID from form action

    try {
        // Make the fetch request to rent the listing
        const response = await fetch(`/listings/${listingId}/rent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rentDate }), // Send rentDate as JSON
        });

        // Parse the response
        const data = await response.json();

        // Check the response status
        if (response.ok) {
            alert('Listing rented successfully!');
            window.location.reload(); // Reload to update the page
        } else {
            alert(data.message || 'An error occurred.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to rent listing.');
    }
});
