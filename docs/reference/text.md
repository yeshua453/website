---
sidebar_label: text
title: text
---

## Text Objects

```python
class Text(ConstrainedControl)
```

Text is a control for displaying text.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.title = "Text examples"

    page.add(
        ft.Text("Size 10", size=10),
        ft.Text("Size 30, Italic", size=20, color="pink600", italic=True),
        ft.Text("Limit long text to 2 lines and fading", style=ft.TextThemeStyle.HEADLINE_SMALL),
        ft.Text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nibh vitae purus consectetur facilisis sed vitae ipsum. Quisque faucibus sed nulla placerat sagittis. Phasellus condimentum risus vitae nulla vestibulum auctor. Curabitur scelerisque, nibh eget imperdiet consequat, odio ante tempus diam, sed volutpat nisl erat eget turpis. Sed viverra, diam sit amet blandit vulputate, mi tellus dapibus lorem, vitae vehicula diam mauris placerat diam. Morbi sit amet pretium turpis, et consequat ligula. Nulla velit sem, suscipit sit amet dictum non, tincidunt sed nulla. Aenean pellentesque odio porttitor sagittis aliquam. Nam varius at metus vitae vulputate. Praesent faucibus nibh lorem, eu pretium dolor dictum nec. Phasellus eget dui laoreet, viverra magna vitae, pellentesque diam.",
            max_lines=2,
        ),
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/text

