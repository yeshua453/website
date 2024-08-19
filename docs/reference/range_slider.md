---
sidebar_label: range_slider
title: range_slider
---

## RangeSlider Objects

```python
class RangeSlider(ConstrainedControl)
```

A Material Design range slider. Used to select a range from a range of values.
A range slider can be used to select from either a continuous or a discrete set of values.
The default is to use a continuous range of values from min to max.

**Example**:

    ```
import flet as ft


def range_slider_changed(e):
    print(f"On change! Values are ({e.control.start_value}, {e.control.end_value})")


def range_slider_started_change(e):
    print(
        f"On change start! Values are ({e.control.start_value}, {e.control.end_value})"
    )


def range_slider_ended_change(e):
    print(f"On change end! Values are ({e.control.start_value}, {e.control.end_value})")


def main(page: ft.Page):
    range_slider = ft.RangeSlider(
        min=0,
        max=50,
        start_value=10,
        divisions=10,
        end_value=20,
        inactive_color=ft.colors.GREEN_300,
        active_color=ft.colors.GREEN_700,
        overlay_color=ft.colors.GREEN_100,
        on_change=range_slider_changed,
        on_change_start=range_slider_started_change,
        on_change_end=range_slider_ended_change,
        label="{value}%",
    )

    page.add(
        ft.Column(
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
            controls=[
                ft.Text("Range slider", size=20, weight=ft.FontWeight.BOLD),
                range_slider,
            ],
        )
    )


ft.app(target=main)
    ```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/rangeslider

