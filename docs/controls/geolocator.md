---
title: Geolocator
sidebar_label: Geolocator
---

Geolocator fetches Position from device GPS. Works on macOS, Windows, iOS, Android and web.
Based on the [geolocator](https://pub.dev/packages/geolocator) Dart/Flutter package.

Geolocator control is non-visual and should be added to `page.overlay` list.

:::info Packaging
To build your Flet app that uses `Geolocator` control add `--include-packages flet_geolocator` to `flet build` command, for example:

```
flet build apk --include-packages flet_geolocator
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


async def main(page: ft.Page):
    page.window_always_on_top = True
    page.on_error = lambda e: print(f"Page Error: {e.data}")
    page.scroll = ft.ScrollMode.ADAPTIVE
    page.appbar = ft.AppBar(title=ft.Text("Geolocator Tests"))
    gl = ft.Geolocator()
    page.overlay.append(gl)

    settings_dlg = lambda handler: ft.AlertDialog(
        adaptive=True,
        title=ft.Text("Opening Location Settings..."),
        content=ft.Text(
            "You are about to be redirected to the location/app settings. "
            "Please locate this app and grant it location permissions."
        ),
        actions=[
            ft.TextButton(
                text="OK",
                on_click=handler,
            ),
        ],
        actions_alignment=ft.MainAxisAlignment.CENTER,
    )

    def handle_permission_request(e):
        page.add(ft.Text(f"request_permission: {gl.request_permission()}"))

    def handle_has_permission(e):
        page.add(ft.Text(f"has_permission: {gl.has_permission()}"))

    def handle_get_current_position(e):
        p = gl.get_current_position()
        page.add(ft.Text(f"get_current_position: ({p.latitude}, {p.longitude})"))

    def handle_get_last_known_position(e):
        p = gl.get_last_known_position()
        page.add(ft.Text(f"get_last_known_position: ({p.latitude}, {p.longitude})"))

    def handle_location_service_enabled(e):
        page.add(
            ft.Text(f"is_location_service_enabled: {gl.is_location_service_enabled()}")
        )

    def handle_open_location_settings(e):
        page.close_dialog()
        page.add(ft.Text(f"open_location_settings: {gl.open_location_settings()}"))

    def handle_open_app_settings(e):
        page.close_dialog()
        page.add(ft.Text(f"open_app_settings: {gl.open_app_settings()}"))

    page.add(
        ft.Row(
            [
                ft.OutlinedButton(
                    "request_permission",
                    on_click=handle_permission_request,
                ),
                ft.OutlinedButton(
                    "has_permission",
                    on_click=handle_has_permission,
                ),
                ft.OutlinedButton(
                    "get_current_position",
                    on_click=handle_get_current_position,
                ),
                ft.OutlinedButton(
                    "get_last_known_position",
                    visible=False if page.web else True,
                    on_click=handle_get_last_known_position,
                ),
                ft.OutlinedButton(
                    "is_location_service_enabled",
                    on_click=handle_location_service_enabled,
                ),
                ft.OutlinedButton(
                    "open_location_settings",
                    visible=False if page.web else True,
                    on_click=lambda e: page.show_dialog(
                        settings_dlg(handle_open_location_settings)
                    ),
                ),
                ft.OutlinedButton(
                    "open_app_settings",
                    visible=False if page.web else True,
                    on_click=lambda e: page.show_dialog(
                        settings_dlg(handle_open_app_settings)
                    ),
                ),
            ],
            wrap=True,
        )
    )


ft.app(main)
```
  </TabItem>
</Tabs>

## Methods

### `get_current_position()`

Returns an instance of `GeolocatorPosition` whose values are available on the platform.
`GeolocatorPosition` contains the following data members whose default value is None:
* `latitude`-> float
* `longitude`-> float
* `speed`-> float
* `altitude`-> float
* `timestamp`-> str
* `accuracy`-> float
* `altitude_accuracy`-> float
* `heading`-> float
* `heading_accuracy`-> float
* `speed_accuracy`-> float
* `floor`-> int
* `is_mocked`-> bool

### `get_last_known_position()`

Returns an instance of `GeolocatorPosition` whose values are available on the platform.

### `has_permission()`

Returns an instance of `LocationPermission` with any one of the following `Enum` member name.
* `DENIED`
* `DENIED_FOREVER`
* `WHILE_IN_USE`
* `ALWAYS`
* `UNABLE_TO_DETERMINE`

### `request_permission()`

Returns an instance of `LocationPermission` with any one of the above mentioned `Enum` member name.

### `is_location_service_enabled()`

Checks if location service is enable and returns `bool` status.

### `open_app_settings()`

Attempts to open app setting and returns `bool` status.

### `open_location_settings()`

Attempts to open location setting and returns `bool` status.
