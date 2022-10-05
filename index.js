const cells = document.querySelectorAll('.cell')
const p1ScoreText = document.querySelector('.p1Score')
const p2ScoreText = document.querySelector('.p2Score')
const restartBtn = document.querySelector('.restart')



const winCombination = [
  [0, 1, 2],
  [0, 3, 6],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [3, 4, 5],
  [0, 4, 8],
  [2, 4, 6]
]

let player1 = []
let player2 = []

let score = {
  player1: 0,
  player2: 0
}

function updateScore() {
  p1ScoreText.innerText = `Player 1 score: ${score.player1}`
  p2ScoreText.innerText = `Player 2 score: ${score.player2}`
}

updateScore()

let flag = true


for (let i=0; i<cells.length; i++) {
  cells[i].addEventListener('click', () => {
    if (flag) {
      addCellPlayer1(i)
    } else {
      addCellPlayer2(i)
    }
    setTimeout(() => {
      checkWin()
    }, 300)
  })
}

function addCellPlayer1(i) {
  cells[i].innerText = 'X'
  player1.push(i)
  flag = false
}

function addCellPlayer2(i) {
  cells[i].innerText = 'O'
  player2.push(i)
  flag = true
}


function checkWin() {
  winCombination.forEach(e => {
    if (player1.filter(el => e.includes(el)).length === 3) {
      score.player1 += 1
      updateScore()
      alert('Player 1 won!')
      clearData()
    } else if (player2.filter(el => e.includes(el)).length === 3) {
      score.player2 += 1
      updateScore()
      alert('Player 2 won!')
      clearData()
    }
    return
  })
}


a = [1, 2, 3]
b = [1, 2, 3, 4]

restartBtn.addEventListener('click', () => {
  cells.forEach(e => e.innerText = '')
  player1 = []
  player2 = []
  score.player1 = 0
  score.player2 = 0
  updateScore()
  flag = true
})

function clearData() {
  player1 = []
  player2 = []
  cells.forEach(e => e.innerText = '')
  flag = true
}

