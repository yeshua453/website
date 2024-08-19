---
sidebar_label: auto_complete
title: auto_complete
---

## AutoComplete Objects

```python
class AutoComplete(Control)
```

Helps the user make a selection by entering some text and choosing from among a list of displayed options.

-----

Online docs: https://flet.dev/docs/controls/autocomplete

#### selected\_index

```python
@property
def selected_index() -> Optional[int]
```

The index of the selected suggestion in the list of `suggestions`.

This property is read-only and `None` at initialization, until a suggestion is selected for the first time.

Value is of type `int`.

#### suggestions\_max\_height

```python
@property
def suggestions_max_height() -> float
```

The maximum visual height of the suggestions list.

Value is of type `float` and defaults to `200.0`.

#### suggestions

```python
@property
def suggestions() -> Optional[List[AutoCompleteSuggestion]]
```

A list of [`AutoCompleteSuggestion`](/docs/reference/types/autocompletesuggestion) controls representing the suggestions to be displayed.

**Note:**

- The internal filtration process of the suggestions (based on their `key`s) with respect to the user&#x27;s input is case-insensitive because the comparison is done in lowercase.
- A valid `AutoCompleteSuggestion` must have at least a `key` or `value` specified, else it will be ignored. If only `key` is provided, `value` will be set to `key` as fallback and vice versa.

#### on\_select

```python
@property
def on_select() -> OptionalEventCallable["AutoCompleteSelectEvent"]
```

Fires when a suggestion is selected.

Event handler is of type [`AutoCompleteSelectEvent`](/docs/reference/types/autocompleteselectevent).

