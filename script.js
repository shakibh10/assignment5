const seats = document.querySelectorAll(".seats");
const selectedSeats = [];
const seatLimit = 4;
const perSeatPrice = 550;
let motPrice = 0;
let grandTotal = 0;

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];

    seat.addEventListener("click", function () {
        if (seat.classList.contains('bg-green-500')) {
            seat.classList.remove('bg-green-500');

            const availableSeatElement = document.getElementById('available-seat');
            let availableSeat = parseInt(availableSeatElement.innerText);
            availableSeat++;
            availableSeatElement.innerText = availableSeat;


            const seatName = seat.innerText;
            const selectedIndex = selectedSeats.indexOf(seatName);
            if (selectedIndex !== -1) {
                selectedSeats.splice(selectedIndex, 1);
            }

            motPrice -= perSeatPrice;
        } else {
            if (selectedSeats.length >= seatLimit) {
                alert(`You can only select up to ${seatLimit} seats.`);
                return;
            }

            seat.classList.add('bg-green-500');

            const availableSeatElement = document.getElementById('available-seat');
            let availableSeat = parseInt(availableSeatElement.innerText);
            if (availableSeat > 0) {
                availableSeat--;
                availableSeatElement.innerText = availableSeat;

                const seatName = seat.innerText;
                selectedSeats.push(seatName);
                motPrice += perSeatPrice;

                let grandTotalElement = document.getElementById('grand-total');
                let grandTotalText = grandTotalElement.innerText.trim();
                let newGrandTotal = motPrice;
                grandTotalElement.innerText = `BDT ${newGrandTotal}`;

            }
        }


        const selectCount = document.getElementById('select-count')
        selectCount.innerText = selectedSeats.length;

        const seatTypes = seat.innerText
        const seatContainer = document.getElementById('seat')
        const p = document.createElement("p")
        p.innerText = seatTypes;
        seatContainer.appendChild(p)

        const economy = "Economy"
        const economyContainer = document.getElementById('economy')
        const p2 = document.createElement("p")
        p2.innerText = economy;
        economyContainer.appendChild(p2)

        const priceContainer = document.getElementById('price');
        const p3 = document.createElement("p");
        p3.innerText = perSeatPrice;
        priceContainer.appendChild(p3)

        const totalContainer = document.getElementById('total');
        totalContainer.innerText = `BDT ${motPrice}`;


    });
}


const btn = document.getElementById("cupon")
btn.addEventListener("click", function () {
    const inputElement = document.getElementById("inp-field").value;
    const cuponCoad = inputElement.split(" ").join("").toUpperCase();

    if (motPrice === 2200) {



        if (cuponCoad === "NEW15") {

            const discountElement = document.getElementById("grand-total");
            const discountAmount = motPrice * 0.15;
            const discountPrice = motPrice - discountAmount;
            discountElement.innerText = discountPrice;
            const cuponDiv = document.getElementById('cupon-container');
            cuponDiv.classList.add('hidden');
        }
        else if (cuponCoad === "COUPLE20") {
            const discountElement = document.getElementById("grand-total");
            const discountAmount = motPrice * 0.2;
            const discountPrice = motPrice - discountAmount;
            discountElement.innerText = discountPrice;
            const cuponDiv = document.getElementById('cupon-container');
            cuponDiv.classList.add('hidden');
        }
        else if (cuponCoad === "KHALID90") {
            const discountElement = document.getElementById("grand-total");
            const discountAmount = motPrice * 0.9;
            const discountPrice = motPrice - discountAmount;
            discountElement.innerText = discountPrice;
            const cuponDiv = document.getElementById('cupon-container');
            cuponDiv.classList.add('hidden');
        }
        else if (cuponCoad === "GOLAP99") {
            const discountElement = document.getElementById("grand-total");
            const discountAmount = motPrice * 0.99;
            const discountPrice = motPrice - discountAmount;
            discountElement.innerText = discountPrice;
            const cuponDiv = document.getElementById('cupon-container');
            cuponDiv.classList.add('hidden');
        }

        else {
            alert("Invalid Coupon")
        }
    }
    else {
        alert("Select At least 4 seat")
    }



})


const nextBtn = document.getElementById("submit-button");
const inputElement2 = document.getElementById("inp-number");

nextBtn.addEventListener("click", function () {
    const inputValue = inputElement2.value.trim();

    if (inputValue !== "") {
        const successDiv = document.getElementById("success-div");
        successDiv.classList.remove('hidden');

        const continueBtn = document.getElementById('next');
        continueBtn.addEventListener("click", function () {
            successDiv.classList.add('hidden');
        });
    }
});

inputElement2.addEventListener("input", function () {
    nextBtn.disabled = inputElement2.value.trim() === "";
});