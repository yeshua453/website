---
sidebar_label: safe_area
title: safe_area
---

## SafeArea Objects

```python
class SafeArea(ConstrainedControl, AdaptiveControl)
```

#### left

```python
@property
def left() -> bool
```

Whether to avoid system intrusions on the left.

Defaults to `True`.

#### top

```python
@property
def top() -> bool
```

Whether to avoid system intrusions at the top of the screen, typically the system status bar.

Defaults to `True`.

#### right

```python
@property
def right() -> bool
```

Whether to avoid system intrusions on the right.

Defaults to `True`.

#### bottom

```python
@property
def bottom() -> bool
```

Whether to avoid system intrusions on the bottom side of the screen.

Defaults to `True`.

#### maintain\_bottom\_view\_padding

```python
@property
def maintain_bottom_view_padding() -> bool
```

Whether the `SafeArea` should maintain the bottom `MediaQueryData.viewPadding` instead of the bottom `MediaQueryData.padding`. Defaults to `False`.

For example, if there is an onscreen keyboard displayed above the SafeArea, the padding can be maintained below
the obstruction rather than being consumed. This can be helpful in cases where your layout contains flexible
controls, which could visibly move when opening a software keyboard due to the change in the padding value.
Setting this to true will avoid the UI shift.

#### content

```python
@property
def content() -> Control
```

A `Control` to display inside safe area.

#### minimum

```python
@property
def minimum() -> PaddingValue
```

This minimum padding to apply.
The greater of the minimum insets and the media padding will be applied.

#### minimum\_padding

```python
@property
def minimum_padding() -> PaddingValue
```

This minimum padding to apply.
The greater of the minimum insets and the media padding will be applied.

