---
title: Row
sidebar_label: Row
slug: row
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A control that displays its children in a horizontal array.
To cause a child control to expand to fill the available horizontal space set its `expand` property.

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
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
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
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
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
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
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
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/stack/horizontal-stack-vertical-alignments.png" width="75%" />

### Vertical stack - Vertical alignments

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Stack, Text
with flet.page("vertical-stack-vertical-alignments") as page:

  bg_color = '#ddddee'
  page.horizontal_align = 'stretch'

  def items(count):
    items = []
    for i in range(1, count + 1):
      items.append(Text(value=i, align='center', vertical_align='center', width=30, height=30, bgcolor='BlueMagenta10', color='white', padding=5))
    return items

  def vertical_stack(vert_align):
        return Stack(width='20%', controls=[
            Text(value=vert_align),
            Stack(vertical_align=vert_align, horizontal_align='center', height=300, gap=20, bgcolor=bg_color, controls=items(3))
        ])

  page.add(Stack(horizontal=True, horizontal_align='space-between', width='100%', controls=[
            vertical_stack('start'),
            vertical_stack('center'),
            vertical_stack('end'),
            vertical_stack('space-between'),
            vertical_stack('space-around'),
            vertical_stack('space-evenly')
        ]))

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/stack/vertical-stack-vertical-alignments.png" width="100%" />

### Stack with `submit` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Stack, Text, Textbox, Message
with flet.page("stack-with-submit-event") as page:

  bg_color = '#ddddee'
  page.horizontal_align = 'stretch'

  def stack_on_submit(e):
        stack = e.control
        stack.controls.insert(0, Message("Form has been submitted!", type='success', dismiss=True))
        stack.update()
  
  form1 = Stack(padding=10, width='50%', border='2px solid #eee', border_radius=5, controls=[
        Text("Pressing ENTER inside the stack will fire 'submit' event."),
        Textbox("First name"),
        Textbox("Last name")
    ], on_submit=stack_on_submit)

  page.add(form1)

  input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/stack/stack-with-submit-event.gif" width="100%" />

## Properties

### `controls`

### `alignment`

### `vertical_alignment`

### `tight`

### `spacing`

### `wrap`

### `run_spacing`

### `scroll`