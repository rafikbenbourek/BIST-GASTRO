function changerCarte(lieu) {
    let url = "";

    if (lieu === "Bayonne") {
        url = "https://www.google.com/maps?q=Bayonne&output=embed";
    }
    if (lieu === "Anglet") {
        url = "https://www.google.com/maps?q=Anglet&output=embed";
    }
    if (lieu === "Biarritz") {
        url = "https://www.google.com/maps?q=Biarritz&output=embed";
    }
    if (lieu === "Saint-Jean-de-Luz") {
        url = "https://www.google.com/maps?q=Saint-Jean-de-Luz&output=embed";
    }
    if (lieu === "Pau") {
        url = "https://www.google.com/maps?q=Pau&output=embed";
    }
    if (lieu === "Bidart") {
        url = "https://www.google.com/maps?q=Bidart&output=embed";
    }
    if (lieu === "Guethary") {
        url = "https://www.google.com/maps?q=Guethary&output=embed";
    }
    if (lieu === "Pyongyang") {
        url = "https://www.google.com/maps?q=Pyongyang&output=embed";
    }
    if (lieu === "Washington") {
        url = "https://www.google.com/maps?q=Washington&output=embed";
    }
    if (lieu === "Tokyo") {
        url = "https://www.google.com/maps?q=Tokyo&output=embed";
    }
    if (lieu === "Little Saint James") {
        url = "https://www.google.com/maps?q=Little Saint James&output=embed";
    }
    if (lieu === "Moscow") {
        url = "https://www.google.com/maps?q=Moscow&output=embed";
    }
    document.getElementById("carte").src = url;
}