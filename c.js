let selectedPiece = null; // Stores the currently selected piece
let pawnMovedTwoSquares = {};
let counter = 1 ;//counts how many times a piece was moved
// when counter is odd (white's turn) and verse visa


//Start of function methods           
    
// Function to handle piece click events
function handlePieceClick(event) {
    const clickedSquare = event.currentTarget;
    
    
    // If no piece is selected, select the clicked piece
    if (!selectedPiece) {
        
        
        if ( (clickedSquare.firstChild.classList[1]=="white-piece" && counter%2 ==1) || (clickedSquare.firstChild.classList[1]=="black-piece" && counter%2 ==0)) {
            selectedPiece = clickedSquare;
            selectedPiece.classList.add('selected');
            highlightSelectedPiece(selectedPiece);
            console.log(counter)
            //console.log(selectedPiece.innerHTML)
            
        }
        
        
       
    } else {
        // If a piece is already selected, try to move it to the clicked square
        if (isValidMove(selectedPiece, clickedSquare)) {
            // Move the peice to the new square
            clickedSquare.innerHTML = selectedPiece.innerHTML;
            selectedPiece.innerHTML = '';
             counter++
            // Claer the selection
            selectedPiece.classList.remove('selected');
         unhighlightSelectedPiece(selectedPiece); 
            selectedPiece = null;
         
        } else {
            //for Invalid move, clear the selection
            selectedPiece.classList.remove('selected');
            selectedPiece = null;

         console.log("logic 3")
        }
    }
}

// Function to check if a move is valid
function isValidMove(startSquare, endSquare) {
    // Implement logic spacee
    //currently allow all any move


    







    
    return true;
}

function highlightSelectedPiece(selectedPiece) {
    selectedPiece.style.backgroundColor="lightgray";
}
function unhighlightSelectedPiece(selectedPiece) {
    selectedPiece.style.backgroundColor="";
}
    // Function to create a chessbaord
    function createChessboard() {
        const chessboard = document.querySelector('.chessboard');
        

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement('div');
                square.classList.add('square');

                // Assin classes for white and black squares
                if ((row + col) % 2 === 0) {
                    square.classList.add('white');
                } else {
                    square.classList.add('black');
                }

                //Add the square to the chessboard
                chessboard.appendChild(square);

                // Add chess pieces to initil positions
                if (row === 0) {
                    if (col === 0 || col === 7) {
                        // Add black rooks
                        const blackRook = document.createElement('img');
                        blackRook.src = 'ChessPieces/black/black_rook.png'; 
                        blackRook.classList.add('chess-piece');
                        blackRook.classList.add('black-piece');
                        square.appendChild(blackRook);
                    } else if (col === 1 || col === 6) {
                        // Add black knight
                        const blackKnight = document.createElement('img');
                        blackKnight.src = 'ChessPieces/black/black_knight.png';
                        blackKnight.classList.add('chess-piece');
                        square.appendChild(blackKnight);
                        blackKnight.classList.add('black-piece');
                    } else if (col === 2 || col === 5) {
                        //Add black bishop
                        const blackBishop = document.createElement('img');
                        blackBishop.src = 'ChessPieces/black/black_bishop.png';
                        blackBishop.classList.add('chess-piece');
                        square.appendChild(blackBishop);
                        blackBishop.classList.add('black-piece');
                    } else if (col === 3) {
                        //Add black queen
                        const blackQueen = document.createElement('img');
                        blackQueen.src = 'ChessPieces/black/black_queen.png'; 
                        blackQueen.classList.add('chess-piece');
                        square.appendChild(blackQueen);
                        blackQueen.classList.add('black-piece');
                    } else if (col === 4) {
                        //add black king
                        const blackKing = document.createElement('img');
                        blackKing.src = 'ChessPieces/black/black_king.png'; 
                        blackKing.classList.add('chess-piece');
                        square.appendChild(blackKing);
                        blackKing.classList.add('black-piece');
                    }
                } else if (row === 1) {
                    // Add black  pawns
                    const blackPawn = document.createElement('img');
                    blackPawn.src = 'ChessPieces/black/black_pawn.png'; 
                    blackPawn.classList.add('chess-piece');
                    square.appendChild(blackPawn);
                    blackPawn.classList.add('black-piece');
                } else if (row === 6) {
                    // Add white pawns
                    const whitePawn = document.createElement('img');
                    whitePawn.src = 'ChessPieces/white/white_pawn.png'; 
                    whitePawn.classList.add('chess-piece');
                    square.appendChild(whitePawn);
                    whitePawn.classList.add('white-piece');
                } else if (row === 7) {
                    if (col === 0 || col === 7) {
                        // Add white rooks
                        const whiteRook = document.createElement('img');
                        whiteRook.src = 'ChessPieces/white/white_rook.png'; 
                        whiteRook.classList.add('chess-piece');
                        square.appendChild(whiteRook);
                        whiteRook.classList.add('white-piece');
                    } else if (col === 1 || col === 6) {
                        // Add white knights
                        const whiteKnight = document.createElement('img');
                        whiteKnight.src = 'ChessPieces/white/white_knight.png';
                        whiteKnight.classList.add('chess-piece');
                        square.appendChild(whiteKnight);
                        whiteKnight.classList.add('white-piece');
                    } else if (col === 2 || col === 5) {
                        
                        const whiteBishop = document.createElement('img');
                        whiteBishop.src = 'ChessPieces/white/white_bishop.png'; 
                        whiteBishop.classList.add('chess-piece');
                        square.appendChild(whiteBishop);
                        whiteBishop.classList.add('white-piece');
                    } else if (col === 3) {
                        
                        const whiteQueen = document.createElement('img');
                        whiteQueen.src = 'ChessPieces/white/white_queen.png'; 
                        whiteQueen.classList.add('chess-piece');
                        square.appendChild(whiteQueen);
                        whiteQueen.classList.add('white-piece');
                    } else if (col === 4) {
                        
                        const whiteKing = document.createElement('img');
                        whiteKing.src = 'ChessPieces/white/white_king.png'; 
                        whiteKing.classList.add('chess-piece');
                        square.appendChild(whiteKing);
                        whiteKing.classList.add('white-piece');
                    }
                }
             
        }
             
            }




        

        // function pawnMoves(startSquare,endSquare,selectedPiece) {
        //     let movePiece =identifyPiece(selectedPiece);
        //     if (movePiece == "pawn" ) {
        //         //moves for pawns
                
        //     }
            
            
        // }
        // function identifyPiece(selectedPiece) {
        //     let name = selectedPiece.innerHTML;
            

            
        //     return "pawn";
        // }

/////End of functions and Methods






















        
const chessPieces = document.querySelectorAll('.square');//chess-squares
            chessPieces.forEach(piece => {
                piece.addEventListener("click", handlePieceClick);
            });

    }

//eventManager();
createChessboard();


