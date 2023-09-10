from exercise_6 import validate_email


def test_validate_email():
    VALID_EMAIL = "username@test.com"
    assert validate_email(VALID_EMAIL) is True


def test_validate_email_first_letter():
    INVALID_EMAIL = "1username@test.com"
    assert validate_email(INVALID_EMAIL) is False


def test_validate_email_website():
    INVALID_EMAIL = "username@test##.com"
    assert validate_email(INVALID_EMAIL) is False


def test_validate_email_extension_length():
    INVALID_EMAIL = "username@test.username"
    assert validate_email(INVALID_EMAIL) is False
