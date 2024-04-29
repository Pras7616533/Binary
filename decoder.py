def binary_to_string(binary_string):
    binary_values = binary_string.split()
    ascii_characters = ''.join(chr(int(binary, 2)) for binary in binary_values)
    return ascii_characters

# Example usage:
input_binary = input("Enter a binary string (separated by spaces): ")
resulting_string = binary_to_string(input_binary)
print("Resulting string:", resulting_string)
