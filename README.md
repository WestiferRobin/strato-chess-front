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