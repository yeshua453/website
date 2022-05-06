---
title: Row
sidebar_label: Row
slug: row
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A control that displays its children in a horizontal array.
To cause a child control to expand and fill the available horizontal space set its `expand` property.

## Examples

### Horizontal stack - Gap and Padding

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Stack, Slider, Text
with flet.page("horizontal-stack-gap-padding") as page:

  bg_color = '#ddddee'
  page.horizontal_align = 'stretch'

  def items(count):
    items = []
    for i in range(1, count + 1):
      items.append(Text(value=i, align='center', vertical_align='center', width=30, height=30, bgcolor='BlueMagenta10', color='white', padding=5))
    return items

  def gap_slider_change(e):
    spacing_stack.gap = int(e.control.value)
    spacing_stack.update()

  def padding_slider_change(e):
    spacing_stack.padding = e.control.value
    spacing_stack.update()

  gap_slider = Slider("Gap between items", min=0, max=50, step=1, value=0, show_value=True, on_change=gap_slider_change)
  padding_slider = Slider("Stack padding", min=0, max=50, step=1, value=0, show_value=True, on_change=padding_slider_change)
  spacing_stack = Stack(horizontal=True, bgcolor=bg_color, gap=0, controls=items(5))
  
  page.add(gap_slider, padding_slider, spacing_stack)

  input()
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/stack/horizontal-stack-gap-padding.gif" width="75%" />

### Horizontal stack - Wrapping

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Stack, Slider, Text
with flet.page("horizontal-stack-wrapping") as page:

  bg_color = '#ddddee'
  page.horizontal_align = 'stretch'

  def items(count):
    items = []
    for i in range(1, count + 1):
      items.append(Text(value=i, align='center', vertical_align='center', width=30, height=30, bgcolor='BlueMagenta10', color='white', padding=5))
    return items

  def wrap_slider_change(e):
    width = int(e.control.value)
    wrap_stack.width = f"{width}%"
    wrap_stack.update()

  wrap_slider = Slider("Change the stack width to see how child items wrap onto multiple rows:",
        min=0, max=100, step=10, value=100, show_value=True, value_format='{value}%', on_change=wrap_slider_change)

  wrap_stack = Stack(horizontal=True, wrap=True, bgcolor=bg_color, gap=20, controls=items(10))
  
  page.add(wrap_slider, wrap_stack)

  input()
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/stack/horizontal-stack-wrapping.gif" width="75%" />

### Horizontal stack - Horizontal alignments

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Stack, Text
with flet.page("horizontal-stack-horizontal-alignments") as page:

  bg_color = '#ddddee'
  page.horizontal_align = 'stretch'

  def items(count):
    items = []
    for i in range(1, count + 1):
      items.append(Text(value=i, align='center', vertical_align='center', width=30, height=30, bgcolor='BlueMagenta10', color='white', padding=5))
    return items

  def horizontal_stack(horiz_align):
    return Stack(controls=[
            Text(value=horiz_align),
            Stack(horizontal=True, horizontal_align=horiz_align, vertical_align='center', gap=20, bgcolor=bg_color, controls=items(3))
        ])

  page.add(horizontal_stack('start'), horizontal_stack('center'), horizontal_stack('center'), horizontal_stack('space-between'), horizontal_stack('space-around'), horizontal_stack('space-evenly'))

  input()
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/stack/horizontal-stack-horizontal-alignments.png" width="75%" />

### Horizontal stack - Vertical alignments

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Stack, Text
with flet.page("horizontal-stack-vertical-alignments") as page:

  bg_color = '#ddddee'
  page.horizontal_align = 'stretch'

  def items(count):
    items = []
    for i in range(1, count + 1):
      items.append(Text(value=i, align='center', vertical_align='center', width=30, height=30, bgcolor='BlueMagenta10', color='white', padding=5))
    return items

  page.add(
        Text('start'),
        Stack(horizontal=True, vertical_align='start', height=100, bgcolor=bg_color, gap=20, controls=items(3)),
        Text('center'),
        Stack(horizontal=True, vertical_align='center', height=100, bgcolor=bg_color, gap=20, controls=items(3)),
        Text('end'),
        Stack(horizontal=True, vertical_align='end', height=100, bgcolor=bg_color, gap=20, controls=items(3)))

  input()
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/stack/horizontal-stack-vertical-alignments.png" width="75%" />

## Properties

### `controls`

A list of Controls to display inside the Row.

### `alignment`

How the child Controls should be placed horizontally.

For example, `start`, the default, places the children on the left of a Row. Supported values: `start`, `end`, `center`, `spaceBetween`, `spaceAround`, `spaceEvenly`.

### `vertical_alignment`

How the child Controls should be placed vertically.

Default value is `start`. Supported values: `start`, `center`, `end`, `stretch`, `baseline`.

### `tight`

Specifies how much space should be occupied horizontally. Default is `False` - allocate all space to children.

### `spacing`

Spacing between controls in a row. Default value is 10 virtual pixels. Spacing is applied only when `alignment` is set to `start`, `end` or `center`.

### `wrap`

When set to `True` the Row will put child controls into additional rows (runs) if they don't fit a single row.

### `run_spacing`

Spacing between runs when `wrap=True`. Default value is 10.

### `scroll`

Enables horizontal scrolling for the Row to prevent its content overflow. Supported values:

* `none` (default) - the Row is non-scrollable and its content could overflow.
* `auto` - scrolling is enabled and scroll bar is only shown when scrolling occurs.
* `adaptive` - scrolling is enabled and scroll bar is always shown when running app as web or desktop.
* `always` - scrolling is enabled and scroll bar is always shown.

## Expanding children

When a child Control is placed into a Row you can "expand" it to fill the available space. Every Control has `expand` property that can have either a boolean value (`True` - expand control to fill all available space) or an integer - an "expand factor" specifying how to divide a free space with other expanded child controls. For example, this code creates a row with a TextField taking all available space and an ElevatedButton next to it:

```python
r = Row([
  TextField(hint_text="Enter your name", expand=True),
  ElevatedButton(text="Join chat")
])
```

The following example with numeric expand factors creates a Row with 3 containers in it and having widths of `20% (1/5)`, `60% (3/5)` and `20% (1/5)` respectively:

```python
r = Row([
  Container(expand=1, content=Text("A")),
  Container(expand=3, content=Text("B")),
  Container(expand=1, content=Text("C"))
])
```

In general, the resulting width of a child in percents is calculated as `expand / sum(all expands) * 100%`.