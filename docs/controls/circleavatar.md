---
title: CircleAvatar
sidebar_label: CircleAvatar
slug: circleavatar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A circle that represents a user.

Typically used with a user's profile image, or, in the absence of such an image, the user's initials. A given user's initials should always be paired with the same background color, for consistency.

If `foreground_image_url` fails then `background_image_url` is used. If `background_image_url` fails too, `bgcolor` is used.

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

| Name          | Type    | Default | Description |
| ------------- | ------- | ------- | ----------- |
| `foreground_image_url`   | string  |         | The foreground image of the circle. Typically used as profile image. For fallback use `background_image_url`. |
| `background_image_url`   | string  |         | The background image of the circle. Changing the background image will cause the avatar to animate to the new image. Typically used as a fallback image for `foreground_image_url`. If the CircleAvatar is to have the user's initials, use `content` instead. |
| `bgcolor`   | string  |         | The color with which to fill the circle. Changing the background color will cause the avatar to animate to the new color. |
| `color`    | string  |         | The default text color for text in the circle. Defaults to the primary text theme color if no `bgcolor` is specified. |
| `radius`   | number  |         | The size of the avatar, expressed as the radius (half the diameter). If radius is specified, then neither minRadius nor maxRadius may be specified. |
| `min_radius` | number  |         | The minimum size of the avatar, expressed as the radius (half the diameter). If minRadius is specified, then radius must not also be specified. Defaults to zero. |
| `max_radius` | number  |         | The maximum size of the avatar, expressed as the radius (half the diameter). If maxRadius is specified, then radius must not also be specified. Defaults to "infinity". |
| `tooltip`      | string |         | The text displayed when hovering the mouse over the button. |
| `content`      | Control|         | Typically a `Text` control. If the CircleAvatar is to have an image, use `background_image_url` instead. |

## Child controls

* Something
