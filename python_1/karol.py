def displayMenu():
print




def addNumbers( firtsNumber, secondNumber):
    sum = firtsNumber + secondNumber
    print( "The sum of" + firtsNumber + "and" + secondNumber + "is" + sum )

def subtractNumbers( firtsNumber, secondNumber):
    subtract = firtsNumber - secondNumber
    print( "The difference of" + firtsNumber + "and" + secondNumber + "is" + difference )

def multiplyNumbers( firtsNumber, secondNumber):
    product = firtsNumber * secondNumber
    print( "The product of" + firtsNumber + "and" + secondNumber + "is" + product)

def divideNumbers( firtsNumber, secondNumber):
    quotient = firtsNumber / secondNumber
    print( "The quotient of" + firtsNumber + "and" + secondNumber + "is" + quotient)

def main(): #this is the main program
    allFeatures = [ "addition", "subtraction", "division", "multiplication"]

    #1. Let's display the menu to the user
    # displayMenu()
    userOption = int ( input( "Please select an option") )
    
    if userOption == 1:
        addNumbers(userFirstNumber, userSecondNumber)
    elif userOption == 2:
        subtractNumbers(userFirstNumber, userSecondNumber)
    elif userOption == 3:
        multiplyNumbers(userFirstNumber, userSecondNumber)
    elif userOption == 4:
        divideNumbers(userFirstNumber, userSecondNumber)