---
sidebar_label: page
title: page
---

## Page Objects

```python
class Page(AdaptiveControl)
```

Page is a container for `View` (https://flet.dev/docs/controls/view) controls.

A page instance and the root view are automatically created when a new user session started.

**Example**:

  
```
import flet as ft


def main(page: ft.Page):
    page.title = "New page"
    page.add(ft.Text("Hello"))


ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/page

