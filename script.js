function calculate() {
    const unit = document.getElementById("unit").value;
    const height = parseFloat(document.getElementById("height").value);
    const length = parseFloat(document.getElementById("length").value);
    // Validation for inputs
    if (!height || height <= 0 || !length || length <= 0) {
        document.getElementById("resultArea").innerText = "Please enter valid positive values for height and length.";
        document.getElementById("resultSize").innerText = "";
        document.getElementById("resultLink").innerText = "";
        document.getElementById("convertedHeight").innerText = "";
        document.getElementById("convertedLength").innerText = "";
        return;
    }

    // Convert height and length to cm
    let heightCm, lengthCm;
    if (unit === "Cm") {
        heightCm = height;
        lengthCm = length;
    } else if (unit === "Inch") {
        heightCm = Math.round(height * 2.54); // 1 inch = 2.54 cm
        lengthCm = Math.round(length * 2.54);
    } else if (unit === "Feet") {
        heightCm = Math.round(height * 30.48); // 1 foot = 30.48 cm
        lengthCm = Math.round(length * 30.48);
    }

    // Display converted height and length
    document.getElementById("convertedHeight").innerText = `Window Frame Height (in Cm): ${heightCm}`;
    document.getElementById("convertedLength").innerText = `Window Frame Width/Length (in Cm): ${lengthCm}`;

    // Calculate area
    let area = height * length;
    let size = "";
    let areaText = "";
    let link = "";

    if (unit === "Cm") {
        areaText = area + " Sq.Cm";
        if (area <= 5574) {
            size = "X-SMALL";
            link = "https://www.amazon.in/dp/B0DQDQBM8G";
        } else if (area <= 11149) {
            size = "SMALL";
            link = "https://www.amazon.in/dp/B0DQDPSG7G";
        } else if (area <= 20439) {
            size = "MEDIUM";
            link = "https://www.amazon.in/dp/B0DQDRDJWL";
        } else if (area <= 37161) {
            size = "LARGE";
            link = "https://www.amazon.in/dp/B0DQDNM3MK";
        } else if (area <= 55742) {
            size = "X-LARGE";
            link = "https://www.amazon.in/dp/B0DQDSQW91";
        } else if (area <= 74322) {
            size = "XX-LARGE";
            link = "https://www.amazon.in/dp/B0DQDQYV1M";
        } else {
            size = "Size out of range";
        }
    } else if (unit === "Inch") {
        areaText = area + " Sq.In";
        if (area <= 864) {
            size = "X-SMALL";
            link = "https://www.amazon.in/dp/B0DQDQBM8G";
        } else if (area <= 1729) {
            size = "SMALL";
            link = "https://www.amazon.in/dp/B0DQDPSG7G";
        } else if (area <= 3169) {
            size = "MEDIUM";
            link = "https://www.amazon.in/dp/B0DQDRDJWL";
        } else if (area <= 5760) {
            size = "LARGE";
            link = "https://www.amazon.in/dp/B0DQDNM3MK";
        } else if (area <= 8640) {
            size = "X-LARGE";
            link = "https://www.amazon.in/dp/B0DQDSQW91";
        } else if (area <= 11250) {
            size = "XX-LARGE";
            link = "https://www.amazon.in/dp/B0DQDQYV1M";
        } else {
            size = "Size out of range";
        }
    } else if (unit === "Feet") {
        areaText = area + " Sq.Ft";
        if (area <= 6) {
            size = "X-SMALL";
            link = "https://www.amazon.in/dp/B0DQDQBM8G";
        } else if (area <= 12) {
            size = "SMALL";
            link = "https://www.amazon.in/dp/B0DQDPSG7G";
        } else if (area <= 22) {
            size = "MEDIUM";
            link = "https://www.amazon.in/dp/B0DQDRDJWL";
        } else if (area <= 40) {
            size = "LARGE";
            link = "https://www.amazon.in/dp/B0DQDNM3MK";
        } else if (area <= 60) {
            size = "X-LARGE";
            link = "https://www.amazon.in/dp/B0DQDSQW91";
        } else if (area <= 80) {
            size = "XX-LARGE";
            link = "https://www.amazon.in/dp/B0DQDQYV1M";
        } else {
            size = "Size out of range";
        }
    }
    // Display area and size
    document.getElementById("resultArea").innerText = "Area: " + areaText;
    document.getElementById("resultSize").innerText = "Size: " + size;

    // Display product link
    if (link) {
        document.getElementById("resultLink").innerHTML = `<a href="${link}" target="_blank">CLICK HERE:Amazon Product Link:ArmorX Window Size: ${size}</a>`;
    } else {
        document.getElementById("resultLink").innerText = "";
    }
}
