class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let rIdx = 0; rIdx < 9; rIdx++) {
            const rSeen = new Map()
            for (let cIdx = 0; cIdx < 9; cIdx++) {
                if (board[rIdx][cIdx] === '.') continue
                if (rSeen.has(board[rIdx][cIdx])) return false
                rSeen.set(board[rIdx][cIdx])
            }
        }

        for (let cIdx = 0; cIdx < 9; cIdx++) {
            const cSeen = new Map()
            for (let rIdx = 0; rIdx < 9; rIdx++) {
                if (board[rIdx][cIdx] === '.') continue
                if (cSeen.has(board[rIdx][cIdx])) return false
                cSeen.set(board[rIdx][cIdx])
            }
        }

        for (let bIdx = 0; bIdx < 9; bIdx++) {
            const squareSeen = new Map()
            for (let rIdx = 0; rIdx < 3; rIdx++) {
                for (let cIdx = 0; cIdx < 3; cIdx++) {
                    const row = Math.floor(bIdx / 3) * 3 + rIdx
                    const col = (bIdx % 3) * 3 + cIdx
                    if (board[row][col] === '.') continue
                    if (squareSeen.has(board[row][col])) return false
                    squareSeen.set(board[row][col])
                }
            }
        }

        return true
    }
}
