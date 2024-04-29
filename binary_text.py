def text_to_binary(text):
    binary_result = ""
    for char in text:
        binary_char = bin(ord(char))[2:].zfill(8)  # Convert character to ASCII, then to binary (8 bits)
        binary_result += binary_char + " "  # Add space between binary characters
    return binary_result.strip()  # Remove trailing space

def binary_to_text(binary):
    text_result = ""
    binary_list = binary.split()
    for binary_char in binary_list:
        decimal_value = int(binary_char, 2)  # Convert binary to decimal
        text_result += chr(decimal_value)  # Convert ASCII code to character
    return text_result

if __name__ == "__main__":
    if input("choose (0) binary and (1) string") == 1:
        text_input = input("Enter a string")
        binary_output = text_to_binary(text_input)
        print("Text to Binary:", binary_output)
    else:
        binary_input = input("Enter binary string ")
        text_output = binary_to_text(binary_input)
        print("Binary to Text:", text_output)
