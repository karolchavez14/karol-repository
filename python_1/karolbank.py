#information about karol
name = "karol"
nickname = "nicole"
age = 16
bank_balance = 0.03 #Balance in dollars.

#Display the information
def display_info():
    print("User Information:")
    print(f"Name: {name}")
    print(f"Nickname: {nickname}")
    print(f"age: {age}")
    print(f"Bank Account Balance: ${bank_balance:.2f}")

if bank_balance < 20:
    print("You are poor!!")

elif bank_balance > 10:
    print("you are not pobre, you ate")

#this is the actualitation of the program :)
display_info()