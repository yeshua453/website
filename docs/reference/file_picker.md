---
sidebar_label: file_picker
title: file_picker
---

## FilePicker Objects

```python
class FilePicker(Control)
```

A control that allows you to use the native file explorer to pick single or multiple files, with extensions filtering support and upload.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    def pick_files_result(e: ft.FilePickerResultEvent):
        selected_files.value = (
            ", ".join(map(lambda f: f.name, e.files)) if e.files else "Cancelled!"
        )
        selected_files.update()

    pick_files_dialog = ft.FilePicker(on_result=pick_files_result)
    selected_files = ft.Text()

    page.overlay.append(pick_files_dialog)

    page.add(
        ft.Row(
            [
                ft.ElevatedButton(
                    "Pick files",
                    icon=ft.icons.UPLOAD_FILE,
                    on_click=lambda _: pick_files_dialog.pick_files(
                        allow_multiple=True
                    ),
                ),
                selected_files,
            ]
        )
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/filepicker

