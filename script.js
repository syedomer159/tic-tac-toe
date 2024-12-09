let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset")


let winner_container = document.querySelector(".game_winner")
let new_game_btn = document.querySelector(".new_game_btn")

let winner_msg = document.querySelector(".winner_msg")




console.log("hello everyone")


let turnO = true;




const winnerpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],


]










boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked")
        if (turnO) {
            box.innerText = "0";
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = "true";

        checkwinner(); //checking the winner 

    }

    )
})







const enable_boxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}


const disable_boxes = () => {
    for (let box of boxes) {
        box.disabled = true;
        
    }
}



const show_winner = (winner) => {
    winner_msg.innerText = ` "${winner}" is the Winner`
    winner_container.classList.remove("hide")
    disable_boxes();

}






const checkwinner = () => {

    for (let pattern of winnerpattern) {
        // console.log(pattern)
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText



        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                show_winner(pos1);
            



                // for(let box of boxes){
                //     box.disabled="true";
                // }  

                // disabling the boxes direct way



            }
            




        }

        // console.log(boxes[pattern[0]]);
        // console.log(boxes[pattern[1]]);
        // console.log(boxes[pattern[2]]);
    }

}





const reset_game = () => {
    turnO = true;
    enable_boxes();
    winner_container.classList.add("hide")

}

new_game_btn.addEventListener("click", reset_game)
reset.addEventListener("click", reset_game)









// boxes.forEach((box)=>{
//     box.addEventListener("click", ()=> {
//         console.log("box was clicked");
//         if()

//     });
// });









// else{
//     winner_msg.innerText = ` the Game is draw `
// winner_container.classList.remove("hide")
// }







