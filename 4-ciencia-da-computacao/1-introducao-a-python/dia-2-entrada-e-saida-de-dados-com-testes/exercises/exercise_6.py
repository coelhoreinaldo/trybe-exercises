def validate_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError("Username should start with a letter")

    while email[index] != "@":
        letter = email[index]
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and not letter.isnumeric()
        ):
            raise ValueError(
                "Username should contain only letters, numbers or characters"
            )
        index += 1

    website = email.split("@")[1].split(".")[0]

    for letter in website:
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("Website should contain only letters or digits")

    extension = email.split("@")[1].split(".")[1]
    if (len(extension)) > 3:
        raise ValueError("Extension should contain max 3 characteres")


user_email = input("Qual seu email?")

validate_email(user_email)
