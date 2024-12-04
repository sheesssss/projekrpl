function calculateIdealWeight() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Validasi input
    if (!height || !weight || height <= 0 || weight <= 0) {
        document.getElementById("result").innerText = "Please enter valid inputs.";
        return;
    }

    let idealWeight;

    // Hitung BBI berdasarkan tinggi badan
    if (height >= 150) {
        idealWeight = (height - 100);}

    // Cek apakah berat badan ideal
    if (Math.abs(weight - idealWeight) <= 2) {
        document.getElementById("result").innerText = `Congratulation ! Your weight is ideal! Your ideal weight is approximately ${idealWeight.toFixed(2)} kg.`;
    } else {
        document.getElementById("result").innerText = `Sorry your weight is not ideal. Your ideal weight should be around ${idealWeight.toFixed(2)} kg.`;
    }
}
