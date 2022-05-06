---
title: Page
sidebar_label: Page
slug: page
---

Page is the top most container for all other controls.
It is is automatically added when a new page is created or app session started.

Page control has a reserved `page` control ID. You cannot add Page control, however you can change its properties. Technically, the Page is a vertical [Stack](stack) control, so it has similar behavior and shares some properties.

## Properties

### `content`

### `title`

### `horizontal_alignment`

### `vertical_alignment`

### `spacing`

### `padding`

### `bgcolor`

### `scroll`

### `theme_mode`

### `theme`

### `dark_theme`

### `clipboard`

### `splash`

### `floating_action_button`

### `banner`

### `snack_bar`

### `dialog`

### `session_id`

### `window_width`

### `window_height`

## Events

### `on_resize`

### `on_connect`

### `on_disconnect`

### `on_close`



| Name              | Type      | Default       | Description |
| ----------------- | --------- | ------------- | ----------- |
| `title`           | string    | `{page_name} - Flet`          | A title of browser window.            |
| `verticalFill`    | bool      | `false`       | Defines whether page contents takes 100% of the height of browser window.   |
| `horizontalAlign` | string    | `start`         | Defines how to align page children horizontally: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`. |
| `verticalAlign`   | string    |               | Defines how to align page children vertically: `start`, `end`, `center`, `space-between`, `space-around`, `space-evenly`, `baseline` or `stretch`.    |
| `width`           | string    | `100%`        | The width of a page container.            |
| `padding`         | string    | `10px`        | The padding of a page container.            |
| `gap`             | string    | `10`          | A gap between page child controls.            |
| `bgcolor`         | string    |               | Page background color.            |
| floating_action_button | Control |     | FloatingActionButton | 
| `hash`            | string    |               | Read-only window's width. Updated for multi-user apps only when browser window is 
| `winWidth`        | number    |               | Read-only window's width. Updated for multi-user apps only when browser window is resized.      |
| `winHeight`       | number    |               | Read-only window's height. Updated for multi-user apps only when browser window is resized.      |
| `theme`                | string    |  `light`  | Page's theme: `light` or `dark`.  |
| `themePrimaryColor`    | string    |           | Theme primary color. Use [Fluent UI Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/) to build a custom theme. |
| `themeTextColor`       | string    |           | Theme text color. Use [Fluent UI Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/) to build a custom theme. |
| `themeBackgroundColor` | string    |           | Theme background color. Use [Fluent UI Theme Designer](https://fabricweb.z5.web.core.windows.net/pr-deploy-site/refs/heads/master/theming-designer/) to build a custom theme. |

## Events

| Name       | Description |
| ---------- | ----------- |
| `resize`     | Fires when page (browser window) has been resized. |
| `connect`    | Fires when a web user connects to a page session. It is not triggered when an app page is first opened, but is triggered when the page is refreshed, or computer unlocked and browser reconnected. |
| `disconnect` | Fires when a web user disconnects from a page session, i.e. closes browser window. |
| `close`      | Fires when a session has expired after timeout (60 minutes by default). |

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

Creating a new page with a random name and connecting to it:

```python
import flet
page = flet.page()
```

Creating a page with a custom name:

```python
import flet
page = flet.page("my-page")
```

By default, when connecting to a page its contents is cleared. To preserve page contents and connect it in update mode:

```python
import flet
page = flet.page("my-page", update=True)
```

To update page title:

```python
page.title = "My App!"
page.update()
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
Import-Module flet
```

  </TabItem>
</Tabs>
