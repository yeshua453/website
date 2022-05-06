---
title: Column
sidebar_label: Column
slug: column
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A control that displays its children in a vertical array.
To cause a child control to expand and fill the available vertical space set its `expand` property.

## Examples

### Example 1

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet

# ...
```
  </TabItem>
</Tabs>

## Properties

### `controls`

A list of Controls to display inside the Column.

### `alignment`

How the child Controls should be placed vertically.

For example, `start`, the default, places the children at the top of a Column. Supported values: `start`, `end`, `center`, `spaceBetween`, `spaceAround`, `spaceEvenly`.

### `horizontal_alignment`

How the child Controls should be placed horizontally.

Default value is `start`. Supported values: `start`, `center`, `end`, `stretch`, `baseline`.

### `tight`

Specifies how much space should be occupied vertically. Default is `False` - allocate all space to children.

### `spacing`

Spacing between controls in a Column. Default value is 10 virtual pixels. Spacing is applied only when `alignment` is set to `start`, `end` or `center`.

### `wrap`

When set to `True` the Column will put child controls into additional columns (runs) if they don't fit a single column.

### `run_spacing`

Spacing between runs when `wrap=True`. Default value is 10.

### `scroll`

Enables a vertical scrolling for the Column to prevent its content overflow. Supported values:

* `none` (default) - the Column is non-scrollable and its content could overflow.
* `auto` - scrolling is enabled and scroll bar is only shown when scrolling occurs.
* `adaptive` - scrolling is enabled and scroll bar is always shown when running app as web or desktop.
* `always` - scrolling is enabled and scroll bar is always shown.

## Expanding children

When a child Control is placed into a Column you can "expand" it to fill the available space. Every Control has `expand` property that can have either a boolean value (`True` - expand control to fill all available space) or an integer - an "expand factor" specifying how to divide a free space with other expanded child controls. For example, this code creates a column with a Container taking all available space and a Text control at the bottom serving as a status bar:

```python
r = Column([
  Container(expand=True, content=Text("Here is search results")),
  Text("Records found: 10")
])
```

The following example with numeric expand factors creates a Column with 3 containers in it and having heights of `20% (1/5)`, `60% (3/5)` and `20% (1/5)` respectively:

```python
r = Column([
  Container(expand=1, content=Text("Header")),
  Container(expand=3, content=Text("Body")),
  Container(expand=1, content=Text("Footer"))
])
```

In general, the resulting height of a child in percents is calculated as `expand / sum(all expands) * 100%`.