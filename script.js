// Load JSON data and populate the table
fetch("https://ccwong0.github.io/generate_image/car_data.json")
  .then((response) => response.json())
  .then((data) => {
    const carTable = document.getElementById("carTable");
    const carManufacturers = data.carManufacturers;

    carManufacturers.forEach((car) => {
      const row = carTable.insertRow();
      const manufacturerCell = row.insertCell(0);
      const modelsCell = row.insertCell(1);

      manufacturerCell.innerText = car.manufacturer;
      modelsCell.innerText = car.models.join(", ");
    });
  })
  .catch((error) => console.error("Error loading JSON data:", error));
