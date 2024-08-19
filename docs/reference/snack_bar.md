---
sidebar_label: snack_bar
title: snack_bar
---

## SnackBar Objects

```python
class SnackBar(Control)
```

A lightweight message with an optional action which briefly displays at the bottom of the screen.

**Example**:

```
import flet as ft

class Data:
    def __init__(self) -> None:
        self.counter = 0

d = Data()

def main(page):

    page.snack_bar = ft.SnackBar(
        content=ft.Text("Hello, world!"),
        action="Alright!",
    )
    page.snack_bar.open = True

    def on_click(e):
        page.snack_bar = ft.SnackBar(ft.Text(f"Hello {d.counter}"))
        page.snack_bar.open = True
        d.counter += 1
        page.update()

    page.add(ft.ElevatedButton("Open SnackBar", on_click=on_click))

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/snackbar

