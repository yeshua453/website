---
sidebar_label: bottom_app_bar
title: bottom_app_bar
---

## BottomAppBar Objects

```python
class BottomAppBar(ConstrainedControl)
```

A material design bottom app bar.

-----

Online docs: https://flet.dev/docs/controls/bottomappbar

#### content

```python
@property
def content() -> Optional[Control]
```

A child Control contained by the BottomAppBar.

This is typically a widget or set of widgets that are displayed within the BottomAppBar.

#### surface\_tint\_color

```python
@property
def surface_tint_color() -> Optional[str]
```

The color used as an overlay on `bgcolor` to indicate elevation.

If this is `None`, no overlay will be applied. Otherwise, this color will be composited on top of `bgcolor` with an opacity related to `elevation` and used to paint the BottomAppBar&#x27;s background.

#### bgcolor

```python
@property
def bgcolor() -> Optional[str]
```

The fill color to use for the BottomAppBar.

Default color is defined by the current theme.

#### shadow\_color

```python
@property
def shadow_color() -> Optional[str]
```

The color of the shadow below the BottomAppBar.

#### padding

```python
@property
def padding() -> PaddingValue
```

Empty space to inscribe inside a container decoration (background, border).

Padding is an instance of the `Padding` class. Defaults to `padding.symmetric(vertical=12.0, horizontal=16.0)`.

#### shape

```python
@property
def shape() -> Optional[NotchShape]
```

The notch that is made for the floating action button.

The shape is an instance of the `NotchShape` class.

#### clip\_behavior

```python
@property
def clip_behavior() -> Optional[ClipBehavior]
```

The content will be clipped (or not) according to this option.

Value is of type `ClipBehavior` and defaults to `ClipBehavior.NONE`.

#### notch\_margin

```python
@property
def notch_margin() -> OptionalNumber
```

The margin between the FloatingActionButton and the BottomAppBar&#x27;s notch.

Can be visible only if `shape` is not `None`.

#### elevation

```python
@property
def elevation() -> OptionalNumber
```

This property controls the size of the shadow below the BottomAppBar.

Defaults to `4`. The value must be `None` or a non-negative number.

