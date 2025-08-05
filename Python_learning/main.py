print("Hello, World!")
# This is the main entry point of the Python learning project.
l1 = [1, 2, 3, 4, 5]
l2 = l1
l2 = [1, 2, 3, 4, 5]  # Reassign l2 to a new list
print("List l1:", l1)
print("List l2:", l2)
l1[0] = 10
print("Modified List l1:", l1)
print("List l2 after modifying l1:", l2)