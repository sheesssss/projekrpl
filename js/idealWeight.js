function calculateIdealWeight() {
    // Ambil input dari pengguna
    const height = parseFloat(document.getElementById("height").value); // Tinggi badan (cm)
    const weight = parseFloat(document.getElementById("weight").value); // Berat badan (kg)
    const age = parseInt(document.getElementById("age").value); // Umur
    const gender = document.querySelector('input[name="gender"]:checked').value; // Jenis kelamin

    // Validasi input
    if (isNaN(height) || isNaN(weight) || isNaN(age)) {
        alert("Please provide valid inputs!");
        return;
    }

    // Rumus Broca untuk berat badan ideal
    let idealWeight;
    if (gender === "male") {
        idealWeight = (height - 100) - ((height - 100) * 0.1);
    } else if (gender === "female") {
        idealWeight = (height - 100) - ((height - 100) * 0.15);
    }

    // Bandingkan berat badan dengan berat badan ideal
    const message = weight >= (idealWeight - 2) && weight <= (idealWeight + 2)
        ? `Congratulation! Your weight is ideal! Your ideal weight is approximately ${idealWeight.toFixed(2)} kg.`
        : `Sorry, your weight is not ideal. Your ideal weight should be around ${idealWeight.toFixed(2)} kg.`;

    // Tampilkan hasil
    document.getElementById("result").innerText = message;
}
