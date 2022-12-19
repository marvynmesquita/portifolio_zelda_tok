function trailer() {
    if (document.getElementById('trailer').classList.contains('show-trailer')) {
        document.getElementById('trailer').classList.remove('show-trailer');
    }
    else {
        document.getElementById('trailer').classList.add('show-trailer');
    }
}