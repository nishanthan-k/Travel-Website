document.getElementById('logo-text').textContent = 'TRAVEL TOMB';

document.getElementById('unique-quote-text').innerText = 'Best of travel places for you from us'

document.getElementById('company-quote-text').innerText = 'Explore The Beauty of Greece'

document.getElementsByClassName("explore-btn").innerHtml = 'Explore Now Explore Now'

document.getElementById('about-us-text').textContent =
    `"Embark on your dream journey with our expert Travel Assist Company. We curate seamless itineraries, ensuring every moment is a cherished memory. From flights to accommodations, and local insights to hidden gems, we've got you covered. Let's turn your wanderlust into a remarkable adventure!"`

document.getElementById('hotel-text-1').textContent = 'Best of greek rooms and suites for you'

document.getElementById('hotel-text-2').textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero dolorum, totam cumque minima magni explicabo facilis.'



let restaurantText = document.createElement('div');
restaurantText.id = 'restaurant-div';

var h1 = document.createElement('h1');
h1.textContent = 'Best Foods from all of Greece cuisines at one place and much more';
restaurantText.appendChild(h1);

var p = document.createElement('p');
p.textContent = "Enjoy a variety of Greek specialties, from moussaka to souvlaki, all prepared with the freshest ingredients. Indulge in delectable desserts like baklava and loukoumades, a sweet end to your culinary journey.";
restaurantText.appendChild(p);

var exploreDiv = document.createElement('div');
exploreDiv.id = 'explore-restaurant-btn';
exploreDiv.innerHTML = 'Explore More Restaurants';
restaurantText.appendChild(exploreDiv);

document.querySelector('.restaurant').setAttribute("data-aos", "fade-up");
document.querySelector('.restaurant').setAttribute("data-aos-duration", "1200")

document.querySelector('.restaurant').innerHTML += restaurantText.outerHTML;



var h1 = document.createElement('h1');
h1.textContent = 'Some Premium Rooms That We Provide';

document.querySelector('.premium-room-text').appendChild(h1);

var p = document.createElement('p');
p.textContent = 'Experience the epitome of luxury and comfort in our exquisite premium rooms';

document.querySelector('.premium-room-text').appendChild(p);


function premiumRooms() {

    const text = [];
    text.push('Our premium rooms offer exclusive access to private balconies, providing guests with stunning, unobstructed views of the picturesque surroundings.');
    text.push('Experience unparalleled comfort with premium amenities such as high-end toiletries, complimentary minibar, and dedicated concierge service, ensuring a truly indulgent stay.');
    text.push('Our premium rooms offer an expansive living space with carefully designed interiors, ensuring you have room to relax and unwind in style.');
    text.push('Enjoy stunning panoramic views from your premium room, allowing you to take in the beauty of the surrounding landscape from the comfort of your own luxurious retreat.');

    let i = 0;
    while (i < 3) {
        let div = document.createElement('div');
        div.id = 'premium-room-elements';

        let h1 = document.createElement('h1');
        h1.textContent = 'Premium Lake Side Room'
        div.appendChild(h1);

        let h2 = document.createElement('h1');
        h2.textContent = '$300'
        div.appendChild(h2);

        let p = document.createElement('p');
        p.textContent = 'Our premium rooms offer exclusive access to private balconies, providing guests with stunning, unobstructed views of the picturesque surroundings.'
        div.appendChild(p);

        let btn = document.createElement('div');
        btn.id = 'explore-premium-btn';
        btn.textContent = 'Explore More Options';
        div.appendChild(btn);

        div.setAttribute("data-aos", "fade-up");
        div.setAttribute("data-aos-duration", "1200")

        document.querySelector('#premium-room-details').appendChild(div);
        i++;
    }
}


function createBookingForm() {
    let div1 = document.createElement('div');
    div1.id = 'booking-form-details'

    let p1 = document.createElement('p');
    p1.innerText = 'Check In Date';

    let input1 = document.createElement('input')
    input1.setAttribute('type', 'date');
    input1.setAttribute('id', 'check-in');

    div1.appendChild(p1);
    div1.appendChild(input1);

    let div2 = document.createElement('div');
    div2.id = 'booking-form-details'
    let p2 = document.createElement('p');
    p2.innerText = 'Check Out Date';

    let input2 = document.createElement('input')
    input2.setAttribute('type', 'date');
    input2.setAttribute('id', 'check-out');

    div2.appendChild(p2);
    div2.appendChild(input2);

    let div3 = document.createElement('div');
    div3.id = 'booking-form-details'
    let p3 = document.createElement('p');
    p3.innerText = 'No of Adults';

    let input3 = document.createElement('input')
    input3.setAttribute('type', 'number');
    input3.setAttribute('id', 'adults-count');
    input3.placeholder = '0';

    div3.appendChild(p3);
    div3.appendChild(input3);

    let div4 = document.createElement('div');
    div4.id = 'booking-form-details'
    let p4 = document.createElement('p');
    p4.innerText = 'No of Children';

    let input4 = document.createElement('input')
    input4.setAttribute('type', 'number');
    input4.setAttribute('id', 'children-count');
    input4.placeholder = '0';


    div4.appendChild(p4);
    div4.appendChild(input4);

    let div5 = document.createElement('button');
    div5.id = 'book-now-btn'
    div5.innerText = 'Book Now'

    let div = document.querySelector('.booking-form');
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    div.appendChild(div5);
}


function addRoomDetails() {

    let text = [];
    text.push("Spacious room with a beautiful view of the city. Amenities include a comfortable bed and a private bathroom.")
    text.push("Elegant room with a cozy atmosphere. Enjoy a restful night's sleep and wake up refreshed. Modern amenities provided.")
    text.push("Charming room with rustic decor. Experience tranquility and comfort in this well-appointed space. Ensuite facilities available.")
    text.push("Luxurious room with plush furnishings. Indulge in a relaxing stay and take advantage of the premium amenities provided.")
    text.push("Contemporary room with sleek design. Stay connected with high-speed internet and unwind in style. Private facilities included.")
    text.push("Retro-inspired room with a touch of nostalgia. Experience a blend of comfort and vintage charm. Enjoy a unique stay.")

    let roomName = [];
    roomName.push('Deluxe Villa');
    roomName.push('Shared Hotel');
    roomName.push('Lake Side Villa');
    roomName.push('Private Villa');
    roomName.push('Couple Villa');
    roomName.push('Single Bed Room');

    let i = 0;
    while (i < 6) {
        let div = document.getElementsByClassName('room-details')[0];
        let room = enterRoomDetails(`./images/room${i + 1}.jpg`, roomName[i], 500, text[i])
        div.appendChild(room);
        i++;
    }
}

function enterRoomDetails(roomImage, roomName, roomBill, roomText) {
    let room = document.createElement('div');
    let roomDetails = document.createElement('div');
    room.id = 'room'
    room.style.backgroundColor = 'whitesmoke';
    room.style.width = '400px';


    let roomImgDiv = document.createElement('div');
    roomImgDiv.id = 'roomImgDiv'
    let roomImg = document.createElement('img');
    roomImg.id = 'roomImg'
    roomImg.src = roomImage;
    roomImg.width = '400';
    roomImg.height = '300';
    roomImgDiv.appendChild(roomImg);
    room.appendChild(roomImgDiv);


    let h1 = document.createElement('h1');
    h1.textContent = roomName;
    roomDetails.appendChild(h1);

    let bill = document.createElement('h3');
    bill.textContent = `${roomBill} / Night`
    roomDetails.appendChild(bill);

    let p = document.createElement('p');
    p.textContent = roomText;
    roomDetails.appendChild(p);

    let btn = document.createElement('button');
    btn.textContent = 'Know More';
    btn.id = 'know-more-btn'
    roomDetails.appendChild(btn);

    room.appendChild(roomDetails);
    roomDetails.style.padding = '10px';
    roomDetails.style.display = 'grid'
    roomDetails.style.rowGap = '5px'

    room.setAttribute("data-aos", "fade-up");
    room.setAttribute("data-aos-duration", "1200")

    return room;
}


function subscribeNewsletter() {
    let div = document.getElementsByClassName('subscribe-details');

    let div1 = document.getElementById('company-quotes');
    let logo = document.createElement('div');
    logo.id = 'company-logo';
    logo.className = 'logo';
    logo.textContent = 'Travel Tomb'
    div1.appendChild(logo);

    let p = document.createElement('p');
    p.textContent = 'Embark on your dream journey with our expert Travel Assist Company. We curate seamless itineraries, ensuring every moment is a cherished memory.'
    div1.appendChild(p);

    // div.appendChild(div1);

    let div2 = document.getElementById('subscribe');


    let h1 = document.createElement('h1');
    h1.textContent = 'Subscribe To Newsletter';
    div2.appendChild(h1);

    let innerDivs = document.createElement('div');
    innerDivs.id = 'subscribe-email-btn'

    let emailInput = document.createElement('div');
    emailInput.id = 'email-input';
    // emailInput.type = 'email';
    emailInput.textContent = 'Enter your email';
    innerDivs.appendChild(emailInput);

    let subscribeBtn = document.createElement('div');
    subscribeBtn.textContent = 'Subscribe';
    subscribeBtn.id = 'subscribe-btn'
    innerDivs.appendChild(subscribeBtn);

    div2.appendChild(innerDivs);
}

function addGalleryImages() {
    let i = 0;
    while (i < 6) {
        let div = document.createElement('div');
        div.id = 'gallery-img-div';
        let img = document.createElement('img');
        img.src = `./images/gallery${i+1}.jpg`;
        img.height = 300;
        img.style.opacity = 0.5;
        img.setAttribute("data-aos", "fade-up");
        img.setAttribute("data-aos-duration", "1200")

        div.appendChild(img);

        document.querySelector('.gallery-img').appendChild(div);
        i++;
    }
}