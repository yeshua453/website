---
title: Divider
sidebar_label: Divider
slug: divider
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A thin horizontal line, with padding on either side. In the material design language, this represents a divider.

## Examples

### Icons with different colors and sizes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
# TBD
```
  </TabItem>
</Tabs>

## Properties

### `height`

The divider's height extent. The divider itself is always drawn as a horizontal line that is centered within the height specified by this value. If this is null, then this defaults to `16.0`.

### `thickness`

The thickness of the line drawn within the divider. A divider with a thickness of `0.0` is always drawn as a line with a height of exactly one device pixel. If this is null, then this defaults to `0.0`.

### `color`

The color to use when painting the line.