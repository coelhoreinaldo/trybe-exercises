from exercise_6 import validate_email

import pytest


def test_validate_email():
    VALID_EMAIL = "username@test.com"
    assert validate_email(VALID_EMAIL) is None


def test_validate_email_first_letter():
    INVALID_EMAIL = "1username@test.com"
    with pytest.raises(ValueError, match="letter"):
        validate_email(INVALID_EMAIL)


def test_validate_email_website():
    INVALID_EMAIL = "username@test##.com"
    with pytest.raises(ValueError, match="only letters or digits"):
        validate_email(INVALID_EMAIL)


def test_validate_email_extension_length():
    INVALID_EMAIL = "username@test.username"
    with pytest.raises(ValueError, match="length"):
        validate_email(INVALID_EMAIL)
