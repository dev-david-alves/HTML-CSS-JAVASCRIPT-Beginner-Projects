var p_list = document.getElementById("pl-ul");
var details_view = document.getElementById("details-view");
var pd_body = document.getElementById("pd-body");
var pd_header = document.getElementById("pd-header");
var initial_img = document.getElementById("initial-img");

const people = [
    {id: 0, name: "Alice Alana Almeida", image_url: "./images/img-1.jpg", street: "Bairro 1", city: "Fortaleza", state: "Ceará", country: "Brazil", telephone: "+44 (99) 888888888", birthday: "2004/01/07"},
    {id: 1, name: "Brandon Brain Brisole", image_url: "./images/img-2.jpg", street: "Bairro 2", city: "Las Vegas", state: "Among", country: "USA", telephone: "+1 (99) 999999999", birthday: "2002/06/02"},
    {id: 2, name: "Carl Caio Callebe", image_url: "./images/img-3.jpg", street: "Bairro 3", city: "Russas", state: "Alagoas", country: "Brazil", telephone: "+55 (99) 666666666", birthday: "2001/07/03"}
];

const setUpData = () => {
    people.forEach(element => {
        var li = document.createElement("li");

        li.innerHTML = "<div class='img-wrapper' id='" + element.id + "'" +
        "style='background-image: url(" + element.image_url + ");'></div>" +
                        "<button onclick='openDetails(" + element.id + ")'>" + element.name + "</button>";
        p_list.appendChild(li);

        li.onclick = () => {
            let lis = li.parentElement.children;
            for(var i = 0; i < lis.length; i++) {
                lis[i].classList.remove("active");
            }
            li.classList.add("active");
            return false;
        };
    });
}

setUpData();

const openDetails = (id) => {
    initial_img.style.display = "none";
    details_view.style.display = "block";
    let element = people[id];

    pd_body.innerHTML = "<div class='img-wrapper' id='" + element.id + "'" +
    "style='background-image: url(" + element.image_url + "); margin-bottom: 10px;'></div>" +
                        "<div class='detail'>" +
                            "<span class='d-title'>Full name: </span> <span class='d-text'>" + element.name + "</span>" +
                        "</div>" +
                        "<div class='detail'>" +
                            "<span class='d-title'>Telephone: </span> <span class='d-text'>" + element.telephone + "</span>" +
                        "</div>" +
                        "<div class='detail'>" +
                            "<span class='d-title'>Birthday: </span> <span class='d-text'>" + element.birthday + "</span>" +
                        "</div>" +
                        "<div class='detail'>" +
                                "<span class='d-title'>Country: </span> <span class='d-text'>" + element.country + "</span>" +
                        "</div>" +
                        "<div class='detail'>" +
                                "<span class='d-title'>State: </span> <span class='d-text'>" + element.state + "</span>" +
                        "</div>" +
                        "<div class='detail'>" +
                                "<span class='d-title'>City: </span><span class='d-text'>" + element.city + "</span>" +
                        "</div>" +
                        "<div class='detail'>" +
                                "<span class='d-title'>Street: </span> <span class='d-text'>" + element.street + "</span>" +
                        "</div>";
}