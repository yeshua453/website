---
sidebar_label: dropdown
title: dropdown
---

## Dropdown Objects

```python
class Dropdown(FormFieldControl)
```

A dropdown lets the user select from a number of items. The dropdown shows the currently selected item as well as an arrow that opens a menu for selecting another item.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    def button_clicked(e):
        t.value = f"Dropdown value is:  {dd.value}"
        page.update()

    t = ft.Text()
    b = ft.ElevatedButton(text="Submit", on_click=button_clicked)
    dd = ft.Dropdown(
        width=200,
        options=[
            ft.dropdown.Option("Red"),
            ft.dropdown.Option("Green"),
            ft.dropdown.Option("Blue"),
        ],
    )
    page.add(dd, b, t)

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/dropdown

