function updateProfile() {
    document.getElementById("pname").innerText =
        document.getElementById("name").value;

    document.getElementById("prole").innerText =
        document.getElementById("role").value;

    document.getElementById("pbio").innerText =
        document.getElementById("bio").value;
}