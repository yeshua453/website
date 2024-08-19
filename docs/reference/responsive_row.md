---
sidebar_label: responsive_row
title: responsive_row
---

## ResponsiveRow Objects

```python
class ResponsiveRow(ConstrainedControl, AdaptiveControl)
```

ResponsiveRow allows aligning child controls to virtual columns. By default, a virtual grid has 12 columns, but that can be customized with `ResponsiveRow.columns` property.

Similar to `expand` property, every control now has `col` property which allows specifying how many columns a control should span.

**Example**:

  
```
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.ResponsiveRow(
            [
                ft.TextField(label="TextField 1", col={"md": 4}),
                ft.TextField(label="TextField 2", col={"md": 4}),
                ft.TextField(label="TextField 3", col={"md": 4}),
            ],
            run_spacing={"xs": 10},
        ),
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/responsiverow

