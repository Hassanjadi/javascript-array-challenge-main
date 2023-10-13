function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  // Iterasi melalui array cars
  for (let i = 0; i < cars.length; i++) {
    // Mengambil mobil pada indeks ke-i
    const car = cars[i];
    // Memeriksa apakah mobil tersebut tersedia
    if (car.available) {
      // Jika tersedia, menambahkannya ke dalam array result
      result.push(car);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
