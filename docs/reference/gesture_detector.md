---
sidebar_label: gesture_detector
title: gesture_detector
---

## GestureDetector Objects

```python
class GestureDetector(ConstrainedControl, AdaptiveControl)
```

A control that detects gestures.

Attempts to recognize gestures that correspond to its non-null callbacks.

If this control has a content, it defers to that child control for its sizing behavior. If it does not have a content, it grows to fit the parent instead.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    def on_pan_update1(e: ft.DragUpdateEvent):
        c.top = max(0, c.top + e.delta_y)
        c.left = max(0, c.left + e.delta_x)
        c.update()

    def on_pan_update2(e: ft.DragUpdateEvent):
        e.control.top = max(0, e.control.top + e.delta_y)
        e.control.left = max(0, e.control.left + e.delta_x)
        e.control.update()

    gd = ft.GestureDetector(
        mouse_cursor=ft.MouseCursor.MOVE,
        drag_interval=50,
        on_pan_update=on_pan_update1,
    )

    c = ft.Container(gd, bgcolor=ft.colors.AMBER, width=50, height=50, left=0, top=0)

    gd1 = ft.GestureDetector(
        mouse_cursor=ft.MouseCursor.MOVE,
        drag_interval=10,
        on_vertical_drag_update=on_pan_update2,
        left=100,
        top=100,
        content=ft.Container(bgcolor=ft.colors.BLUE, width=50, height=50),
    )

    page.add( ft.Stack([c, gd1], width=1000, height=500))

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/gesturedetector

