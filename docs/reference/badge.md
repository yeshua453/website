---
sidebar_label: badge
title: badge
---

## Badge Objects

```python
class Badge(Control)
```

A Material Design &quot;badge&quot;.

Badges are used to show notifications, counts, or status information on navigation items such as NavigationBar or NavigationRail destinations
or a button&#x27;s icon.

__Example__

```python
import flet as ft

def main(page: ft.Page):
    page.title = "Badges in NavigationBar icons"
    page.navigation_bar = ft.NavigationBar(
        destinations=[
            ft.NavigationDestination(
                icon_content=ft.Badge(
                    content=ft.Icon(ft.icons.EXPLORE),
                    small_size=10,
                ),
                label="Explore",
            ),
            ft.NavigationDestination(icon=ft.icons.COMMUTE, label="Commute"),
            ft.NavigationDestination(
                icon_content=ft.Badge(content=ft.Icon(ft.icons.PHONE), text="10")
            ),
        ]
    )
    page.add(ft.Text("Body!"))


ft.app(target=main)
```

-----

Online docs: https://flet.dev/docs/controls/badge

#### alignment

```python
@property
def alignment() -> Optional[Alignment]
```

Aligns the label relative to the content of the badge.

Alignment is an instance of `alignment.Alignment` class object with `x` and `y` properties
representing the distance from the center of a rectangle.

#### text

```python
@property
def text() -> Optional[str]
```

The text shown on badge&#x27;s label, typically 1 to 4 characters.

If the text is not provided, the badge is shown as a filled circle of `small_size` diameter.

#### content

```python
@property
def content() -> Optional[Control]
```

A child `Control` contained by the badge, typically an icon that&#x27;s part of a NavigationBar or a NavigationRail destination or a button&#x27;s icon.

#### offset

```python
@property
def offset() -> OffsetValue
```

Combined with `alignment` to determine the location of the label relative to the content.

Has effect only if `text` is also provided.

#### bgcolor

```python
@property
def bgcolor() -> Optional[str]
```

Background color of the label.

#### label\_visible

```python
@property
def label_visible() -> bool
```

If False, label is not displayed. By default, `label_visible` is True. It can be used to create a badge that&#x27;s only shown under certain conditions.

#### large\_size

```python
@property
def large_size() -> OptionalNumber
```

The badge&#x27;s label height if `text` is provided.

If the default value is overridden then it may be useful to also override `padding` and `alignment`.

#### padding

```python
@property
def padding() -> PaddingValue
```

The padding added to the badge&#x27;s label.

This value is only used if `text` is provided. Defaults to 4 pixels on the left and right.

#### small\_size

```python
@property
def small_size() -> OptionalNumber
```

The badge&#x27;s label diameter if `text` is not provided.

If `text` is not provided, the badge is shown as a filled circle of `small_size` diameter.

#### text\_color

```python
@property
def text_color() -> Optional[str]
```

Color of the text shown in the label. This color overrides the color of the label&#x27;s `text_style`.

#### text\_style

```python
@property
def text_style() -> Optional[TextStyle]
```

The text style to use for text in the label.

