from exercise_6 import valid_email


def test_valid_email():
    VALID_EMAIL = "username@test.com"
    assert valid_email(VALID_EMAIL) is True


def test_valid_email_first_letter():
    INVALID_EMAIL = "1username@test.com"
    assert valid_email(INVALID_EMAIL) is False


def test_valid_email_website():
    INVALID_EMAIL = "username@test##.com"
    assert valid_email(INVALID_EMAIL) is False


def test_valid_email_extension_length():
    INVALID_EMAIL = "username@test.username"
    assert valid_email(INVALID_EMAIL) is False
