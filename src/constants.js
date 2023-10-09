
export const STRATO_CHESS_BACKEND = "http://localhost:5154";

// Pieces
export const PIECE_WIDTH = 45;
export const PIECE_HEIGHT = 50;

export const PAWN_TAG = "PAWN";
export const PAWN_COUNT = 8;
export const PAWN_POINT = 1;

export const BISHOP_TAG = "BISHOP";
export const BISHOP_COUNT = 2;
export const BISHOP_POINT = 3;

export const KNIGHT_TAG = "KNIGHT";
export const KNIGHT_COUNT = 2;
export const KNIGHT_POINT = 3;

export const ROOK_TAG = "ROOK";
export const ROOK_COUNT = 2;
export const ROOK_POINT = 5;

export const QUEEN_TAG = "QUEEN";
export const QUEEN_COUNT = 1;
export const QUEEN_POINT = 9;

export const KING_TAG = "KING";
export const KING_COUNT = 1;
export const KING_POINT = 0;

export const DEFAULT_SET = {
    PAWN_TAG: {
        count: PAWN_COUNT,
        value: PAWN_POINT
    },
    BISHOP_TAG: {
        count: BISHOP_COUNT,
        value: BISHOP_POINT
    },
    KNIGHT_TAG: {
        count: KNIGHT_COUNT,
        value: KNIGHT_POINT
    },
    ROOK_TAG: {
        count: ROOK_COUNT,
        value: ROOK_POINT
    },
    QUEEN_TAG: {
        count: QUEEN_COUNT,
        value: QUEEN_POINT
    },
    KING_TAG: {
        count: KING_COUNT,
        value: KING_POINT
    },
}

export const MAX_POINTS = Object.values(DEFAULT_SET).reduce((totalPoints, piece) => {
  return totalPoints + piece.count * piece.value;
}, 0);

