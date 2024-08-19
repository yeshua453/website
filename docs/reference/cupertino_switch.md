---
sidebar_label: cupertino_switch
title: cupertino_switch
---

## CupertinoSwitch Objects

```python
class CupertinoSwitch(ConstrainedControl)
```

An iOS-style switch. Used to toggle the on/off state of a single setting.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.CupertinoSwitch(label="Cupertino Switch", value=True),
        ft.Switch(label="Material Checkbox", value=True),
        ft.Container(height=20),
        ft.Text(
            "Adaptive Switch shows as CupertinoSwitch on macOS and iOS and as Switch on other platforms:"
        ),
        ft.Switch(adaptive=True, label="Adaptive Switch", value=True),
    )

ft.app(target=main)
```
  -----
  
  Online docs: https://flet.dev/docs/controls/cupertinoswitch

