---
sidebar_label: control
title: control
---

## Control Objects

```python
class Control()
```

#### before\_update

```python
def before_update() -> None
```

Mainly used when creating custom controls.

It is called before this control is updated.

Make sure not to call `update()` method within `before_update()`.

#### page

```python
@property
def page() -> Optional["Page"]
```

The page this control is attached to.

#### expand

```python
@property
def expand() -> Optional[Union[bool, int]]
```

Whether the child control can expand to fill the available space. Value can be a boolean or an integer
(an &quot;expand factor&quot; specifying how to divide a free space with other expanded child controls).

Effective only for children of the following: [`Column`](/docs/controls/column), [`Row`](/docs/controls/row), [Page](/docs/controls/page), [View](/docs/controls/view).

For more information and examples about `expand` property see [`Column`](/docs/controls/column#expanding-children) or [`Row`](/docs/controls/row#expanding-children).

#### expand\_loose

```python
@property
def expand_loose() -> bool
```

Whether the child control of a [`Column`](/docs/controls/column) or a [`Row`](/docs/controls/row) will be given
the flexibility to expand to fill the available space in the main axis (e.g., horizontally for a `Row` or
vertically for a `Column` ), but will not be required to fill the available space.

Effective only if `expand` is `True`.

#### rtl

```python
@property
def rtl() -> bool
```

Whether the text direction is right-to-left.

#### opacity

```python
@property
def opacity() -> float
```

The opacity of the control.

#### tooltip

```python
@property
def tooltip()
```

The tooltip text to be shown when this control is hovered over.

#### visible

```python
@property
def visible() -> bool
```

Whether this control should be visible on the page canvas.
Has effect on this control and all its possible descendants.
Invisible controls can&#x27;t be focused or selected with a keyboard or mouse and they do not emit any events.

#### disabled

```python
@property
def disabled() -> bool
```

Whether this control is disabled.
Has effect on this control and all its possible descendants.

For example, to create a disabled button:

```python
ft.ElevatedButton("Disabled Button", disabled=True)
```

#### data

```python
@property
def data() -> Optional[Any]
```

Arbitrary data of any type that can be attached to a control.

#### update

```python
def update() -> None
```

Update this control.

