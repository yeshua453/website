---
title: PermissionHandler
sidebar_label: PermissionHandler
---

PermissionHandler checks/requests permission from device to access various components. Works on Windows, iOS, Android and web.
Based on the [permission_handler](https://pub.dev/packages/permission_handler) Dart/Flutter package.

PermissionHandler control is non-visual and should be added to `page.overlay` list.

:::info Packaging
To build your Flet app that uses `PermissionHandler` control add `--include-packages flet_permission_handler` to `flet build` command, for example:

```
flet build apk --include-packages flet_permission_handler
```
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

### Basic Example

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet as ft


def main(page: ft.Page):
    page.scroll = ft.ScrollMode.ADAPTIVE
    page.add(ft.SafeArea(ft.Text("PermissionHandler test")))
    ph = ft.PermissionHandler()
    page.overlay.append(ph)
    page.update()

    async def on_check_permission(e):
        status = await ph.microphone.check_permission_async()
        page.add(ft.SafeArea(ft.Text("is_granted: {}".format(status.is_granted))))

    check_permission_button = ft.TextButton(
        "Check Permission", on_click=on_check_permission
    )

    async def on_request_permission(e):
        page.add(ft.SafeArea(ft.Text(await ph.microphone.request_permission_async())))

    request_permission_button = ft.TextButton(
        "Request Permission", on_click=on_request_permission
    )
    page.add(
        ft.SafeArea(check_permission_button), ft.SafeArea(request_permission_button)
    )


ft.app(main)
```
  </TabItem>
</Tabs>

## Methods

### `check_permission()`

Checks permission and returns an instance of `PermissionStatus`.
`PermissionStatus` contains the following data members whose default value is None:
* `is_granted`-> bool
* `is_denied`-> bool
* `is_permanently_denied`-> bool
* `is_limited`-> bool
* `is_provisional`-> bool
* `is_restricted`-> bool

### `request_permission()`

Checks permission and returns an instance of `PermissionStatus` with data members as mentioned above.