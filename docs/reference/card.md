---
sidebar_label: card
title: card
---

## Card Objects

```python
class Card(ConstrainedControl, AdaptiveControl)
```

A material design card: a panel with slightly rounded corners and an elevation shadow.

**Example**:

```
import flet as ft

def main(page):
    page.title = "Card Example"
    page.add(
        ft.Card(
            content=ft.Container(
                content=ft.Column(
                    [
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.ALBUM),
                            title=ft.Text("The Enchanted Nightingale"),
                            subtitle=ft.Text(
                                "Music by Julie Gable. Lyrics by Sidney Stein."
                            ),
                        ),
                        ft.Row(
                            [ft.TextButton("Buy tickets"), ft.TextButton("Listen")],
                            alignment=ft.MainAxisAlignment.END,
                        ),
                    ]
                ),
                width=400,
                padding=10,
            )
        )
    )

ft.app(target=main)

```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/card

#### margin

```python
@property
def margin() -> MarginValue
```

The empty space that surrounds the card.

Value can be one of the following types: `int`, `float`, or `Margin`.

#### elevation

```python
@property
def elevation() -> OptionalNumber
```

Controls the size of the shadow below the card.

Defaults to `1.0`. The value must be `None` or a non-negative number.

#### color

```python
@property
def color() -> Optional[str]
```

The card&#x27;s background color.

This is the color used to fill the card&#x27;s background. Defaults to `None`.

#### shadow\_color

```python
@property
def shadow_color() -> Optional[str]
```

The color of the shadow below the card.

This color will be used to paint the shadow effect. Defaults to `None`.

#### surface\_tint\_color

```python
@property
def surface_tint_color() -> Optional[str]
```

The color used as an overlay on `color` to indicate elevation.

If this is `None`, no overlay will be applied. Otherwise, this color will be composited on top of `color` with an opacity related to `elevation` and used to paint the card&#x27;s background. Defaults to `None`.

#### shape

```python
@property
def shape() -> Optional[OutlinedBorder]
```

The shape of the card.

Value is of type `OutlinedBorder` and defaults to `RoundedRectangleBorder(radius=4.0)`.

#### content

```python
@property
def content() -> Optional[Control]
```

The Control that should be displayed inside the card.

This control can only have one child. To lay out multiple children, let this control&#x27;s child be a control such as `Row`, `Column`, or `Stack`, which have a children property, and then provide the children to that control.

#### clip\_behavior

```python
@property
def clip_behavior() -> Optional[ClipBehavior]
```

The content will be clipped (or not) according to this option.

Value is of type `ClipBehavior` and defaults to `ClipBehavior.NONE`.

#### is\_semantic\_container

```python
@property
def is_semantic_container() -> bool
```

Set to `True` (default) if this card represents a single semantic container, or `False` if it represents a collection of individual semantic nodes (different types of content).

#### show\_border\_on\_foreground

```python
@property
def show_border_on_foreground() -> bool
```

Whether the shape of the border should be painted in front of the content or behind.

Defaults to `True`.

#### variant

```python
@property
def variant() -> Optional[CardVariant]
```

Defines the card variant to be used.

Value is of type `CardVariant` and defaults to `CardVariant.ELEVATED`.

