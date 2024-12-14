function calculate() {
    const unit = document.getElementById("unit").value;
    const height = parseFloat(document.getElementById("height").value);
    const length = parseFloat(document.getElementById("length").value);

    // Input validation
    if (!height || height <= 0 || !length || length <= 0) {
        document.getElementById("resultArea").innerText = "Please enter valid positive values for height and length.";
        document.getElementById("resultSize").innerText = "";
        document.getElementById("resultLink").innerText = "";
        return;
    }

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

    document.getElementById("resultArea").innerText = "Area: " + areaText;
    document.getElementById("resultSize").innerText = "Size: " + size;
    if (link) {
        document.getElementById("resultLink").innerHTML = `<a href="${link}" target="_blank">View Product for ${size}</a>`;
    } else {
        document.getElementById("resultLink").innerText = "";
    }
}
