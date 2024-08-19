---
sidebar_label: progress_bar
title: progress_bar
---

## ProgressBar Objects

```python
class ProgressBar(ConstrainedControl)
```

A material design linear progress indicator, also known as a progress bar.

A control that shows progress along a line.

**Example**:

  
```
from time import sleep

import flet as ft

def main(page: ft.Page):
    pb = ft.ProgressBar(width=400)

    page.add(
        ft.Text("Linear progress indicator", style="headlineSmall"),
        ft.Column([ ft.Text("Doing something..."), pb]),
        ft.Text("Indeterminate progress bar", style="headlineSmall"),
        ft.ProgressBar(width=400, color="amber", bgcolor="`eeeeee`"),
    )

    for i in range(0, 101):
        pb.value = i * 0.01
        sleep(0.1)
        page.update()

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/progressbar

