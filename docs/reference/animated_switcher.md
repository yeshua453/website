---
sidebar_label: animated_switcher
title: animated_switcher
---

## AnimatedSwitcherTransition Objects

```python
class AnimatedSwitcherTransition(Enum)
```

Enum representing the types of transitions available for the `AnimatedSwitcher`.

**Attributes**:

- `FADE` _str_ - Fade transition.
- `ROTATION` _str_ - Rotation transition.
- `SCALE` _str_ - Scale transition.

## AnimatedSwitcher Objects

```python
class AnimatedSwitcher(ConstrainedControl)
```

A control that by default does a cross-fade between a new control and the control previously set on the AnimatedSwitcher as a `content`.

__Example__

```python
import flet as ft

def main(page: ft.Page):

    c1 = ft.Container(
        ft.Text("Hello!", style=ft.TextThemeStyle.HEADLINE_MEDIUM),
        alignment=ft.alignment.center,
        width=200,
        height=200,
        bgcolor=ft.colors.GREEN,
    )
    c2 = ft.Container(
        ft.Text("Bye!", size=50),
        alignment=ft.alignment.center,
        width=200,
        height=200,
        bgcolor=ft.colors.YELLOW,
    )
    c = ft.AnimatedSwitcher(
        content=c1,
        transition=ft.AnimatedSwitcherTransition.SCALE,
        duration=500,
        reverse_duration=100,
        switch_in_curve=ft.AnimationCurve.BOUNCE_OUT,
        switch_out_curve=ft.AnimationCurve.BOUNCE_IN,
    )

    def animate(e):
        c.content = c2 if c.content == c1 else c1
        c.update()

    page.add(
        c,
        ft.ElevatedButton("Animate!", on_click=animate),
    )

ft.app(target=main)
```

-----

Online docs: https://flet.dev/docs/controls/animatedswitcher

#### content

```python
@property
def content() -> Control
```

The content to display. When the `content` changes, the AnimatedSwitcher will animate the transition from the
old `content` to the new one.

Value is of type `Control`.

#### duration

```python
@property
def duration() -> int
```

The duration, in milliseconds, of the transition from the old `content` value to the new one.

Value is of type `int` and defaults to `1000` milliseconds.

#### reverse\_duration

```python
@property
def reverse_duration() -> int
```

The duration, in milliseconds, of the transition from the new `content` value to the old one.

Value is of type `int` and defaults to `1000` milliseconds.

#### switch\_in\_curve

```python
@property
def switch_in_curve() -> Optional[AnimationCurve]
```

The animation curve to use when transitioning in a new `content`.

#### switch\_out\_curve

```python
@property
def switch_out_curve() -> Optional[AnimationCurve]
```

The animation curve to use when transitioning a previous `content` out.

#### transition

```python
@property
def transition() -> Optional[AnimatedSwitcherTransition]
```

An animation type to transition between new and old `content`.

