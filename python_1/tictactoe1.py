def display_board(board):
    """Displays the Tic Tac Toe board."""
    for row in board:
        print(" | ".join(row))
        print("-" * 9)

def is_winner(board, player):
    """Checks if the current player has won."""
    # Rows, columns, and diagonals
    return (
        any(all(cell == player for cell in row) for row in board) or
        any(all(board[r][c] == player for r in range(3)) for c in range(3)) or
        all(board[i][i] == player for i in range(3)) or
        all(board[i][2 - i] == player for i in range(3))
    )

def is_tie(board):
    """Checks if the board is full (tie)."""
    return all(cell != " " for row in board for cell in row)

def make_move(board, row, col, player):
    """Places the player's symbol on the board."""
    if board[row][col] == " ":
        board[row][col] = player
        return True
    return False

def tic_tac_toe_game():
    """Main Tic Tac Toe game."""
    # Initialize the game board
    board = [[" " for _ in range(3)] for _ in range(3)]
    players = ["X", "O"]
    current_player_index = 0

    print("Welcome to Tic Tac Toe!")
    display_board(board)

    while True:
        current_player = players[current_player_index]
        print(f"Player {current_player}'s turn:")
        
        try:
            row, col = map(int, input("Enter row and column (0-2): ").split())
            if not (0 <= row < 3 and 0 <= col < 3):
                print("Invalid position! Enter numbers between 0 and 2.")
                continue
            if not make_move(board, row, col, current_player):
                print("That spot is already taken! Try again.")
                continue
        except ValueError:
            print("Invalid input! Please enter two numbers separated by a space.")
            continue

        # Display updated board
        display_board(board)

        # Check for a winner or tie
        if is_winner(board, current_player):
            print(f"Congratulations, Player {current_player}! You win!")
            break
        if is_tie(board):
            print("It's a tie!")
            break

        # Switch to the other player
        current_player_index = 1 - current_player_index

if __name__ == "__main__":
    tic_tac_toe_game()
