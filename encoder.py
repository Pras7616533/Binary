def string_to_binary(string):
    binary_string = ' '.join(format(ord(char), '08b') for char in string)
    return binary_string

# Example usage:
input_string = input("Enter a string: ")
binary_representation = string_to_binary(input_string)
print("Binary representation:", binary_representation)
