---
sidebar_label: cupertino_checkbox
title: cupertino_checkbox
---

## CupertinoCheckbox Objects

```python
class CupertinoCheckbox(ConstrainedControl)
```

A macOS style checkbox. Checkbox allows to select one or more items from a group, or switch between two mutually exclusive options (checked or unchecked, on or off).

**Example**:

```
import flet as ft

def main(page):
    c = ft.CupertinoCheckbox(
        label="Cupertino Checkbox",
        active_color=ft.colors.GREEN,
        inactive_color=ft.colors.RED,
        check_color=ft.colors.BLUE,
    ),
    page.add(c)

ft.app(target=main)
```
  
  -----
  Online docs: https://flet.dev/docs/controls/cupertinocheckbox

