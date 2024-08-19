---
sidebar_label: divider
title: divider
---

## Divider Objects

```python
class Divider(Control)
```

A thin horizontal line, with padding on either side.
In the material design language, this represents a divider.

__Examples__

```python
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Column(
            [
                ft.Container(
                    bgcolor=ft.colors.AMBER,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                ft.Divider(),
                ft.Container(
                    bgcolor=ft.colors.PINK, alignment=ft.alignment.center, expand=True
                ),
            ],
            spacing=0,
            expand=True,
        ),
    )

ft.app(target=main)

```

-----

Live example: [https://flet-controls-gallery.fly.dev/layout/divider](https://flet-controls-gallery.fly.dev/layout/divider)

Online docs: [https://flet.dev/docs/controls/divider](https://flet.dev/docs/controls/divider)

#### height

```python
@property
def height() -> OptionalNumber
```

The height of this divider.

#### thickness

```python
@property
def thickness() -> OptionalNumber
```

The thickness of this divider.

#### color

```python
@property
def color() -> Optional[str]
```

The color of this divider.

#### leading\_indent

```python
@property
def leading_indent() -> OptionalNumber
```

The leading indentation of this divider.

#### trailing\_indent

```python
@property
def trailing_indent() -> OptionalNumber
```

The trailing indentation of this divider.

