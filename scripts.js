function saveDataToJSONFile() {
    const data = { product: products, category: categories };
    axios.post('/save-data', data)
        .then(response => {
            console.log('Data saved successfully:', response);
        })
        .catch(error => {
            console.error('Error saving data:', error);
        });
}
