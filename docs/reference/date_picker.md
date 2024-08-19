---
sidebar_label: date_picker
title: date_picker
---

## DatePicker Objects

```python
class DatePicker(Control)
```

A Material-style date picker dialog.

It is added to [`page.overlay`](page#overlay) and can be opened by setting `open=True` or by calling `Page.open()` method.

Depending on the `date_picker_entry_mode`, it will show either a Calendar or an Input (TextField) for picking a date.

**Example**:

```
import flet as ft


def main(page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def handle_date_change(e: ft.ControlEvent):
        page.add(ft.Text(f"Date changed: {e.control.value.strftime('%Y-%m-%d %H:%M %p')}"))

    cupertino_date_picker = ft.CupertinoDatePicker(
        date_picker_mode=ft.CupertinoDatePickerMode.DATE_AND_TIME,
        on_change=handle_date_change,
    )
    page.add(
        ft.CupertinoFilledButton(
            "Open CupertinoDatePicker",
            on_click=lambda e: page.open(
                ft.CupertinoBottomSheet(
                    cupertino_date_picker,
                    height=216,
                    padding=ft.padding.only(top=6),
                )
            ),
        )
    )


ft.app(main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/datepicker

