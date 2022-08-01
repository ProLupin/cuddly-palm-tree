function AAAAAAddUUUUUser(){
p1_name=document.getElementById("player1_name").value
p2_name=document.getElementById("player2_name").value
localStorage.setItem("p1e",p1_name)
localStorage.setItem("p2e",p2_name)
window.location="game_page.html"
}
