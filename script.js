document.getElementById("convertBtn").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromtemp = document.getElementById("fromtemp").value;
    const totemp = document.getElementById("totemp").value;

    console.log(fromtemp);
    console.log(totemp);

    var camount = amount;

    if (fromtemp != totemp) {
        if (fromtemp == "CEL")
            camount = amount;
        else if (fromtemp == "FAR")
            camount = (amount - 32) * 5 / 9;
        else if (fromtemp == "KEL")
            camount = amount - 273;

        if (totemp == "CEL")
            camount = camount
        else if (totemp == "FAR")
            camount = 9 * camount / 5 + 32;
        else if (totemp == "KEL")
            camount += 273;
    }

    document.getElementById("result").textContent = `${amount} ${fromtemp} = ${camount} ${totemp}`;
});
