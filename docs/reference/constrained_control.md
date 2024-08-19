---
sidebar_label: constrained_control
title: constrained_control
---

## ConstrainedControl Objects

```python
class ConstrainedControl(Control)
```

#### width

```python
@property
def width() -> OptionalNumber
```

The width of the control in virtual pixels.

#### height

```python
@property
def height() -> OptionalNumber
```

The height of the control in virtual pixels.

#### left

```python
@property
def left() -> OptionalNumber
```

The distance that the child&#x27;s left edge is inset from the left of the stack.

Effective inside a [`Stack`](/docs/controls/stack) only.

#### top

```python
@top.setter
def top(value: OptionalNumber)
```

The distance that the child&#x27;s top edge is inset from the top of the stack.

Effective inside a [`Stack`](/docs/controls/stack) only.

#### right

```python
@property
def right() -> OptionalNumber
```

The distance that the child&#x27;s right edge is inset from the right of the stack.

Effective inside a [`Stack`](/docs/controls/stack) only.

#### bottom

```python
@property
def bottom() -> OptionalNumber
```

The distance that the child&#x27;s bottom edge is inset from the bottom of the stack.

Effective inside a [`Stack`](/docs/controls/stack) only.

#### rotate

```python
@property
def rotate() -> RotateValue
```

Transforms control using a rotation around the center.

The value of `rotate` property could be one of the following types:

* `number` - a rotation in clockwise radians. Full circle `360°` is `math.pi * 2` radians, `90°` is `pi / 2`, `45°` is `pi / 4`, etc.
* `transform.Rotate` - allows to specify rotation `angle` as well as `number`0 - the location of rotation center.

For example:

`number`1

#### scale

```python
@property
def scale() -> ScaleValue
```

Scale control along the 2D plane. Default scale factor is `1.0` - control is not scaled. `0.5` - the control is twice smaller, `2.0` - the control is twice larger.

Different scale multipliers can be specified for `x` and `y` axis, but setting `Control.scale` property to an instance of `transform.Scale` class:

```python
from dataclasses import field

class Scale:
    scale: float = field(default=None)
    scale_x: float = field(default=None)
    scale_y: float = field(default=None)
    alignment: Alignment = field(default=None)
```

Either `scale` or `scale_x` and `0.5`0 could be specified, but not all of them, for example:

`0.5`1

#### offset

```python
@property
def offset() -> OffsetValue
```

Applies a translation transformation before painting the control.

The translation is expressed as a `transform.Offset` scaled to the control&#x27;s size. For example, an `Offset` with a `x` of `0.25` will result in a horizontal translation of one quarter the width of the control.

The following example displays container at `0, 0` top left corner of a stack as transform applies `-1 * 100, -1 * 100` (`offset * control_size`) horizontal and vertical translations to the control:

```python
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Stack(
            [
                ft.Container(
                    bgcolor="red",
                    width=100,
                    height=100,
                    left=100,
                    top=100,
                    offset=ft.transform.Offset(-1, -1),
                )
            ],
            width=1000,
            height=1000,
        )
    )

ft.app(main)
```

#### aspect\_ratio

```python
@property
def aspect_ratio() -> OptionalNumber
```

The aspect ratio (width to height) of this control.

