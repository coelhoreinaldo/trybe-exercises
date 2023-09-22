from random import shuffle


def shuffle_cards(cards):
    mid_index = len(cards) // 2
    left_cards_shuffled = cards[:mid_index]
    shuffle(left_cards_shuffled)
    right_cards_shuffled = cards[mid_index:]
    shuffle(right_cards_shuffled)

    return right_cards_shuffled + left_cards_shuffled


cartas = [1, 4, 4, 7, 6, 6]
print(shuffle_cards(cartas))

cartas = [2, 6, 4, 5]
print(shuffle_cards(cartas))
