# strato-chess-front

## DOCKER COMMANDS
- Build: docker build -t strato-chess-front .
- Run: docker run -d -p 80:80 strato-chess-front

## TODO:
- Create game session
    - session has ID
    - session is associated with
        - Current Board
        - User Player (Ally)
        - Enemy Player
        - Pieces
            - On board
            - Removed
        - History of Moves

## Chess score
Pawn: 1 point => 8 points
Knight: 3 points => 6 points
Bishop: 3 points => 6 points
Rook: 5 points => 10 points
Queen: 9 points => 9 points
Knight: 0 points
Total Points: 39 points


