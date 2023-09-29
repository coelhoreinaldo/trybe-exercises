from linked_list_content import LinkedList


def remove_duplicates(linkedList: LinkedList):
    list_with_unique_elements = LinkedList()

    while linkedList:
        current_node = linkedList.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


list_with_duplicate_elements = LinkedList()
list_with_duplicate_elements.insert_first(1)
list_with_duplicate_elements.insert_first(1)
list_with_duplicate_elements.insert_first(2)
list_with_duplicate_elements.insert_first(3)
list_with_duplicate_elements.insert_first(4)
list_with_duplicate_elements.insert_first(4)
list_with_duplicate_elements.insert_first(3)

print(list_with_duplicate_elements)
print(remove_duplicates(list_with_duplicate_elements))
