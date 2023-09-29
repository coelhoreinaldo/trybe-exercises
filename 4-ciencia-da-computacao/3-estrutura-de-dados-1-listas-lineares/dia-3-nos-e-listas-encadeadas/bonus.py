from linked_list_content import LinkedList


def remove_duplicates(linkedList: LinkedList):
    list_with_unique_elements = LinkedList()

    while linkedList:
        current_node = linkedList.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements
