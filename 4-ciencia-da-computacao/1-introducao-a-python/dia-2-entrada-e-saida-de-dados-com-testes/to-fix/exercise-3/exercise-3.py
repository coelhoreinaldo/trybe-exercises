recovery_students = []

with open("file.txt") as file:
    for line in file:
        person, grade = line.split(" ")
        if (int(grade)) < 6:
            recovery_students.append(line)

with open("recovery_students.txt", mode="w") as recovery_students_file:
    print(recovery_students)
    recovery_students_file.writelines(recovery_students)
